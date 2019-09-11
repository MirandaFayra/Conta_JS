// Crie uma variável chamada tax (imposto em inglês) e atribua-lhe o resultado de multiplique a conta em 10%.

// Dica: 10% em decimal é escrito 0,10.

// 1-Crie uma variável chamada total e atribua-lhe o resultado da adição de conta mais impostos
// 2- Retorne o valor que cada um deve pagar (total dividido por 5), com o símbolo $ antes (por exemplo: $ 11). 
// 3- Dica: você deve usar a cadeia de caracteres (concatenação de strings) para imprimir com o símbolo $ na frente.

module.exports = function restaurantBill(bill) {
    // 1. Crie uma variável chamada tax (imposto em inglês) e atribua-lhe o resultado
    //   de multiplique a conta em 10%.
    var tax = bill* 0.10;
  
    // 2. Crie uma variável chamada total e atribua-lhe o resultado da adição de conta
    //    mais impostos
    var total= bill+ tax;
  
    // 3. Retorne o valor que cada um deve pagar (total dividido por 5), com o
    //    símbolo $ antes (por exemplo: $ 11).
    return "$" + total/5;
  };