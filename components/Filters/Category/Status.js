import React from 'react';
import FilterCheck from '../FilterCheck';

const Status = ({ setStatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"]; //array que va a determinar el nombre de cada check
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                    Status List Select
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                    {/* el siguiente mapeo, necesita usarse en filterchecks para renderizar */}
                    {status.map((items, index) => (
                        <FilterCheck
                            task={setStatus}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="status"
                            index={index}
                            items={items}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status