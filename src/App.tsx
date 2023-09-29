import { Route, Routes } from 'react-router-dom'
import Page404 from './features/404/Page404'
import HomePage from './features/Home/HomePage'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
