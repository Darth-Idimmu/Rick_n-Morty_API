import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {
    // definir funciones dentro de los botones, se utilizará la función setPageNumber en App.js
    // se utiliza la x como valor inicial, sea que se sume o reste (del valor de useState)
    let next = () => {
        setPageNumber((x) => x + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return
        setPageNumber((x) => x - 1);
    };

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className='btn btn-primary' type="button">Prev</button>
          <button onClick={next} className='btn btn-primary' type="button">Next</button>
    </div>
  )
}

export default Pagination