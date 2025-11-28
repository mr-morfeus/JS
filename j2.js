// Входные данные
const employees = [
  { name: 'Алексей', department: 'IT' },
  { name: 'Мария', department: 'HR' },
  { name: 'Иван', department: 'IT' },
  { name: 'Петр', department: 'Finance' },
  { name: 'Ольга', department: 'HR' }
];
//console.log("sdfs377733f", employees[0].department);
/*
function groupByDepartment(employees){
const group = {};

  for(let i = 0; i < employees.length; i++){
    
    if(!group[employees[i].department]){
      console.log("Cоздаю массив", employees[i].department);
      group[employees[i].department] = [];
    }
    console.log("Помещаю в массив", employees[i].name);
    group[employees[i].department].push(employees[i].name);
  };
  
  return group
}
const res = groupByDepartment(employees);
console.log("Результат", res);*/
/*
function grobs(employees){
  const group = {};
  for(let element of employees){
    console.log(element.department); 
    if(!group[element.department]){
       group[element.department] = [];    
    }
    group[element.department].push(element.name);
  }
return group
}

console.log("Результат", grobs(employees));*/
function grobs(employees){
  const group = {};
  let count= 0;
  while (count < employees.length) {
    console.log("count", count);
    if(!group[employees[count].department]){
        group[employees[count].department] = [];
        count++;
    }
    group[employees[count].department].push(employees[count].name);
    count++;
  }
   return group
}
console.log("Результат", grobs(employees));