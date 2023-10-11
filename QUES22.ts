 console.log("type can not be used as an index error");
 type Book={
    title:string,//numb]er is not assignable to any string type 
    author:string,
    publishyear:number//'String'or string type can not be assigned to any numbertype
 };
 type propertytype=Book["title"];
 const book:Book={
    title:"The Hitchhiker's guide to the Galaxy",
    author:"Douglas Adams",
    publishyear:1979,
 };
 book["title"]="Harry Potter and the Philosopher's stone";
 console.log(book);
 console.log("enum can be used to get an index error")
  enum Student {
   name,rollnumber,
   id 
  };
  const student1:Student=Student.name;
  console.log(student1);
  console .log(Student[2]);
