#language:pt
@login
Funcionalidade: realizar login no site aventuragames.com.br
Para validar a autenticação no sistema de login

Contexto: possibilidade de acessar o sistema
Dado que usuário possa acessar a tela de login do sistema

Esquema do Cenário: realizar login no sistema com usuários válidos
Quando informar um <Usuario> válido
E inserir uma <Senha> válida
Então o sistema deve permitir a autenticação do usuário


Exemplos:
| Usuario | Senha  | 
| "" | "" | 

