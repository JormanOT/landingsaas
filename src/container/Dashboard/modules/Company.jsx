import { useState, useRef } from 'react'
import Dashboard from "../Dashboard"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useFetchData } from '../../../hooks/useFetchData'
import { PopupInfo } from '../../../components'
import DashboardServices from '../../../services'
import { images } from '../../../constants'
import { FaCloudUploadAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'




const Company = () => {
    const [company, setCompany] = useState(null);
    const { FetchData, loading } = useFetchData();
    const [updateForm, setUpdateForm] = useState(null);
    const inputRef = useRef(null);
    const [changeLogo, setChangeLogo] = useState(false);

    const handleInputClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const { company: { uploadLogo } } = DashboardServices;

        if (file) {

            const formData = new FormData();
            formData.append('image', file);

            const uploadImage = FetchData(uploadLogo(formData));

            toast.promise(uploadImage, {
                loading: 'Por favor espere...',
                success: (response) => {
                    setHeroImage(response.image);
                    return 'Imagen agregada.'
                },
                error: e => `${e.message}`,
            });


        }
    };


    const handleInput = (e, type) => {
        const Form = {
            ...updateForm,
            [`${type}`]: e.target.value
        }
        setUpdateForm(Form);
    }

    const updateCompany = async (e) => {
        e.preventDefault();
        const { company: { setCompany } } = DashboardServices;

        const result = await FetchData(setCompany(updateForm));
        if (result?.success) {
            toast.success('Actualizado con exito');
            setCompany({ ...company, ...updateForm });
        }
        toast.error('Error actualizando');
    }

    useEffect(() => {
        const { company: { getCompany } } = DashboardServices;
        const id = import.meta.env.VITE_USER_ID;

        const getData = async () => {
            const result = await FetchData(getCompany(id));
            setCompany(result?.data ?? null)
        }

        getData();
    }, [])
    return (
        <Container>
            <h3>Informacion del Negocio</h3>
            <p>Esta seccion se encuentra la informacion publica de la empresa</p>


            <InputsContainer>

                <PopupInfo
                    title='Nombre de la Compañia'
                    text='Ingresa el nombre de tu negocio'
                />
                <input
                    defaultValue={company?.name ?? ''}
                    type="text"
                    onChange={(e) => handleInput(e, 'name')}
                />

                <PopupInfo
                    title='Correo Electronico'
                    text='Ingresa el correo de contacto de tu negocio'
                />
                <input
                    onChange={(e) => handleInput(e, 'mail')}
                    defaultValue={company?.mail ?? ''}
                    type="text"
                />

                <PopupInfo
                    title='Numero de Telefono'
                    text='Ingresa el numero de contacto de tu negocio'
                />
                <input
                    onChange={(e) => handleInput(e, 'phone')}
                    defaultValue={company?.phone ?? ''}
                    type="text"
                />

                <PopupInfo
                    title='Direccion de la Compañia'
                    text='Ingresa la direccion fiscal de tu negocio'
                />
                <input
                    onChange={(e) => handleInput(e, 'direction')}
                    defaultValue={company?.direction ?? ''}
                    type="text"
                />

                <h3>Logo de la Compañia</h3>

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
                        src={company?.logo === undefined ? images.noImage : verifyImage(company.logo)}
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

                <PopupInfo
                    title='Redes sociales'
                    text='Ingresa los link de tus perfiles sociales'
                />
                <input
                    onChange={(e) => handleInput(e, 'facebook')}
                    defaultValue={company?.social[0] ?? ''}
                    type="text"
                    placeholder='Facebook'
                />
                <input
                    onChange={(e) => handleInput(e, 'linkedin')}
                    defaultValue={company?.social[1] ?? ''}
                    type="text"
                    placeholder='LinkedIn'
                />
                <input
                    onChange={(e) => handleInput(e, 'instagram')}
                    defaultValue={company?.social[2] ?? ''}
                    type="text"
                    placeholder='Instagram'
                />

                <input hidden type="file" placeholder="Logo" />
            </InputsContainer>

            {updateForm !== null && (
                <FloatButton
                    type='button'
                    onClick={(e) => updateCompany(e)}
                >
                    Guardar Cambios
                </FloatButton>
            )}


        </Container>
    )
}


const Container = styled.div`
    width : 100%;
    min-height : 100dvh;
    padding : 2em;
`
const InputsContainer = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;
    padding : 2em;
    width : 100%;

    input, textarea{
        width : ${props => props.width ? props.width : '50%'};
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
`
const FloatButton = styled.button`
    position : fixed;
    bottom : 0;
    right : 0;
    border : none;
    width : 150px;
    height : 50px;
    padding : 1em;
    background-color : #570DE6;
    color : white;
    display : grid;
    place-items : center;

    &:hover{
        background-color : #400EA6;
        cursor : pointer;
    }
`
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

export default Dashboard(Company)