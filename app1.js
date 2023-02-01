`use strict`;
function topSalary(salaries) {
  let max = 0;
  let name = "";

  for (const [key, value] of Object.entries(salaries)) {
    if (max < value) {
      max = value;
      name = key;
    }
  }
  console.log(max);
  console.log(name);
  console.log(`Maximum Salary is for ${name} and the Salary is ${max}`);
  return name;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
topSalary(salaries);
