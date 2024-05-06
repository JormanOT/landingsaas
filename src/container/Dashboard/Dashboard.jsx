import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Loader } from '../../components';
import styled from 'styled-components'


const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (token === undefined || token === null) return navigate('/auth');
    setLoading(false)
  }, [])

  if (loading) return <Center><Loader /></Center>

  return (
    <div>Dashboard</div>
  )
}

const Center = styled.div`
  width : 100%;
  height : 100dvh;
  display : grid;
  place-items : center;
`

export default Dashboard