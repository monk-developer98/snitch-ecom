import { RouterProvider } from 'react-router';
import './App.css'
import { routes } from './app.routes';
import { useAuth } from './features/auth/hook/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const {handleGetme} = useAuth()

  const user = useSelector(state=>state.auth.user)

  useEffect(()=>{
    handleGetme()
  },[])

  console.log(user);

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
