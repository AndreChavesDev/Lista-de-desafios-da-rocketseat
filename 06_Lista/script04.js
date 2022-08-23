/* 
  Crie uma lista de pacientes

  cada paciente dentro da lista, deverá conter
    nome  / name
    idade / age
    peso  / weigth
    altura  / height
  
  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Andre",
    age: Number(24),
    weight: Number(64),
    height: Number(1.74),
  },
  {
    name: "Luiz",
    age: Number(23),
    weight: Number(63),
    height: Number(1.73),
  },
  {
    name: "Chaves",
    agee: Number(22),
    weight: Number(62),
    height: Number(1.72),
  },
  {
    name: "Cruz",
    age: Number(21),
    weight: Number(61),
    height: Number(1.71),
  },
]

let patientsNames = [], patientesAges = [], patientsWeight = [], patientsHewight = []

for(let patients of patients){
  patientsNames.push(patients.name)
  patientesAges.push(patients.age)
  patientsWeight.push(patients.weight)
  patientsHewight.push(patientsHewight)
}

//Desafio:  Escreva uma lista contendo o nome dos pacientes  suas idades, alturas, e pesos





/*
// Uma forma antiga de resolver o mesmo problema:
for(let patients of patients){
  patients[i].name = prompt(`Insira um nome`)
  alert(patients[i].name)

  patients.push(patients[i].age) = prompt('Insira o idade')
  alert(patients[i].age)

  patients.push(patients[i].age) = prompt('Insira o peso')
  alert(patients[i].weight)

  patients.push(patients[i].age) = prompt('Insira o altura')  
  alert(patients[i].height)    
}
*/