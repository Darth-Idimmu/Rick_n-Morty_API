import React from 'react';
import FilterCheck from '../FilterCheck';

const Species = ({ setSpecies, setPageNumber }) => {
    let species = ["Mythological", "Alien", "Planet", "Animal", "Human", "Humanoid", "Poopybutthole", "Unknown", "Disease", "Robot", "Cronenberg",];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Species List Select
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    {/* el siguiente mapeo, necesita usarse en filterchecks para renderizar */}
                    {species.map((items, index) => (
                        <FilterCheck
                            task={setSpecies}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="species"
                            index={index}
                            items={items}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Species