# Descrição

Este é um template de portifólio que utiliza de Vue 3, Typescript, Firebase (utilizado para armazenar as mensagens enviadas pelos usuários) e Tailwind
(responsável por cuidar de toda a parte de estilização do projeto).

# Web-Vitals do Projeto

![web-vitals-portifolio-desktop](https://github.com/RJpedro/meu_portifolio/assets/72029756/4877c33b-d635-4733-b93a-a753fd210eef)
![web-vitals-portifolio-mobile](https://github.com/RJpedro/meu_portifolio/assets/72029756/68ed2566-431c-4a39-85bd-1adedc11f14d)

## Configurações do Projeto

Acesse src/config e clone o arquivo api_firebase_example.json e o chame de api_firebase.json.
Esse arquivo é o responsável por armazenar as credenticias necessárias para o funcionamento
da seção "Contate-me", para ter acesso as essas credenciais basta cadastrar um conta em 
https://firebase.google.com/?hl=pt-br, depois você deverá criar um novo projeto, ao se criar o projeto
você verá todas essas credenciais, basta copiar os valores para o arquivo criado anteriormente.

## Como funciona

1° Esse projeto foi pensado para se ter seções e dentro dessas seções a chamada de componentes. 

2° Existem alguns arquivos bem importantes que são responsáveis por se criar vários componentes
que são os arquivos de configuração que ficam dentro da pasta src/config sendo eles:
    experiences.json
    projects.json
    skills.json
Para não ter que mexer diretamente no código sempre que seja necessário adicionar uma nova
experiência, projeto ou skill, esses arquivos foram criados facilitando a adição/manutenção.

3° Sempre que uma imagem nova for adicionada em qualquer um dos 3 json de configurações mencionados anteriormente, 
ela também deverá ser adicionada na sections/hidden_imagens.vue, por que quando utilizamos a nomenclatura @ em 
arquivo json, na hora que o objeto é chamado o vue não interpreta o @ como o caminho correspondente (./src), se 
não entendeu essa parte não se preocupe pois criei o arquivo config_project.json para cuidar desse detalhe.

### Instalando o projeto 

npm i -> Comando para instalar todos os pacotes necessários para se rodar o projeto
```sh
    npm i                   
```

### Iniciando o projeto 

Após fazer a configuração do projeto corretamente basta você executar os seguintes comandos em diferentes terminais:

npm run dev         -> Comando para iniciar o projeto em modo de desenvolvimento<br>
npm run build-css   -> Comando para executar o build do css com tailwind e ficar escutando as mudanças realizadas a estilização 
```sh
    npm run dev
    npm run build-css 
```

### Preparando o projeto para o build

Antes de iniciar o build propriamente dito, é recomendado executar os seguintes comandos:

npm run format      -> Comando para formatar todos os arquivos modificados, mantendo um padrão<br>
npm run lint        -> Comando para verificar se tem erros em determinados arquivos
```sh
    npm run format
    npm run lint
```

#### Buildando projeto para produção

npm run build           -> Ira buildar todo o projeto desenvolvido na pasta dist/ (Essa é a pasta para qual o seu servidor deverá apontar) 
```sh
    npm run build
```

#### Status do projeto atualmente / Próximos passos

Estou ciente de que ainda se tem n melhorias para se fazer nesse projeto, mas estarei aos poucos reformulando o projeto inteiro
visando utilizar mais do framework vue (sinto que por ser meu primeiro projeto não consegui usufruir 100% do seu pontencial).
Estarei trabalhando também no design da seção Contate-me.
