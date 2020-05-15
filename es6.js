//template String
const employee={
                name:'Mahesh',
                lastname:'Reddy'

}
const message=`${employee.name}has a last name of ${employee.lastname}`
console.log(message);
//call back function
function nameofemp(name){

  console.log('name of employee  '+name);
}
function gettingName(callback){
var name="Mahesh";
callback(name);
}
gettingName(nameofemp);

//promises
var promise = new Promise(function(resolve, reject) {
const x = "MaheshReddy";
const y = "MaheshReddy";
if(x === y) {
	resolve();
} else {
	reject();
}
});

promise.
	then(function () {
		console.log('Success');
	}).
	catch(function () {
		console.log('Some error has occured');
	});


//async await
  async function firstAsync() {
      let promise = new Promise((resolve, reject) => {
        resolve("MaheshReddy");
      });
      let result = await promise;

      console.log(result);
      }
  firstAsync();

//spread operator

const a=[1,2,3,4,5,6];
const b=[7,8,9];
const c=[a,...b];
console.log(c);

//destructing assignment

function get({name,id}){
return `name:${name},id:${id}`;
}

const emp={
  name:"MaheshReddy",
  id:12345
}
console.log(get(emp));


//Rest Parameter
const empData=(firstName,lastName,...rest)=> {

  console.log(`Rest Data:${rest}`);
}
empData("MaheshReddy","kasarla","mahi@gmail.com",123456);
