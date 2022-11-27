import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  // como la ruta de episodes es diferente a character, se usará una nueva variable para llamar a la API
  let [id, setId] = useState(1)
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  // console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setInfo(data);
      // console.log(data);

      // dentro de los episodios hay info de los personajes, por eso se hace esta variable y obtener dicho array
      let char = await Promise.all(
        data.characters.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(char);
    })()
  }, [api])


  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-1'>
          Episode name: <span style={{ color: '#cdd845' }}>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center'>
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <div className='text-center fw-bold fs-4 mb-4'>Choose Episodes</div>
          <InputGroup setId={setId} name="Episode" total = {51} />
          </div>
        <div className='col-lg col-12'>
          <div className='row'><Cards page="/episodes/" results={results} /></div>
        </div>
      </div>
    </div>
  )
}

export default Episodes