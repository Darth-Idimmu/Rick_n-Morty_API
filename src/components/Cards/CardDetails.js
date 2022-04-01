import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdAccountBox } from "react-icons/md";
import { FaSkullCrossbones, FaRegSmile, FaRegEyeSlash } from "react-icons/fa";

// como la info del character está al inicio de la api, re utilizamos código de App
const CardDetails = () => {
    let { id } = useParams();
    let [fetchData, updateFetchData] = useState([]);
    let { name, image, location, origin, species, gender, status, type } = fetchData;

    console.log(fetchData); // necesitamos mirar qué info nos devuelve la variable

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchData(data)
            // console.log(data);
        })()
    }, [api]);


    return (
        <div className='container d-flex justify-content-center'>
            <div className="card" style={{ width: '18rem', }}>
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body text-center">
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className='position-absolute badge rounded-pill bg-danger'><FaSkullCrossbones className='mb-1' /> {status}</div>
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
                    <h5 className="card-title"><MdAccountBox className='mb-1' />{name}</h5>
                    <div className='content'>
                        <div className=''>
                            <h6 className='text-start'><span className=' fw-bold'>Origin: </span>{origin?.name}</h6>
                        </div>
                    </div>
                    <div className='content'>
                        <div className=''>
                            <h6 className='text-start'><span className=' fw-bold'>Location: </span>{location?.name}</h6>
                        </div>
                    </div>
                    <div className='content'>
                        <div className=''>
                            <h6 className='text-start'><span className=' fw-bold'>Type: </span>{type === "" ? "Unknown" : type}</h6>
                        </div>
                    </div>
                    <div className='content'>
                        <div className=''>
                            <h6 className='text-start'><span className=' fw-bold'>Species: </span>{species}</h6>
                        </div>
                    </div>
                    <div className='content'>
                        <div className=''>
                            <h6 className='text-start'><span className=' fw-bold'>Gender: </span>{gender}</h6>
                        </div>
                    </div>
                    {/* <Link to="" className="btn btn-primary">Go somewhere</Link> */}
                </div>
            </div>
        </div>
    )
}

export default CardDetails