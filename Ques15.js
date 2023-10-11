"use strict";
/*Changing guest list ; you just heard that one of your guests can't make the dinner ,so you need to send
out a new set of invitations. you will have to think of someone else to invite.*/
let NewguestList = ["Maheen", "Ayzal", "Maryam"];
// suppose maryam is not coming and JAHANZAIB IS replacing her.
NewguestList.push("Jahanzaib");
//new 
NewguestList.push("RABIA");
NewguestList.push("Mubeen");
NewguestList.push("john");
for (let i = 0; i < 7; i++) {
    console.log("welcome to dinner! dear", NewguestList[i]);
}
