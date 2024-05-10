import styled from "styled-components"
import { motion } from 'framer-motion'

export const Popup = styled.div`
    position : relative;
    width : 100%;
    display : flex;
    flex-direction : row;
    gap : 10px;
    justify-content : start;
    align-items : center;

    svg:hover{
        cursor : pointer
    }
`
export const Text = styled(motion.div)`
    position : absolute;
    top : -40px;
    height : 40px;
    padding : 15px;
    border-radius : 15px;
    background-color : rgba(0,0,20,0.60);
    display : flex;
    align-items : center;
    color : white;
`