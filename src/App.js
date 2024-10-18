import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Main from './components/Main';
import NewsDetails from './components/NewsDetails';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/signin' element={<Signin />} />
      <Route path='/details' element={<NewsDetails />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
