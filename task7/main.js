function findCountryWithLargestPopulation(countries) {
    let maxPopulation = 0;
    let largestCountry = "";
    
    for (let country of countries) {
        if (country["Population"] > maxPopulation) {
            maxPopulation = country["Population"];
            largestCountry = country;
        }
    }
    
    return largestCountry;
}

// Ввод данных с помощью prompt
let countries = [];
let numCountries = prompt("Введите количество стран:");

for (let i = 0; i < numCountries; i++) {
    let countryName = prompt("Введите название страны:");
    let countryPopulation = parseInt(prompt("Введите население страны:"));
    countries[i] = {Name: countryName, Population: countryPopulation}
}

// Вызов функции для поиска страны с наибольшим населением
let largestCountry = findCountryWithLargestPopulation(countries);
console.log(`The country with the largest population is ${largestCountry["Name"]}`);
