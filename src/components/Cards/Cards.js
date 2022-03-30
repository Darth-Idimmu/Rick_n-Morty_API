import React from 'react';
import './Cards.css';
import { MdLocationOn, MdAccountBox } from "react-icons/md";
import { FaSkullCrossbones, FaRegSmile, FaRegEyeSlash } from "react-icons/fa";



// de esta manera invocamos los datos contenidos en fetchdata.results
const Cards = ({ results }) => {
    let display;
    // console.log(results);

    // específicar los caracteres encontrados o no, cuando se busque la barra de búsqueda
    // en el .map vamos a orientar los obejtos uno por uno
    if (results) {
        display = results.map((x) => {
            // cada x necesita una identidad "key", de la api se la aportamos del id
            let { id, name, image, location, status } = x;
            return (<div key={id} className='col-md-4 card card-has-bg click-col'>
                <div className="position-relative">
                    <div>
                        <img src={image} alt='' className='img img-fluid' style={{width: "100%"}} />
                        <div className='content' style={{ padding: "10px"}}>
                            <div className='fs-4 fw-bold mb-4'><MdAccountBox className='mb-1' />{name}</div>
                            <div>
                                <div className='fs-6'><MdLocationOn className='mb-1'/>Last location: {location.name}</div>
                            </div>
                            
                            {/* <div className='fs-5'>{location.name}</div> */}
                        </div>
                    </div>
                    {/* se usará de nuevo la función IIFE para invocar de inmediato */}
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className='position-absolute badge rounded-pill bg-danger'><FaSkullCrossbones className='mb-1'/> {status}</div>
                            );
                        } else if (
                            status === "Alive") {
                            return (
                                <div className='position-absolute badge rounded-pill bg-success'><FaRegSmile className='mb-1' /> {status}</div>
                            );
                        } else {
                            return (
                                <div className='position-absolute badge rounded-pill bg-secondary'><FaRegEyeSlash className='mb-1' /> {status}</div>
                            )
                        }
                    })()}
                </div>
            </div>
            );
        });
    } else {
        display = "No characters found 😥";
    }

    return <>{display}</>
}

export default Cards