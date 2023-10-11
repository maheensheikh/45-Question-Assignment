const magicians1:Array<string>=["Alladin","David","John","Harry","Lucy"];
const show_magician=(magicians1Arr:Array<string>)=>{
    magicians1Arr.map((magicians1:string)=> {
        console.log(magicians1);
    });
};
const make_Great =(magicians1Arr :Array<string>)=> {
    const arr:Array <string>=[]
magicians1Arr.map((name)=> {arr.push("THE GREAT" + name);
});
return arr;
};
let new_arr:Array<string>=make_Great(magicians1);
console.log("Original:");
show_magician(magicians1);
console.log("NEW ARRAY :");
show_magician(new_arr);
