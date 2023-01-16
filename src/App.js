
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Banner from './component/Banner';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Maincomponent from './component/Maincomponent';

//페이지단위가 아닌 컨텐츠 단위여서, 내가 필요한 컨텐츠를 재사용하는 개념 

function App() {
  return (
    <div className="App">
    <Navi></Navi>
    <Routes>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/' element={<Maincomponent></Maincomponent>}></Route>
    </Routes>
   
    </div>
  );
}


export default App;
