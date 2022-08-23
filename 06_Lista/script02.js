alert('Insira a opção desejada:')

let option;
let items = [];

while(option != 3){

  option = Number(prompt(`
  Digite o número: 
  1. Para cadastrar um item na liste.
  2. Para mostrar itens cadastrados.
  3. Para sair do programa.
  `))

  switch(option){

    case 1:
      let item = prompt('Digite o nome do item')
      items.push(item)
      break;
    
    case 2:
      if(items.length == 0){
        alert('não tem nenhum item cadastrado na lista')
      }else{
        alert(items)
      }
      break;

    case 3:
      alert('Você saiu!')
      break;
      
    default:
      alert(`Opção inválida!
            Tente novamente.`)
  }
}