/*
  O programa deverá capturar o número digiado pelo usuário e mostrar os seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
      se não huver item cadastrado, mostrar a mensagem:
        "não existem itens cadastrados"

    Caso o usuário digite 3, a aplicaçao deverá ser encerrada.  
*/

alert('Olá usuário, digite a opção desejada!')

let option = Number(prompt(`
  Digite o número: 
    1. Para cadastrar um item na liste.
    2. Para mostrar itens cadastrados.
    3. Para sair do programa.
    `))

console.log(option)

let i, items = [] ;

while(option != 3){

  let option = Number(prompt(`
  Digite o número: 
    1. Para cadastrar um item na liste.
    2. Para mostrar itens cadastrados.
    3. Para sair do programa.
    `))

  if(option==1){

    let item = prompt('Digite o nome do item')
    items.push(item)

    /* Ou pode-se usar o:
        
        items[item] = prompt('Digite o nome do item')
        item++

      Porque o .push abre mais um espaço de memória a cada interação, esse processo é subistituido pelo item++
      que acrescentará mudará o espaço a cada interação.
    */

  }else if(option==2){
    if(items.length == 0){
      alert('não tem nenhum item cadastrado na lista')
    }else{
      alert(items)
    }

  }else if(option==3){
    alert('Você saiu!')
  }
}