alert('Insira a opção desejada:')

let option;
let items = [];

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
      let item = prompt('Digite o nome do item')
      items.push(item)
      break;
    
    case 2:
      let nome = (prompt('Digite o nome que desa remover da lista'))  
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