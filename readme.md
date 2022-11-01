## Pizzaria_API

Aplicação backend que serve uma lista de pizzas para serem consultadas pelo front-end. Além da listagem é permitido o cadastro de novos pedidos, fazer uma busca de todos os pedidos registrados ou buscar um pedido individualmente pelo seu id.

#### Tecnologia utilizadas

- Typescript
- docker
- prisma.io
- postgres
- express
- yarn

### Requisitos

Para executar essa aplicação, tenha instalado em sua máquina

- Nodejs
- docker
- rest client de sua preferência

### Endpoints de consulta

| endpoint       | verbo HTTP | Descrição                                  |
| -------------- | ---------- | ------------------------------------------ |
| /api/pizzas    | GET        | Lista as pizzas cadastradas na aplicação   |
| /api/order     | GET        | Lista pedidos cadastrados                  |
| /api/order/:id | GET        | Lista pedidos cadastrados buscando pelo id |
| /api/order     | POST       | Cadastra um novo pedido                    |

### Iniciando aplicação

Após clonar este repositório, instale as dependências usando o comando `yarn install`, altere o arquivo `.env.example` para `.env` e configure a url de conexão do banco com as credênciais adequadas. Após configurar a url de conexão inicialize o postgresSql via docker com o comando `docker-compose up`

#### Executando migrations

Para executar as migrations insira o comando `yarn prisma migrate dev`

### Executando seed comand

Ao executar o comando de seed, o banco de dados é populado com algumas ordens de pedidos e as pizzas cadastradas na aplicação. Para iniciar o seed, execute o comando `yarn prisma db seed`.

### Cadastrando Pedido

Para cadastrar um novo pedido, é necessário fazer uma requisição do tipo POST no endpoint `/api/order`. Os dados devem ser enviados no formato json, atendento ao seguinte modelo:

```
{
	"client":"carlos silva",
	"adress":"rua do carlos n° 15",
	"phone":"91 9865-214",
	"payment_method":"dinheiro",
	"content": [
		{
		"pizza_name":"Marguerita",
		"quantidade":5
		},
		{
		"pizza_name":"Portuguesa",
		"quantidade":2
		}
	]
}
```

uma resposta com status de criação deve ser retornada
