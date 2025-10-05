import { amount } from "./amount.js";

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", calcular);

function calcular() {
    const adultos = Number(inputAdultos.value);
    const criancas = Number(inputCriancas.value);
    
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`;

    amount.forEach(categoria => {
    categoria.itens.forEach(item => {
      // calcula quantidade total
        const totalItem = Math.ceil((item.qtdAdulto * adultos) + (item.qtdCrianca * criancas));

      // adiciona bloco ao innerHTML
      resultado.innerHTML += `
        <div class="result-block">
          <p>${item.nome}: ${totalItem} ${item.unidade}</p>
        </div>
      `;
    });
  });

  // espaçamento final
  resultado.innerHTML += `<br><br><br><br><br>`;
}
