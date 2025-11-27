// Входные данные
const employees = [
  { name: 'Алексей', department: 'IT' },
  { name: 'Мария', department: 'HR' },
  { name: 'Иван', department: 'IT' },
  { name: 'Петр', department: 'Finance' },
  { name: 'Ольга', department: 'HR' }
];

function groupByDepartment(employees){

 let mas = employees.reduce((acc, nam) => {
    if(!acc[nam.department]){
        acc[nam.department] = [];
    }
  acc[nam.department].push(nam.name);
return acc;
  },{})
  return mas
}
let res = groupByDepartment(employees);
console.log(res)