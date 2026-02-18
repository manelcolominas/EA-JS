
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
        // YOUR CODE STARTS HERE

        // CLASSIC WAY

        // 1. Filter even IDs
        console.log("1. Filter even IDs");
        const usersdatajsonfiltered = users.filter(function (user) {
            if (user.id%2 === 0) {
                return true
            }
        })
        usersdatajsonfiltered.forEach(function (user) {
            console.log("id: " + user.id +", name: " + user.name + ", phone: " + user.phone+" website: "+ user.phone);
        })
        console.log()

        // USING ARROW FUNCTION WITH FILTER
        /*
        const usersdatajsonfiltered = users.filter((user) => user.id%2 === 0);
         */

        const newusersdatajson = usersdatajsonfiltered.map(({id, name, address: {city}}) => ({id, name, city}));

        console.log("2. Map data");
        newusersdatajson.forEach(function (element){
            console.log("id: " + element.id +", name: " + element.name +", city: " + element.city);
        })
        console.log();
        /*

         */
        // 3. Add Guest User at the start using Spread (...)

        const newuser =  {
            id: 1,
            name: "Guest User",
            city: "Guest City"
        };

        const new_newusersdatajson = [newuser,...newusersdatajson];

        console.log(" 3. Add Guest User at the start using Spread (...)");
        new_newusersdatajson.forEach(function (element){
            console.log("id: " + element.id +", name: " + element.name +", city: " + element.city);
        })
        console.log();

        // 4. Reduce to count total characters in names
        console.log("4. Reduce to count total characters in names");
        const totalCharactersNames = users.reduce((total, user) => total + user.name.length, 0);
        console.log(totalCharactersNames);
        console.log();


    });

// https://jsonplaceholder.typicode.com/todos/?id=1&id=2&id=3
// https://jsonplaceholder.typicode.com/users/?id=1&id=2&id=3