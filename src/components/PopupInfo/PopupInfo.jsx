import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const PopupInfo = ({ title, text }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <Popup>
            <h4>{title}</h4>
            <AiOutlineQuestionCircle
                onMouseEnter={() => setShowPopup(s => !s)}
                onMouseLeave={() => setShowPopup(s => !s)}
                color='gray' />
            {showPopup && (
                <Text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p>{text}</p>
                </Text>
            )}
        </Popup>
    )
}

const Popup = styled.div`
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
const Text = styled(motion.div)`
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

export default PopupInfo