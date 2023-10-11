//Make array 
const locationlist:string[]=
["Dubai",
"Somaliya",
"Himaliya",
"Italy",
"Turkey"
, ]
//Print orginal array 
console.log("\n\n Orignal Array locations are \n ")
locationlist.map(( location: string)=>{
    console.log(` I wanna visit ${location}.`)
});

const copy: string[] = locationlist.slice();
//Print alphabetical order array
copy.sort();
console.log("\n\n Sorted Array locations are \n ")
copy.map(( location: string)=>{
    console.log(`I wanna visit ${location}.`)
});

locationlist.reverse();
console.log("\n\n  Array locations should not change \n ")
locationlist.map(( location: string)=>{
    console.log(`I wanna visit ${location}.`)
});


copy.reverse();
console.log("\n\n Reverse Array locations are \n ")
copy.map(( location: string)=>{
    console.log(`I wanna visit ${location}.`)
});

console.log("\n\n  Array locations should not change \n ")
locationlist.map(( location: string)=>{
    console.log(`I wanna visit ${location}.`)
});


locationlist.reverse();
console.log("\n\n Reverse Array locations are \n ")
locationlist.map(( location: string)=>{
    console.log(`I wanna visit ${location}.`)
});
locationlist.reverse().sort();
locationlist.map((location:string)=>{
console.log(location);
});


