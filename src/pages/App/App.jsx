import '../../App.css'
import Navbar from "../../components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"

import MainPage from '../MainPage/MainPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
