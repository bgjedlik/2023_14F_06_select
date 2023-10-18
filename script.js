import countries from "./countries.js";
import { showCountryTable, showSelect, countryData } from './ui.js';

//const countryName = document.querySelector('#country-name');

// function onCountryNameChange(event){
//     // console.log(event.target.value);
//     const filteredCountryList = countries.filter( x => x.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
//     showCountryTable(filteredCountryList);
// }

let regions = countries.map( x => x.region);
regions = [...new Set(regions)];
// console.log(regions);
showSelect(regions);

showCountryTable(countries);
countryData(countries);

//countryName.addEventListener('input',onCountryNameChange);