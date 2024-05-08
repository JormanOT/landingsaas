import { useState, useEffect } from 'react'
import Dashboard from "../Dashboard"
import styled from 'styled-components'
import { images, verifyImage } from '../../../constants'
import DashboardServices from '../../../services/index.js'
import { useFetchData } from '../../../hooks/useFetchData'
import { Loader } from '../../../components'
import ReviewsImages from '../components/ReviewImages.jsx'
import PrincipalImage from '../components/PrincipalImage.jsx'

const Header = () => {
    const [hero, setHero] = useState(null);
    const { FetchData, loading } = useFetchData();
    const [form, setForm] = useState(null);


    useEffect(() => {
        const { getHeader } = DashboardServices;
        const id = import.meta.env.VITE_USER_ID;
        console.log(id)
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
                    placeholder="Titulo Principal"
                />
                <textarea
                    rows={10}
                    defaultValue={hero?.subtitle ?? ''}
                    type="text"
                    placeholder="Resumen de lo que ofreces"
                />
                <input
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
                    defaultValue={hero?.review ?? ''}
                    type="text"
                    placeholder="Cantidad de Reseñas"
                />

                <input hidden type="file" placeholder="Imagen Principal" />
            </InputsContainer>
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
const ContainerReview = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;

    img{
        width : 50px;
        height : 50px;
        object-fit : cover;
    }
`


export default Dashboard(Header)