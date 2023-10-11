const show_Magicians=(magicianArr : string[])=>{
    magicianArr.map((magician:string)=>{
        console.log(magician)
    })
};
let magician :string[]=[
    "HARRY","CRISS","DAVID",];
    show_Magicians(magician);





const make_great =(magicianArr : string[])=>{
    magicianArr.map((name:string, index: number)=>{
        magicianArr[index]="the Great"+name;
    });
};
make_great(magician);
show_Magicians(magician);