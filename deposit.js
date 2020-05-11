var emp={
          empid:123465,
          name:"Mahesh",
          age:23,
          lastname:"Reddy"

          }

function deposit(){

if(typeof(emp.empid)==="number" && typeof(emp.name)==="string" && typeof(emp.age)==="number" && typeof(emp.lastName)==="string"){
console.log("entered credentials match the format");

}
else {
  console.log("please enter the correct credetials format");
}


}
deposit();
