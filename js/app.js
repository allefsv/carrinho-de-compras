let totalGeral;
limpar();


function adicionar () {
    //recuperar valores, nome do produto, quantidade e valor
    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // split é para separar as palavras que estão ligadas ao caracter entre parenteses. obs: sempre começa a contar pelo 0.
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

      // Verificar se o produto selecionado é válido
      if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }


    //calcular o preço, o nosso subtotal
    let preço = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;
     
     //atualizar o valor total
     totalGeral = totalGeral + preço;
     let campoTotal = document.getElementById('valor-total');
     campoTotal.textContent = `R$ ${totalGeral}`;
     document.getElementById('quantidade').value = 0;


      


    //alert(preço);

    


}

function limpar () {
totalGeral = 0 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

}