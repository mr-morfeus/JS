let salaries = {
  "John": 333,
  "Pete": 300,
  "Mary": 250
};

if(Object.keys(salaries).length === 0){
  console.log("NULL")
}else{
  sch = 0;
  key_good = "";
for(let [key, value] of Object.entries(salaries)){
  if(sch < value){
    sch = value;
    key_good = key;
  }
}
console.log(`${key_good}: ${sch}`);
}