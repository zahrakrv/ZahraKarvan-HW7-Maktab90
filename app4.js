function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sort = arr[i].toLowerCase().split("").sort().join("");
    obj[sort] = arr[i];
    console.log(obj[sort]);
  }
  return Object.values(obj);
}
// const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const arr = ["pan", "aal", "ala", "apn", "teeew", "ewtee"];
alert(aclean(arr));
