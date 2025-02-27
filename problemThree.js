// Ekta Array er vitore koyta Boolean Value ache ta Count kore dekhano

const x = [
  1,
  2,
  "string",
  true,
  false,
  1245,
  "number",
  false,
  "value",
  { name: "Sifat" },
  true,
  false,
];

function countArray(arrayParameter) {
  if (!Array.isArray(arrayParameter)) {
    return " please provide valid array...!";
  }

  let count = 0;
  for (let item of arrayParameter) {
    if (typeof item === "boolean") {
      count++;
    }
  }
  return count;
}

const result = countArray(x);

console.log(result);
