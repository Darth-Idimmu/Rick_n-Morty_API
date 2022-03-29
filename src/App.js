import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; //se usa para llamar la librería de aspectos de bootstrap
import "bootstrap/dist/js/bootstrap"; //se usa para importar la lógica para que funcione bootstrap
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters"; // importe para filtros
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  // variable de estado que nos permite cambiar entre páginas de la API ()
  // variable y función, que arranca desde la pag1
  let [pageNumber, setPageNumber] = useState(1);
  // console.log(pageNumber)
  // función para la barra de búsqueda
  let [search, setSearch] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  // info sirve para "" y results sirve para las cards
  let {info, results} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`; //pageNimber para número de pag y search para el name

  // compromabos si los datos obtenidos ya están organizados
  // console.log(results)

  // necesitamos una función asincrona que se invoque de una vez, para el paginator, por eso se usará IIFE
  useEffect(() =>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchData(data)
      // console.log(data);
    })()
  },[api])

  const titlespan = {
    color: '#00b0c8',
  }

  return (
    <div className="App">
      <h1 className="text-center my-5"> <span style={titlespan}>Rick & Morty</span> <span style={{ color: '#cdd845'}}>Search</span></h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
