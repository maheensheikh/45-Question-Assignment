function make_sandwich(...items :string[]):void{
    console.log("sandwich summary:");
    if(items.length === 0){
        console.log("your sandwich is empty.Please add some items.")
    }else{
        items.forEach((item,i)=>{
            console.log(`${i+1} , ${item}`);
        });
    } 
    console.log("\n");
}
make_sandwich("tomato","mayonise");
make_sandwich("tomato","mayonise","lettice");
make_sandwich("tomato","mayonise","kabab","chicken pety");
