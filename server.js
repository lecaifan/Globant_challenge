const express = require('express');
const apiRoutes = require('./src/routes/api');
const sequelize = require('./src/database/db');

const app = express();
const PORT = process.env.PORT || 3000;

//Parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/Globant', apiRoutes);

// el force es para que no elimine y vuelva crear las tablas
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
