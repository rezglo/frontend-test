import { Route, Routes } from 'react-router-dom'
import Page404 from './features/404/Page404'
import HomePage from './features/Home/HomePage'
import Login from './features/Login/Login'

function App () {
  return (
    <>
      <Routes>
        <Route path='/a' element={<HomePage />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
