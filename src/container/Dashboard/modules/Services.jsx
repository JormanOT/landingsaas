import { useState } from 'react'
import Dashboard from "../Dashboard"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Services = () => {
    return (
        <CreateButton>
            Crear
        </CreateButton>
    )
}

const Modal = ({ showState }) => {

    return (
        <ModalContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Body>
                <AiOutlineCloseCircle
                    onClick={() => showState()}
                    id='closed' color='black' size={'1.3rem'}
                />



            </Body>
        </ModalContainer>
    )
}

const ModalContainer = styled(motion.div)`
    position : fixed;
    top : 0;
    left : 0;
    width : 100%;
    height : 100vh;
    display : grid;
    place-items : center;
    background-color : rgba(0,0,0,0.6);
    z-index : 1000;
`
const Body = styled.div`
    position : relative;
    padding : 2em;
    background-color : white;
    border-radius : 25px;
    box-shadow : 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    gap : 20px;

    #closed{
        position : absolute;
        top : 4%;
        right : 5%;

        &:hover{
            cursor : pointer;
            transform : scale(1.1)
        }
    }

`
const CreateButton = styled(motion.button)`
    border : none;
    background-color : var(--PrimaryColor);
    color : white;
    width : 160px;
    height : 40px;
    border-radius : 5px;
    padding : 10px;
`

export default Dashboard(Services)