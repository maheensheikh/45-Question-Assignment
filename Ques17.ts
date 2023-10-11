//Shrinking guests list:you just found out that your new dinner table won't arrive  in time for the dinner,and 
//you have a space only for two guests.   
let shortGuestslist=["Maheen","Ayzal" ,"Liaba","Mubeen","John"]
shortGuestslist.map((name:string)=>
{console.log(`Hi${name},I have space only for two guests.`)})
// remove guests from list at a time  untill only two names remain in your list
console.log(`sorry${shortGuestslist.pop()} we can't make a dinner.`)
console.log(`sorry${shortGuestslist.pop()} we can't make a dinner.`)
console.log(`sorry${shortGuestslist.pop()} we can't make a dinner.`)
shortGuestslist.map(( name: string)=>{
    console.log(`welcome${name} you are still invited to dinner.`)
});
shortGuestslist.pop();
shortGuestslist.pop();

shortGuestslist.map((name:string)=>{
console.log(`welcome ${name} you are still invited to dinner. `)
});
//remove the last two names from your list ,so you have an empty list at the end of your programm
shortGuestslist.pop();
shortGuestslist.pop();