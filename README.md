![Banana](https://photos.prnewswire.com/prnfull/20151020/278614LOGO)

## Libs (Produção e Desenvolvimento)

---

1. React.JS
1. React Router Dom
1. Styled Components
1. EsLint
1. Prettier

## Considerações

---

1. A abordagem utilizada para passagem de parametros foi feita através das rotas, já que não se tratavam de dados sensiveis para o usuário final. Apesar de gostar do Redux, a aplicação era muito simples para utilização do mesmo (projetos desenvolvidos com redux no final do Readme).

1. Escolhi passar o svg como Children para facilitar a modificação do mesmo, no hover, e quando o item é selecionado. Em um cenário ideal, sugeriria duas opções:
   2.1 Design desenvolvido em cima de uma biblioteca de icones já existente;
   2.2 Transformar todos os ícones em fontes, diminuindo assim a quantidade de código e mantendo a facilidade de customização do componente;

1. A forma como foi dividido os componentes não estão causando renderizações desnecessárias, praticamente não tive necessidade de memorizar os componentes;

1. Com um pouco mais de tempo, dividiria mais a aplicação em componentes menores, acabei repetindo muito código em containers de estilo, também alteraria a implementação da Borda lateral com a logo, fiz da primeira forma que imaginei, mas claramente não é a melhor, adicionaria loadings enquanto as requisições estão sendo processadas.

## Iniciando

---

Baixe as dependências utilizando o comando a seguir

```shell
  yarn
```

Inicie a aplicação utilizando o comando a seguir

```shell
  yarn start
```

## Deploy

---

Não realizei o deploy, pois tive problemas com as rotas no netlify, é necessário fazer algumas configurações, para que o roteamento fique por conta da aplicação e não do servidor;

## Sugestão

---

A não ser que faça parte do teste, algumas informações sobre a validação do formulário no servidor não foram informadas, no campo de nome e sobrenome a regra que deveria conter ao menos 2 letras um espaço em branco e ao menos mais duas letras, poderia ser informada, evitando possíveis erros de implementação e pouparia tempo de investigação.

## Outros Projetos

---

Um lista de projetos desenvolvidos apenas por estudo ou diversão.

1.[Task App](https://task-minimal.netlify.com/) : controle de atividades do dia;

2. [Best Sellers NYT](https://bestsellers.netlify.com/): Consumo da api do New York Times;
3. [VUTTR](https://github.com/JulioVMelo/vuttr) : Projeto para salvar libs que gostei e pretendo usar em algum momento (Desenvolvido com redux e sagas);
4. [Loja Mobile](https://github.com/JulioVMelo/RocketShoesMobile) : App desenvolvido com react native, redux e sagas;
5. [Clone do gmail](https://github.com/JulioVMelo/clone-gmail): apenas uma brincadeira, na época estava estudando flexbox;
6. [Clone do Twitter](https://github.com/JulioVMelo/clone-gmail): apenas diversão.

## Empresa

---

Projetos desenvolvidos em produção

1. [PWA Institucional](https://www.alfagroup.tech/): utilizando Gatsby + GraphQL
1. [PWA institucional 2](https://www.alfainteligencia.com.br/): utilizando Gatsby + GraphQL
1. [Style guide de desenvolvimento CSS](http://styleguide.sogo.com.br/docs/css/): Como tech lead criei um projeto utilizando o Docusaurus para ajudar os novos funcionários a seguirem os padrões de desenvolvimento com CSS.
1. Mais 80 órgãos governamentais utilizando um thema wordpress que criei seguindo as regras do Tribunal de contas.
1. Nesse momento possuo 2 dashboards em desenvolvimento, infográficos utilizando a biblioteca Recharts (d3).
1. [Design de app](https://prototipotensai.netlify.com/): (NÃO SOU DESIGN, não tenho essa competência) Feito por conta de uma necessidade da empresa.
