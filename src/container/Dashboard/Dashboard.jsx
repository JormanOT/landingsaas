import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Loader } from '../../components';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { images } from '../../constants'


const Dashboard = (Components) => function HOC() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (token === undefined || token === null) return navigate('/auth');
    setLoading(false)
  }, [])

  if (loading) return <Center><Loader /></Center>

  const barData = ['Presentacion Banner', 'Informacion del Negocio', 'Servicios', 'Proyectos',
    'Clientes', 'Testimonios', 'Habilidades', 'Experiencia', 'Contactos', 'SEO'
  ]

  return (
    <Container className='app'>

      <SideBar>
        <h3>Tabla de Contenido</h3>
        <ul>
          <User>
            <li>
              <UserImg src={images.noImage} /> Mi Perfil
            </li>
          </User>
          {barData.map((link, i) => (
            <li key={`list-${i}`}>{link}</li>
          ))}
        </ul>
      </SideBar>

      <ContainerComponents>
        <Components />
      </ContainerComponents>
    </Container>
  )

}


const Center = styled.div`
  width : 100%;
  height : 100dvh;
  display : grid;
  place-items : center;
`
const Container = styled.div`
  width: 100%;
  display : flex;
  flex-direction : row;
`
const SideBar = styled.div`
  position : fixed;
  width : 20%;
  height : 100dvh;
  box-shadow : 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04);;
  background-color : white;
  padding : 1em;

  ul{
    display : flex;
    flex-direction : column;
    gap: 5px;
    margin-top : 2em;

    a{
        text-decoration : none;
        color : black;
    }

    li{
        display : flex;
        justify-content : start;
        align-items : center;
        gap : 4px;
        list-style : none;
        background-color : white;
        border-radius : 25px;
        padding : 9px;

        a{
            display : flex;
            justify-content : start;
            align-items : center;
            gap : 4px;
        }

        &:hover{
            background-color : #f7f7f7;
            cursor : pointer;
        }
    }
  }
`
const User = styled(Link)`
    text-decoration : none;
    color : black;
    font-weight : 700;
    padding : 2em 0;

    li{
        display : flex;
        justify-content : start;
        align-items : center;
        gap : 1.2em;
        list-style : none;
        background-color : #f7f7f7 !important;
        border-radius : 2em;
        padding : 0.8em;

        a{
            display : flex;
            justify-content : start;
            align-items : center;
            gap : 4px;
        }

        &:hover{
            background-color : #f7f7f7;
            cursor : pointer;
        }
    }
`
const UserImg = styled.img`
width : 30px;
height : 30px;
object-fit : cover;
border-radius : 100%;
`
const ContainerComponents = styled.div`
    width : 100%;
    margin-left : 20%;
`

export default Dashboard