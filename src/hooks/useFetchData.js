import { useState, useCallback, useMemo } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const token = localStorage.getItem('auth') ?? null;

export const useFetchData = () => {
    const [loading, setLoading] = useState(false);


    const FetchData = useCallback(async (params) => {
        axios.defaults.baseURL = BACKEND_URL;

        axios.interceptors.request.use(async (config) => {
            if (!config.headers['Authorization']) {
                config.headers["Authorization"] = `Bearer ${token}`;
                config.headers["mode"] = `cors`;
            }
            return config;
        });

        try {
            setLoading(true);
            const result = await axios.request(params);
            return result.data;
        } catch (error) {
            setLoading(false);
            console.log(error.response);
        } finally {
            setLoading(false);
        }
    }, [axios]);

    return useMemo(() => ({ FetchData, loading }), [FetchData, loading]);
};