import { useState, useRef } from 'react'
import styled from 'styled-components'
import { useFetchData } from '../../hooks/useFetchData.js';
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const userId = import.meta.env.VITE_USER_ID;

const Login = () => {
    const inputPass = useRef();
    const { FetchData, loading } = useFetchData();
    const navigate = useNavigate();

    const handleAccess = async () => {
        if (inputPass.current.value === '') return toast.error('Escribe la credencial');

        const params = {
            method: 'POST',
            url: '/api/v1/auth',
            data: { userId, password: inputPass.current.value },
        }

        const result = FetchData(params);

        toast.promise(result, {
            loading: 'Validando Credenciales',
            success: (data) => {
                if (data?.success) {
                    localStorage.setItem('auth', data?.token);
                    navigate('/dashboard')
                } else {
                    throw Error('Credenciales Incorrectas')
                }
            },
            error: e => e.message
        });
    }

    return (
        <Container className='app'>
            <Toaster />
            <Body>
                <h2>Inicia Sesion</h2>
                <p>para acceder al dashboard proporciona la clave de acceso</p>
                <input ref={inputPass} type="password" />
                <button onClick={handleAccess}>Acceder</button>
            </Body>
        </Container>
    )
}

const Container = styled.div`
    width : 100%;
    height : 100dvh;
    display : grid;
    place-items : center;
`
const Body = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;
    justify-content : center;
    align-items : center;
    width : 40%;
    height : 40%;
    border-radius : 2em;
    background-color : white;
    box-shadow : 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04);

    input{
        width : 60%;
        height : 50px;
        border : 3px solid rgb(227 221 221);
        border-radius : 8px;
        padding : 5px;
        font-size : 16px;
        font-weight : 600;
        transition : 0.3s ease;
        color : gray;
      
        :hover{
            border : 3px solid gray;
        }
    }

    button{
        margin-top : 20px;
        max-width : 250px;
        border-radius : 20px;
        background-color : #400EA6;
        border : 1px solid #986FE9;
        width : 60%;
        height : 35px;
        pading : 15px;
        font-size : 12px;
        font-weight : 600;
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;
        color : white;
        gap : 5px;
        transition : .3s ease;

        &:hover{
            cursor : pointer;
            background-color : #570DE6;
        }
    }
`
export default Login