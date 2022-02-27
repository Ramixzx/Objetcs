// I would do it like this 

let date = new Date();

console.log(`Today is: ${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`);

// Or like this, but I would like to know more ways to do it

let date2 = new Date().toLocaleDateString();

// I use the replace method to change the / to -
let dateReplace = date2.replace('/', '-');

console.log(`Today is: ${dateReplace.replace('/', '-')}`);
