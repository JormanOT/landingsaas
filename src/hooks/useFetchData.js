import { useState, useCallback, useMemo } from 'react'
import axios from 'axios'

const BACKEND_URL = process.env.BACKEND_URL;
const token = localStorage.getItem('landingToken') ?? null;

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
            console.log(error);
            return error;
        } finally {
            setLoading(false);
        }
    }, [axios]);

    return useMemo(() => ({ FetchData, loading }), [FetchData, loading]);
};