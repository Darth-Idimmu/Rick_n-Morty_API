import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; //se usa para llamar la librería de aspectos de bootstrap
import "bootstrap/dist/js/bootstrap"; //se usa para importar la lógica para que funcione bootstrap
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters"; // importe para filtros y sucesivamente en las imports de abajo componentes y pages
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

import fondo from './assets/images/RM_Background_Card.png'; //imagen de fondo de App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //se cambia funtion App por Const (para poder usar funciones de router)


// creación de rutas y funtion principal
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}


// esta sección se convierte en una page y la principal es funtion App
const Home = () => {
  // ------------------------ variables que permitirán estar en varias partes de la API para recibir info ----------------
  let [pageNumber, setPageNumber] = useState(1); // variable y función, que arranca desde la pag1
  // console.log(pageNumber)
  let [search, setSearch] = useState(""); // función para la barra de búsqueda
  let [status, setStatus] = useState(""); // status se usa para filtro ALIVE
  let [gender, setGender] = useState(""); // gender se usa para filtro Gender
  let [species, setSpecies] = useState("") //se usa para el filtro species

  let [fetchData, updateFetchData] = useState([]);
  let { info, results } = fetchData; // info sirve para Pagination y results sirve para las cards
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`; //pageNimber para número de pag y search para el name

  // compromabos si los datos obtenidos ya están organizados
  // console.log(results)

  // necesitamos una función asincrona que se invoque de una vez, para el paginator y cards, por eso se usará IIFE
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchData(data)
      // console.log(data);
    })()
  }, [api])

  const imagefondo = {
    backgroundImage: `url(${fondo})`,
  }

  return (
    <div className="App" style={imagefondo}>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-9">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
          <div className='row'>
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
