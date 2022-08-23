/*
  Nesta brincadeira eu quero criar uma lista de vetor onde eu insiro objetos com seus respectivos atributos;

  OBS: 
    Estou com dificuldades em deletar um objetos de uma vetor de objetos
  
  Anotações:
    Basicamente eu estou pegando o script 03 e juntando com o script 04

    As vezes mais para frente eu aprenda a fazer isso, e por isso eu estou deixando este comentário :)
*/

alert('Insira a opção desejada:')

let option;
let patients = [];

while(option != 4){

  option = Number(prompt(`
  Digite o número: 
  1. Para cadastrar um item na lista.
  2. Para remover um item da lista.
  3. Para mostrar itens cadastrados.
  4. Para sair do programa.
  `))

  switch(option){

    case 1:
      let i
      //.push cria uma nova posição no vetor
      for(i=0;i<patients.length;i++){
        patients.push(patients[i].name) = prompt('Insira o Nome')
        patients.push(patients[i].age) = Number(prompt('Insira o Idade'))
        patients.push(patients[i].weight) = Number(prompt('Insira o Peso'))
        patients.push(patients[i].height) = Number(prompt('Insira o Altura'))
        
        alert(patients[i].name)
      }
      break;
    
    case 2:
      let delete = prompt('Digite o nome que deseja remover da lista')
      for(i=0;i<patients.length;i++){
         patients[i].slice(delete)
      }
      let nome = (prompt('Digite o nome que deseja remover da lista'))  
      item.slice(nome)
      break;

    case 3:
      if(items.length == 0){
        alert('não tem nenhum item cadastrado na lista')
      }else{
        alert(items)
      }
      break;

    case 4:
      alert('Você saiu!')
      break;
      
    default:
      alert(`Opção inválida!
            Tente novamente.`)
  }
}