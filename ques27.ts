 const colorAlien_ifelsechain=(color:string)=>{
    color === "green" ? console.log("Hurrah! you have earned 5 points.") 
    : color === "yellow" ? console.log ("Hurrah! you have earned  10 points.") 
   : color === "red" && console.log(
        "Hurrah! you have earned 15 poits.")
    
};
colorAlien_ifelsechain("green");
colorAlien_ifelsechain("yellow");
colorAlien_ifelsechain("red");
