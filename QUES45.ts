const car_object=(manufacturer:string,model:string,...options:any)=>{
  let car :any ={
    manufacturer , model
  };
  Object.entries(options).map(([key,value])=>{
    car={...car,...(value as object)}
  });
  return car;
};
console.log(car_object("Hyundai","Elentra"));
console.log(car_object("Toyota","Fortuner",{color:"black"},
{seat:7}));