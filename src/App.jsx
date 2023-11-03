

import { Outlet } from 'react-router-dom'
import NavBar from './component/Navber/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
