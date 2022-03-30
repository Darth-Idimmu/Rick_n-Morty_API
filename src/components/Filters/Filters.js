import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber, }) => {
  // función clear, dejará todos las funciones anteriores vacías
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false); //esto nos permitirá recargar la página también
  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div className="text-center">
        <button onClick={clear} type="button" className="btn btn-outline-danger btn-sm">Clear Filters</button>
      </div>
      <br />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters