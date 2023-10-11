  
  let person_age =(ageyear : number) => { 
    if( ageyear < 2) {console.log ("The  person is a baby.")}
    else if(ageyear<4 && ageyear>=2 ){console.log ("The  person is a toddler.")}
    else if(ageyear<13 && ageyear>=4){console.log("the person is a kid.")} 
    else if (ageyear>=13 && ageyear<20){console.log("The person is a teenageer.")}
    else if (ageyear >=20 && ageyear<65){console.log("The person is an adult.")}
    else if ( ageyear>=65 && ageyear<70){console.log(" The person is an elder.")}
  };


  

  person_age(3);
  person_age(20);
  person_age(70);
  
        
  
  
