import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message : "enter secondnumber", type:"number", name :"secondnumber"},
  {
    message:"select one of the operators to perform operation",
    type:"list",
    name :"operator",
    choices:["addition","subtraction","multiplication","division"],
  },
]);

// condition statement


if (answer.operator === "addition"){
  console.log(answer.firstnumber + answer.secondnumber);
} 
else if (answer.operator === "subtraction"){
 console.log(answer.firstnumber - answer.secondnumber);
}
else if(answer.operator === "multiplication"){
  console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else  {
  console.log("pleace select vallid operator")
}