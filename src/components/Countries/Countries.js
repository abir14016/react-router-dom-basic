import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([])
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    return (
        <div>
            <h3>All my countries here: {countries.length}</h3>
            <ul>
                {
                    countries.map(country =>
                        <li>
                            <Link
                                key={country.ccn3}
                                to={`/country/${country.name.common}`}
                            >{country.name.common}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Countries;