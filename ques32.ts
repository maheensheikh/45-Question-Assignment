const current_users :Array<string>=[
"maheen",
"liaba",
"dANISH",
"MUBEEN",
"ASIFA"
];
const New_users:Array<string>=[
    "Maheen",
    "mubarrah",
    "Danish",
    "rehman",
     "saim"
];
New_users.map((name:string)=>{
    if(current_users .includes(name .toLowerCase())){
        console.log("username", name," already in use please rename yourself")
    }
    else {console.log("username", name ,"is available")}
});

