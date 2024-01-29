import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
