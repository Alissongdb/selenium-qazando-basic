$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Receber o cupom de desconto da Qazando",
  "description": "Eu como usuário da Qazando\nquero receber um cupom de desconto\npara comprar um curso com valor reduzido",
  "id": "receber-o-cupom-de-desconto-da-qazando",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@desconto"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-o-cupom-de-desconto-da-qazando;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@gerar-cupom"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou no site da Qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "eu preencho meu e-mail",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "eu vejo o código de desconto",
  "keyword": "Entao "
});
formatter.match({
  "location": "DescontosStep.acessar_site_qazando()"
});
formatter.result({
  "duration": 2849575100,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_e_mail()"
});
formatter.result({
  "duration": 2125547500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 44794300,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_vejo_o_codigo_de_desconto()"
});
formatter.result({
  "duration": 31687200,
  "status": "passed"
});
});