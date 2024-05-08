import { useState, useEffect } from 'react'
import Dashboard from "../Dashboard"
import styled from 'styled-components'
import { images, verifyImage } from '../../../constants'
import DashboardServices from '../../../services/index.js'
import { useFetchData } from '../../../hooks/useFetchData'
import { Loader } from '../../../components'
import ReviewsImages from '../components/ReviewImages.jsx'
import PrincipalImage from '../components/PrincipalImage.jsx'
import toast from 'react-hot-toast'

const Header = () => {
    const [hero, setHero] = useState(null);
    const { FetchData, loading } = useFetchData();
    const [form, setForm] = useState(null);
    const [updateForm, setUpdateForm] = useState(null);

    const handleInput = (e, type) => {
        const Form = {
            ...updateForm,
            [`${type}`]: e.target.value
        }
        setUpdateForm(Form);
    }

    const updateHeader = async (e) => {
        e.preventDefault();
        const { setHeader } = DashboardServices;

        const result = await FetchData(setHeader(updateForm));
        if (result?.success) {
            toast.success('Actualizado con exito');
            setHero({ ...hero, ...updateForm });
        }
        toast.error('Error actualizando');
    }


    useEffect(() => {
        const { getHeader } = DashboardServices;
        const id = import.meta.env.VITE_USER_ID;

        const getData = async () => {
            const result = await FetchData(getHeader(id));
            setHero(result?.data ?? null)
        }

        getData();
    }, [])

    if (loading) return <Loader />


    return (
        <Container>
            <h3>Hero de Presentacion</h3>
            <p>Esta seccion el la cara de presentacion del sitio web</p>


            <InputsContainer>
                <input
                    defaultValue={hero?.title ?? ''}
                    type="text"
                    onChange={(e) => handleInput(e, 'title')}
                    placeholder="Titulo Principal"
                />
                <textarea
                    rows={10}
                    onChange={(e) => handleInput(e, 'subtitle')}
                    defaultValue={hero?.subtitle ?? ''}
                    type="text"
                    placeholder="Resumen de lo que ofreces"
                />
                <input
                    onChange={(e) => handleInput(e, 'link')}
                    defaultValue={hero?.link ?? ''}
                    type="text"
                    placeholder="Link Video Presentacion"
                />

                <h3>Imagen Principal</h3>

                <PrincipalImage image={hero?.image} />


                <h3>Fotos Reseña de Clientes</h3>

                <ReviewsImages images={hero?.imageReview ?? []} />

                <h3>Reseñas Recibidas</h3>

                <input
                    onChange={(e) => handleInput(e, 'reviewTotal')}
                    defaultValue={hero?.reviewTotal ?? ''}
                    type="number"
                    placeholder="Cantidad de Reseñas"
                />

                <input hidden type="file" placeholder="Imagen Principal" />
            </InputsContainer>

            {updateForm !== null && (
                <FloatButton
                    type='button'
                    onClick={(e) => updateHeader(e)}
                >
                    Guardar Cambios
                </FloatButton>
            )}


        </Container>
    )
}

const Container = styled.div`
    width : 100%;
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


export default Dashboard(Header)