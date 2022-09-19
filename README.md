# <p align = "center"> projeto20-repoprovas</p>

<p align="center">
   <img src="https://cdn-icons-png.flaticon.com/512/326/326808.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-João Vitor-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SEU_NOME/NOME_DO_PROJETO?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna massa, mollis id facilisis ut, 
tristique convallis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
Maecenas a egestas sapien, lacinia iaculis nisi. Nam molestie fringilla egestas. Vestibulum pulvinar consequat arcu a varius. 
Vestibulum nec finibus enim. In at lobortis elit. Mauris imperdiet neque quis imperdiet ornare. Maecenas non nulla orci. 
Vestibulum tempor vitae tortor eget lobortis. Integer sapien eros, condimentum sit amet est at, vulputate efficitur elit. 
Praesent in velit pharetra, commodo libero a, egestas leo. Sed nunc enim, sodales vel pretium at, sodales a magna. 
Mauris nec nibh at enim venenatis faucibus. Duis bibendum commodo mattis. Phasellus luctus felis varius porta lacinia.

***

## :computer:	 Technologies and Concepts

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Postgresql with Prisma

***

## :rocket: Routes

```yml
POST /sign-up
    - Route to register a new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"
}
```
    
```yml 
POST /sign-in
    - Route to login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "password": "loremipsum"
    }
```
    
```yml 
GET /viewing-exams-by-discipline (authenticated)
    - Route to list all exams by discipline
    - headers: { "Authorization": "Bearer token" }
    - body: {}
```

```yml
GET /viewing-exams-by-instructor (authenticated)
    - Route to list all exams by Instructor
    - headers: { "Authorization": "Bearer token" }
    - body: {}
``` 

***

## 🏁 Running the application

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

First, clone this repository on your machine:

```
git clone https://github.com/J040V1T0RJG/projeto20-repoprovas
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

Finished the process, just start the server
```
npm start
```
or
```
npm run dev
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/projeto-frontend.git) que contem a interface da aplicação, para testar o projeto por completo.
