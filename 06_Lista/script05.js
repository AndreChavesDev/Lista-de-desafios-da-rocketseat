/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

  IMC = peso / (altura**2) 
*/

const patients = [
  {
    name: "Andre",
    age: Number(24),
    weight: Number(64),
    height: 174,
  },
  {
    name: "Luiz",
    age: Number(23),
    weight: Number(63),
    height: 173,
  },
  {
    name: "Chaves",
    agee: Number(22),
    weight: Number(62),
    height: 172,
  },
  {
    name: "Cruz",
    age: Number(21),
    weight: Number(61),
    height: 171,
  },
]

function IMC(weight,height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient){
  return`
    Paciente ${patient.name} possui IMC de
    ${IMC(patient.weight, patient.height)}
  `
}
for(let patient of patients){
  let IMCmassage = printPatientIMC(patient)
  alert(IMCmassage)
}
