import { useState, useRef } from 'react'
import styled from 'styled-components'
import { images, verifyImage } from '../../../constants'
import { FaCloudUploadAlt } from 'react-icons/fa'
import DashboardServices from '../../../services'
import toast from 'react-hot-toast'
import { useFetchData } from '../../../hooks/useFetchData'


const PrincipalImage = ({ image }) => {
    const [changeLogo, setChangeLogo] = useState(false);
    const [heroImage, setHeroImage] = useState(image);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const { FetchData } = useFetchData();


    const handleInputClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setLoading(true);
        const { uploadHeroImage } = DashboardServices;

        if (file) {

            const formData = new FormData();
            formData.append('image', file);

            const uploadImage = FetchData(uploadHeroImage(formData));

            toast.promise(uploadImage, {
                loading: 'Por favor espere...',
                success: (response) => {
                    setLoading(false)
                    setHeroImage(response.image);
                    return 'Imagen agregada.'
                },
                error: e => `${e.message}`,
            });
        }
    };


    return (
        <ProfileImage>
            <input
                onChange={(e) => handleImageChange(e)}
                ref={inputRef}
                type="file"
                name="image"
                id="image"
                hidden
            />
            <img
                src={heroImage === undefined ? images.noImage : verifyImage(heroImage)}
                alt="Profile"
                onMouseEnter={() => setChangeLogo(s => !s)} />
            {changeLogo && (
                <div
                    onMouseLeave={() => setChangeLogo(s => !s)}>
                    <button
                        onClick={handleInputClick}
                    >
                        <FaCloudUploadAlt color={'#FFF'} size={'1.4rem'} />
                        <h6>Cambiar Imagen Principal</h6>
                    </button>
                </div>
            )}
        </ProfileImage>
    )
}

const ProfileImage = styled.div`
    position : relative;
    width : 250px;
    height : 250px;

    div{
        position : absolute;
        top : 0;
        left : 0;
        width : 100%;
        height : 100%;
        display : grid;
        place-items : center;
        background-color : rgba(0,0,0,0.6);

        svg{
            color : white !important;
        }

        button{
            border : none;
            background-color : transparent;
            display : flex;
            flex-direction : column;
            align-items : center;
            gap : 5px;
            color : white;

            :hover{
                cursor : pointer;
            }
        }
    }

    img{
        width : 250px;
        height : 250px;
        object-fit : cover;
        border : 3px solid white;
    }
`

export default PrincipalImage