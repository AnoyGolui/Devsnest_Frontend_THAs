1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
let stud={   
  "name": "David Rayy",  
  "class" : "VI",   
  "rollno" : "12" };
let pro=[];
for(let key in stud)
{     pro.push(key); } 

console.log(stud);

2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
var stud2=stud;
delete stud2.rollno;
console.log(stud2);

3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(stud).length);


