// Object

// function showInfo(info) {
//   if (typeof info !== "object") {
//     return "Please provide a valid object...!";
//   }

//   const sentence =
//     "My name is " +
//     info.name +
//     ", and I lives in " +
//     info.address +
//     ", current age: " +
//     info.age;
//   return sentence;
// }

// const person = {
//   name: "Sifat",
//   address: "Rangpur",
//   age: 22,
// };

// const result = showInfo(person);
// // const result = showInfo("person");

// console.log(result);

// add special syntax
// const user = {
//   name: "Sifat",
//   address: "Dhaka",
// };

// function createEmail(info) {
//   if (typeof info !== "object") {
//     return "Please provide a valid object.....";
//   }

//   const output = info.name + "@" + info.address + ".com";
//   return output;
// }

// const result = createEmail(user);
// // const result = createEmail("user");

// console.log(result);

// Your monthly cost : House rent = 5000, Meal cost = 3000, Pocket money = 2000, after finishing month how much will you save? depend on your income......

function calculateSavings(income) {
  if (typeof income !== "number") {
    return "Invalid Number, please input correct number.....";
  }

  const houseRent = 5000;
  const mealCost = 3000;
  const personalExpenses = 2000;
  const totalExpenses = houseRent + mealCost + personalExpenses;

  if (totalExpenses > income) {
    return "Earn More...!";
  }

  const savings = income - totalExpenses;

  return savings;
}

// const result = calculateSavings(15000);
// const result = calculateSavings(25000);
// const result = calculateSavings("2000");
// const result = calculateSavings(2000);
const result = calculateSavings("72000");

console.log(result);
