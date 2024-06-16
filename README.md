# social-feed-web

Simple feed project utilizing Node, Express, Typescript, socket.io and Sequelize.

Example request to trigger "new post alert on web":

{
    "content": "41",
    "user":2
}

user id is being mocked to simulate if the new post was created by the user themself or by another user. If the user id is "2", then the it will trigger the alert via web socket.

# run

pnpm run dev

# create migration

npx sequelize migration:generate --name enterYourMigrationNameHere

# run migrations

pnpm run migrate

# undo migrations

pnpm run undo-migrate
