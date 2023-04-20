# Onboarding Projeto BackEnd API Hamburgueria

## Sobre o projeto
API de uma Hamburgueria criada utilizando NodeJS, Prisma e Typescript.

## Desenvolvedor

* [Allan Almeida](https://github.com/allangbr)

## Tecnologias utilizadas 

* ![Typescript](https://img.shields.io/badge/Typescript-1E90FF?style=for-the-badge&logo=typescript&logoColor=white)
* ![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
* ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-00000F?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Prisma](https://img.shields.io/badge/Prisma-8A2BE2?style=for-the-badge&logo=prisma&logoColor=white)

## Teste Utilizando Versão Online no Render

Neste caso, você só precisa do insominia para realizar as requisições

1. Este é o link para ser acessado: https://onboarding-api-kv85.onrender.com
2. Temos as rotas 

Client
- https://onboarding-api-kv85.onrender.com/clients/create (POST)
- https://onboarding-api-kv85.onrender.com/clients/getAll (GET)
- https://onboarding-api-kv85.onrender.com/clients/:username (getOne) (GET)
- https://onboarding-api-kv85.onrender.com/clients/:username (update) (PUT) 
- https://onboarding-api-kv85.onrender.com/clients/:username (delete) (DELETE)

No método create, você irá passar no corpo {username, password, name, email, number, address}

No método update, você irá passar no corpo {password, name, email, number, address}

Order
- https://onboarding-api-kv85.onrender.com/orders/create (POST)
- https://onboarding-api-kv85.onrender.com/orders/getAll (GET)
- https://onboarding-api-kv85.onrender.com/orders/:id (getOne) (GET)
- https://onboarding-api-kv85.onrender.com/orders/:id (update) (PUT) 
- https://onboarding-api-kv85.onrender.com/orders/:id (delete) (DELETE)

Em todas as requisições você vai definir no Headers, Authorization = Bearer Token que você recebe quando cria o cliente

No método create, você irá passar no corpo {client_username} 

No método update, você irá passar no corpo {client_username, status}

MenuItem
- https://onboarding-api-kv85.onrender.com/menuItems/create (POST)
- https://onboarding-api-kv85.onrender.com/menuItems/getAll (GET)
- https://onboarding-api-kv85.onrender.com/menuItems/:id (getOne) (GET)
- https://onboarding-api-kv85.onrender.com/menuItems/:id (update) (PUT) 
- https://onboarding-api-kv85.onrender.com/menuItems/:id (delete) (DELETE)

Em todas as requisições você vai definir no Headers, Authorization = Bearer Token que você recebe quando cria o cliente

No método create, você irá passar no corpo {name, description, price}

No método update, você irá passar no corpo {name, description, price}

OrderItem
- https://onboarding-api-kv85.onrender.com/orderItems/create (POST)
- https://onboarding-api-kv85.onrender.com/orderItems/getAll (GET)
- https://onboarding-api-kv85.onrender.com/orderItems/:id (getOne) (GET)
- https://onboarding-api-kv85.onrender.com/orderItems/:id (update) (PUT) 
- https://onboarding-api-kv85.onrender.com/orderItems/:id (delete) (DELETE)

Em todas as requisições você vai definir no Headers, Authorization = Bearer Token que você recebe quando cria o cliente

No método create, você irá passar no corpo {order_id, item_id, amount}

No método update, você irá passar no corpo {order_id, item_id, amount}

## Instalação

Nesta seção você encontra o tutorial de execução do projeto

1. A primeira ação a se tomar é realizar o clone do projeto na sua máquina com o comando:

```console
git clone https://github.com/allangbr/onboarding_project.git
```

### Preparando o Prisma ORM 

2. Dentro da pasta "server", crie o arquivo .env e defina o DATABASEURL da seguinte forma:
 
```console
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"
```

### Executando o Banco de Dados com Docker

3. Criando a network
```console
docker network create -d bridge my-network
```

4. Criando o container do PostgreSQL 
```console
docker run --name postgres-server -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v $HOME/dev/docker/volumes/postgres/postgresql:/var/lib/postgresql -v $HOME/dev/docker/volumes/postgres/postgresql_data:/var/lib/postgresql/data --network=my-network -d postgres:latest
```

5. Criando o container do PgAdmin
```console
docker run --name pgadmin-server -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" -e "PGADMIN_DEFAULT_PASSWORD=pgadmin" --network=my-network -d dpage/pgadmin4:latest
```

6. Rodando os containers
```console
docker start postgres-server pgadmin-server
```

7. Já com o projeto aberto, abra o seu terminal e rode os seguintes comandos
```console
npm install
```
```console
npx prisma generate
```
```console
npx prisma migrate dev
```
```console
npm run dev
```



