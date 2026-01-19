# Projeto B7Web Canil

Este projeto foi desenvolvido durante o curso de Node.js da B7Web.   
É uma aplicação web para exibição e busca de animais disponíveis para adoção em um canil virtual.  O sistema permite visualizar todos os animais, filtrar por tipo (cachorros, gatos, peixes) e realizar buscas por nome.

## Funcionalidades

- Listagem de todos os animais disponíveis no canil. 
- Filtragem de animais por tipo (cachorros, gatos, peixes).
- Sistema de busca por nome de animal.
- Interface responsiva com navegação dinâmica. 
- Páginas temáticas com banners personalizados para cada tipo de animal. 
- Página 404 personalizada para rotas não encontradas.

## Tecnologias Utilizadas

- Node.js
- Express 5+
- TypeScript
- Mustache (Template Engine)
- Mustache-Express
- dotenv
- CSS
- tsx (TypeScript execution)

## Estrutura do Projeto

- **src/controllers**:  Controllers para gerenciar as páginas (pageController) e busca (searchController).
- **src/models**: Model Pet para manipulação de dados dos animais. 
- **src/routes**:  Rotas da aplicação (home, dogs, cats, fishes, search).
- **src/views**: Templates Mustache para renderização das páginas.
- **src/data**: Dados estáticos dos animais disponíveis.
- **src/helpers**: Funções auxiliares para criação de objetos de menu.
- **src/interfaces**: Interfaces TypeScript para tipagem (BannerData, MenuOptions, PetData).
- **src/types**: Tipos customizados (PetType).
- **public/css**: Arquivos de estilo CSS.
- **public/images**: Imagens e banners dos animais.

## Sobre o Projeto

Este é um projeto didático que utiliza Express com TypeScript e Mustache como template engine. Os dados dos animais são armazenados estaticamente no arquivo de dados, sem conexão com banco de dados, apenas para fins de demonstração e aprendizado.

O Model `Pet` fornece três métodos principais:
- `getAll()`: Retorna todos os animais. 
- `getByType(type)`: Filtra animais por tipo (dog, cat, fish).
- `getByName(name)`: Busca animais por nome.

## Instalação

```bash
npm install
```

## Executando o Projeto

```bash
npm run dev
```

O servidor será iniciado na porta definida no arquivo `.env` ou na porta padrão 3000.  
Acesse [http://localhost:3000](http://localhost:3000) no navegador. 

## Estrutura de Rotas

- **`/`**: Página inicial com todos os animais
- **`/dogs`**: Listagem de cachorros
- **`/cats`**: Listagem de gatos
- **`/fishes`**: Listagem de peixes
- **`/search?q=termo`**: Busca de animais por nome

## Principais Componentes

- **pageController**:  Gerencia as páginas de listagem (home, dogs, cats, fishes) com banners e menus dinâmicos.
- **searchController**: Processa a busca de animais por nome.
- **Pet Model**: Fornece métodos para filtrar e buscar animais. 
- **createMenuOptions**: Helper que cria o objeto de menu com destaque na página ativa. 

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
```

## Créditos

Projeto desenvolvido como parte do curso de Node.js da [B7Web](https://b7web.com.br/).  
Instrutor:  Bonieky Lacerda

## Contato

Email: matheusmks10@gmail.com

## Licença

Este projeto está sob licença ISC.
