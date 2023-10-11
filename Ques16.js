"use strict";
//more guests: you just found a bigger dinner table,so now more space is available.think of three more guests
//to invite to dinner.
//point 1: start your program from ex 15. add a print statement to the end of your program informing 
//that you found a bigger dinner table.
let biggerGuestslist = ["Maheen", "Ayzal", "jahanzaib", "Rabia", "Mubeen", "John"];
/* for (let i=0;i<6;i++){
   console.log("welcome to a bigger dinner table! dear",biggerGuestslist[i]);

 }*/
//point 2:Add new guest to the biggining of your array.
let biggerGuestslist1 = ["Maheen", "Ayzal", "jahanzaib", "Rabia", "Mubeen", "John"];
biggerGuestslist1.unshift("Maheen");
biggerGuestslist1.splice(0, 2, "iqra");
// point 3:Add a new guests in the middle of your array.Use append ()to add one new guest to the end of your
//list.
biggerGuestslist1.push("liaba");
for (let i = 0; i < 6; i++) {
    console.log("welcome to a bigger dinner table! dear", biggerGuestslist1[i]);
}
