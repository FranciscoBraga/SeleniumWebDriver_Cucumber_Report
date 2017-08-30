$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ErroLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 3,
  "name": "verificar mensagem de erro do login do site",
  "description": "Para verificar a mensagem de erro no sistema de login",
  "id": "verificar-mensagem-de-erro-do-login-do-site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verificar mensagem de erro",
  "description": "",
  "id": "verificar-mensagem-de-erro-do-login-do-site;verificar-mensagem-de-erro",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "informar um \u003cUsuario\u003e inválido",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "inserir uma \u003cSenha\u003e inválida",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema deve mostrar mensagem de erro",
  "keyword": "Então "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verificar-mensagem-de-erro-do-login-do-site;verificar-mensagem-de-erro;",
  "rows": [
    {
      "cells": [
        "Usuario",
        "Senha"
      ],
      "line": 15,
      "id": "verificar-mensagem-de-erro-do-login-do-site;verificar-mensagem-de-erro;;1"
    },
    {
      "cells": [
        "\"aventuragames@hotmail.com\"",
        "\"uiouipuoi908\""
      ],
      "line": 16,
      "id": "verificar-mensagem-de-erro-do-login-do-site;verificar-mensagem-de-erro;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 6,
  "name": "possibilidade de senha ou login errado",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "para o usúario possa saber se digitou senha ou login errado",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginErrado.para_o_usúario_possa_saber_se_digitou_senha_ou_login_errado()"
});
formatter.result({
  "duration": 35063917500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verificar mensagem de erro",
  "description": "",
  "id": "verificar-mensagem-de-erro-do-login-do-site;verificar-mensagem-de-erro;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar um \"aventuragames@hotmail.com\" inválido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "inserir uma \"uiouipuoi908\" inválida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema deve mostrar mensagem de erro",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "aventuragames@hotmail.com",
      "offset": 13
    }
  ],
  "location": "LoginErrado.informar_um_inválido(String)"
});
formatter.result({
  "duration": 611494804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uiouipuoi908",
      "offset": 13
    }
  ],
  "location": "LoginErrado.inserir_uma_inválida(String)"
});
formatter.result({
  "duration": 357936243,
  "status": "passed"
});
formatter.match({
  "location": "LoginErrado.o_sistema_deve_mostrar_mensagem_de_erro()"
});
formatter.result({
  "duration": 3556668173,
  "status": "passed"
});
formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open chrome  and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be  able to  login  sucessfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("TesteLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 3,
  "name": "realizar login no site aventuragames.com.br",
  "description": "Para validar a autenticação no sistema de login",
  "id": "realizar-login-no-site-aventuragames.com.br",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "realizar-login-no-site-aventuragames.com.br;realizar-login-no-sistema-com-usuários-válidos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "informar um \u003cUsuario\u003e válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "inserir uma \u003cSenha\u003e válida",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "realizar-login-no-site-aventuragames.com.br;realizar-login-no-sistema-com-usuários-válidos;",
  "rows": [
    {
      "cells": [
        "Usuario",
        "Senha"
      ],
      "line": 16,
      "id": "realizar-login-no-site-aventuragames.com.br;realizar-login-no-sistema-com-usuários-válidos;;1"
    },
    {
      "cells": [
        "\"\"",
        "\"\""
      ],
      "line": 17,
      "id": "realizar-login-no-site-aventuragames.com.br;realizar-login-no-sistema-com-usuários-válidos;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 6,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "realizar-login-no-site-aventuragames.com.br;realizar-login-no-sistema-com-usuários-válidos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar um \"\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "inserir uma \"\" válida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});