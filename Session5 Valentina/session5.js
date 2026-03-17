const age = 10;
let ageGroup;

if (age < 18) {
  ageGroup = "Child";
} else {
  ageGroup = "Adult";
}

console.log("ageGroup:", ageGroup);

let age2 = 18;
let ageGroup2 = age2 < 18 ? "child" : "adult";
console.log("ageGroup2:", ageGroup2);

for (let i = 0; i < 5; i++) {
  console.log("i/number", i);
}


