#language:pt
@login
Funcionalidade: verificar mensagem de erro do login do site 
Para verificar a mensagem de erro no sistema de login

Contexto: possibilidade de senha ou login errado
Dado para o usúario possa saber se digitou senha ou login errado

Esquema do Cenário: verificar mensagem de erro
Quando informar um <Usuario> inválido
E inserir uma <Senha> inválida
Então o sistema deve mostrar mensagem de erro

Exemplos:
|Usuario|Senha|
|"aventuragames@hotmail.com"|"uiouipuoi908"|
