# Descubra Maranhão

## Links

- [Backend](https://descubra-maranhao.onrender.com/docs)
- [Frontend](https://descubra-maranhao.vercel.app)

## Variáveis de Ambiente do Backend

Para rodar este projeto, você vai precisar adicionar as seguintes variáveis de ambiente ao seu arquivo `.env`:

```dotenv
DB_HOST=host do banco
DB_USERNAME=usuario do banco
DB_PASSWORD=senha do banco
DB_NAME=nome do banco
DB_PORT=porta do banco
  
AUTH_SECRET=sua chave secreta para jwt

USER_NAME=nome do usuario adm a ser criado
USER_EMAIL=email do usuario adm a ser criado
USER_ADM=1
USER_PASSWORD=senha do usuario adm a ser criado(senha criptografada usando a biblioteca bcryptjs)
```

## Rodando as Migrações e Seeds no Sequelize

### Passo 1: Instalar Dependências

Primeiro, instale todas as dependências do projeto:

```bash
$ yarn install
```

### Passo 2: Rodar as Migrações

Para rodar as migrações do banco de dados, utilize o seguinte comando:

```bash
$ npx sequelize-cli db:migrate
```

### Passo 3: Rodar as Seeds

Para popular o banco de dados com dados iniciais (seeds), utilize o seguinte comando:

```bash
$ npx sequelize-cli db:seed:all
```

## Iniciando o Servidor

Após configurar as variáveis de ambiente e rodar as migrações e seeds, inicie o servidor com o comando:

```bash
$ yarn start
```