//creating an employee object
var emp={
          empid:123465,
          name:"Mahesh",
          age:23,
          mailid: function(){
          var  mail=this.name+this.age+"@mphasis.com";
            return mail;
          }
  };
console.log(emp);


//json
var employees={
"employees":[
  {"firstName":"Mahesh", "lastName":"Reddy"},
  {"firstName":"Anna", "lastName":"hathway"},
  {"firstName":"Peter", "lastName":"Jones"}
]
};
var students={
  "student":[
    {"firstName":"Mahesh", "lastName":"Reddy"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
};
var colleges={
  "college":[
    {"firstName":"Mahesh", "lastName":"Reddy"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
};




//hoisting
name="Mahesh";
console.log(name);
var name;
nameof();
function nameof(){
console.log("name of the employee is "+name);
}
//SHALLOW COPY
var empdup=emp;
empdup.name="kasarla mahesh Reddy";
console.log(emp);
//deep COPY
let empdeep=new object({},emp);
empdeep.name="my name is mahesh";
console.log(emp);
console.log(empdeep);





//lastone
//function myData(name,roll){
//this.name=name;
//this.roll=roll;


     ​
