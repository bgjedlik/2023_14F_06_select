const formSelect = document.querySelector('.form-select');

let countryList;

function showCountryTable(countryList){
    // console.log(countryList);
    const countryTableTbody = document.querySelector('.table tbody');
    countryTableTbody.innerHTML = ''; // tbody törlés
    // console.log(countryTableTbody);
    let tr = '';
    countryList.forEach(country => {
        tr += `
            <tr>
                <td>${country.name}</td>
                <td>${country.iso3}</td>
                <td>${country.capital}</td>
                <td>${country.currency_name}</td>
                <td>${country.currency_symbol}</td>
                <td>${country.region}</td>
                <td>${country.subregion}</td>
            </tr>
        `;
    });
    countryTableTbody.innerHTML = tr;
}

function showSelect(regions){
    
    let option = '';
    regions.forEach(region => {
        option += `
            <option value="${region}">${region}</option>
        `;
    });
    formSelect.innerHTML += option;
}

function onRegionChange(event){
    //console.log(event.target.value);
    let filteredCountry = countryList;
    if (event.target.value != '-') {
        filteredCountry = countryList.filter( x => x.region == event.target.value)
    }
    // } else {
    //     filteredCountry = countryList; 
    // }
    // console.log(filteredCountry);
    showCountryTable(filteredCountry);
}

function countryData(countries){
    countryList = countries;
}

formSelect.addEventListener('change', onRegionChange);

export { showCountryTable, showSelect, countryData };