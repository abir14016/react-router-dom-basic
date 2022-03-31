import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams()
    const [countryDetail, setCountryDetail] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountryDetail(data))
    }, [countryName])
    return (
        <div>
            <h2>Country detail for: {countryName}</h2>

            <img src={countryDetail[0]?.flags?.png} alt="pic" />

        </div>
    );
};

export default CountryDetail;