import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  // como la ruta de Location es diferente a character, se usará una nueva variable para llamar a la API
  let [id, setId] = useState(1)
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  // console.log(info);
  let api = `https://rickandmortyapi.com/api/location/${id}`;


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setInfo(data);
      // console.log(data);

      // dentro de los episodios hay info de los personajes, por eso se hace esta variable y obtener dicho array
      let char = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json())
        })
      );
      setResults(char);
    })()
  }, [api])


  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-1'>
          Location: <span style={{ color: '#cdd845' }}>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center'>
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className='text-center'>
          Type: {type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className='row'>
        <div className='col-3'>
          <div className='text-center fw-bold fs-4 mb-4'>Choose Location</div>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>
        <div className='col-9'>
          <div className='row'><Cards page="/location/" results={results} /></div>
        </div>
      </div>
    </div>
  )
}

export default Location