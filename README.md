# Parking Backend

Backend para aplicacion parking web

## Tecnologías
- Nodejs
- Express
- TypeScript
- Prisma ORM
- MariaDB

## Uso
### Habilitar MariaDB
Crear tabla en la base de datos

`create table parking`

### Crear archivo .env
Crear las siguientes variables y modificar la url de conexión

`APP_PORT=8000`

`DATABASE_URL="mysql://usuario:contraseña@localhost:3306/parking"`

### Iniciar el servidor
`npm install`

`npm run start`