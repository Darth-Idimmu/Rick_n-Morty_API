import React from 'react';
import FilterCheck from '../FilterCheck';

const Gender = ({ setGender, setPageNumber }) => {
    let genders = ["Male", "Female", "Genderless", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Gender List Select
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    {/* el siguiente mapeo, necesita usarse en filterchecks para renderizar */}
                    {genders.map((items, index) => (
                        <FilterCheck
                            task={setGender}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="gender"
                            index={index}
                            items={items}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender