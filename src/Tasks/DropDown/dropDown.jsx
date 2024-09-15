import React, { useState } from 'react';
import { CountrySelect, StateSelect, CitySelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';

function DropDownMenu() {
    const [countryId, setCountryId] = useState(null);
    const [stateId, setStateId] = useState(null);

    return (
        <div>
            <h6>Country</h6>
            <CountrySelect
                onChange={(e) => setCountryId(e.id)}
                placeHolder="Select Country"
            />
            <h6>State</h6>
            <StateSelect
                countryId={countryId}
                onChange={(e) => setStateId(e.id)}
                placeHolder="Select State"
            />
            <h6>City</h6>
            <CitySelect
                countryId={countryId}
                stateId={stateId}
                onChange={(e) => console.log(e)}
                placeHolder="Select City"
            />
        </div>
    );
}

export default DropDownMenu;