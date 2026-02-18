
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      // 3. Add Guest User at the start using Spread (...)
      
      console.log("--- Statistics ---");

      const newusersdatajson = [];
      users.forEach(function (user) {
        // 1. Filter even IDs
        if (user.id%2 === 0) {
            // 2. Map to clean objects {id, name, city}
            let newelement = {
                id: user.id, 
                name: user.name,
                city: user.address.city
                };
            newusersdatajson.push(newelement);
        }
      })


      newusersdatajson.forEach(function (element){
        console.log("id: " + element.id +", name: " + element.name +", city: " + element.city);
      })

      // 3. Add Guest User at the start using Spread (...)
      const newuser =  {
        id: 1, 
        name: "Guest User",
        city: "Guest City"
      };

      const newnewusersdatajson = [newuser,...newusersdatajson];

      newnewusersdatajson.forEach(function (element){
        console.log("id: " + element.id +", name: " + element.name +", city: " + element.city);
      })

      // 4. Reduce to count total characters in names

      const totalCharactersNames = users.reduce((total, user) => total + user.name.length, 0);
      console.log(totalCharactersNames);

  });

  // https://jsonplaceholder.typicode.com/todos/?id=1&id=2&id=3
  // https://jsonplaceholder.typicode.com/users/?id=1&id=2&id=3