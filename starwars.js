'use strict';

const baseUrl = 'https://swapi.co/api/';

const axios = require ('axios');

const searchTerm = 'Luke';//process.argv[2];

//console.log(searchTerm);

//filter for the search term in the results
axios.get(`${baseUrl}people`)
  .then(
    function (response){
      
      const personSearched = response.data.results.filter(person => person.name.includes(searchTerm))[0];
    
      const vehicles = personSearched.vehicles;

      const vehicleCount = vehicles.length;

      const starships = personSearched.starships;

      const starshipCount = starships.length;

       

      console.log(personSearched.films);

    
    }
    
  );
  

  
  










