import React from 'react';

// se utilizará el mapeo que se hizo en categories para poder de esta manera enlistar los items que se vayan a usar en la array con su name e id
const FilterCheck = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div>
            <div className="form-check">
                <input 
                    onClick={() => {
                        setPageNumber(1); // para que sirva de forma global para la página 1 y crea nueva paginación, de resto solo busca en cada pag
                        task(items) //task se define en Status y a su vez recibe la respuesta de la API
                    }} 
                    className="form-check-input" 
                    type="radio" 
                    name={name} 
                    id={`${name}-${index}`} />
                <label 
                    className="form-check-label" 
                    htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    )
}

export default FilterCheck