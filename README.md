# Mashgin Take Home - Gustavo

This project is using NX. What you need to have on your machine:

- NodeJS 18+
- Docker
- PNPM installed as global package

## Instructions to run

You will need three terminals

1. To install and run the database
2. To run the migrations and then run the services
3. To run the web app

Terminal 1: Install the dependencies

```bash
pnpm install
```

After installing, make sure to turn on your docker client.

Terminal 1: Up the database

```bash
pnpm database:up
```

Terminal 2: Migrate and seed the database

```bash
pnpm database:migrate # only necessary on the first time
```

Terminal 2 and 3: Run the applications

```bash
pnpm serve:services # terminal 2
pnpm serve:app # terminal 3
```

You will see the **services** running on `http://localhost:3000`.
You will see the **web app** running on `http://localhost:4200`.
