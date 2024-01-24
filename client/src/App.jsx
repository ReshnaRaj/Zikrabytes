import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './page/Homepage'
import Landingpage from './page/Landingpage'
import Addlanding from './page/Addlanding'
 

function App() {
   

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/addlanding' element={<Addlanding/>}/>
      <Route path='/landingpage' element={<Landingpage/>}/>

    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
