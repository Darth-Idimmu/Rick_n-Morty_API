import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            forcePage={pageNumber === 1? 0 : pageNumber - 1} //esto sirve para dar control a acciones cuando se esté en cada página
            nextClassName="btn btn-outline-primary"
            previousClassName="btn btn-outline-primary"
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange={(data)=>{
                setPageNumber(data.selected + 1);
            }}
            pageCount={info?.pages} //se espera hasta que info esté ordenada en la llamada de la api al recargar la página
        /> 
    );
};

export default Pagination;