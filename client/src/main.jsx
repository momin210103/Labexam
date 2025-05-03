import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Register from './components/Register.jsx';
import Gallery from './components/Gallery.jsx'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App/>}>
      <Route index element = {<Home/>}/>
      <Route path="register" element = {<Register/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
