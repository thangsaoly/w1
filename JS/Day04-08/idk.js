

let studentName = [
    {id: 1, name: 'Rith'},
    {id: 2, name: 'Rin'},
    {id: 3, name: 'Rong'},
]

for(let i=0; i<studentName.length; i++){
    console.log("ID: ",studentName[i].id, "Name:", studentName[i].name);
}

for(let i=0; i<2; i++){
    studentName[studentName.length] = {id: 4, name: 'Yuki'};
}

for(let i=0; i<studentName.length; i++){
    console.log("ID: ",studentName[i].id, "Name:", studentName[i].name);
}



var age = 1;
age = 2;
age = 33;
console.log(`ny age : ${age}`);
