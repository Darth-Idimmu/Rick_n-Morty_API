import React from 'react';
import './Search.css';
import { BsSearch } from "react-icons/bs";

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <div className='center'>
            <div className='d-flex flex-sm-row justify-content-center gap-4 mb-5'>
                <div className="input-group">
                    <input type="text" className='form-control' placeholder="Search here for characters"
                        // se crea una función que capture la entrada en el input y actualice el useState en App.js
                        // también se usa la función de estado de la pag, pera ordenar la paginación de lo buscado
                        onChange={e=>{
                            setPageNumber(1)
                            setSearch(e.target.value);
                        }} />
                    <div className="input-group-append">
                        <button  type="button" className="btn btn-primary fs-4"
                            onClick={e => { e.preventDefault();
                            }}><BsSearch className='mb-1' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search