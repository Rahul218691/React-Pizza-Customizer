import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Header from './components/Header'
import Checkout from './components/Checkout';
import Customize from './components/Customize';

const App = () =>{

  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

    useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);


  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
            <Route path='/' element={<Customize ingredients={ingredients}
              setIngredients={setIngredients}/>}/>
            <Route path='/checkout' element={<Checkout ingredients={ingredients}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
