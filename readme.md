# StarterKit

## Instalação
Pacotes do [composer](https://getcomposer.org/):  
`$ composer install`

Pacotes npm:  
`$ npm install`

## Gulp tasks
Gerar documentação de api usando [APIDOC](http://apidocjs.com/):  
`$ gulp apidocs`

Gerar documentação geral do sistema com [sammi](https://github.com/FriendsOfPHP/Sami):  
`$ gulp sami-docs`

Gerar as duas documentações simultaneamente:  
`$ gulp docs`

Executar a bateria de testes unitários com [phpunit](https://phpunit.de/):  
`$ gulp phpunit`

## Git pre-commit Hook
Ao fazer um commit um hook é disparado gerando a documentação e rodando a bareria de testes.
  
## Autenticação com JSON Web Tokens
ver documentação na seção wiki do projeto: [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth/wiki)