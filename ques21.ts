const country_names:string[]=[
    "USA","Germany","France",
    "India","Pakistan",
];
console.log("list of countries:",country_names);



const countryObjects: any[]=[{
    name : "Alice",
    age : 78,
    language :"German",
    population:"7654321",
},
{   name : "John",
    age : 45,
    language : "French",
    population:"7865432"
},
{
    name :"Hana",
    age : 31,
    language :"English",
    population:"6754321",
},
];
console.log("information about the country:")
for(let i=0;i<countryObjects.length;i++){
    console.log(`name:${country_names[i]}`);
    console.log(`age:${country_names[i]}`);
    console.log(`language:${country_names[i]}`);
    console.log(`population:${country_names[i]}`);
    console.log("-----------");
}

