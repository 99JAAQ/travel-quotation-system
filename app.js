const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config();

// Crear la aplicación Express
const app = express();

// Configurar EJS
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Configuración de rutas
const homeRoutes = require('./routes/homeRoutes');
const searchRoutes = require('./routes/searchRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const quoteDetailsRoutes = require('./routes/quoteDetailsRoutes');
const customizationRoutes = require('./routes/customizationRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const profileRoutes = require('./routes/profileRoutes');
const supportRoutes = require('./routes/supportRoutes');
const confirmationRoutes = require('./routes/confirmationRoutes');

app.use('/', homeRoutes);
app.use('/search', searchRoutes);
app.use('/results', resultsRoutes);
app.use('/quoteDetails', quoteDetailsRoutes);
app.use('/customization', customizationRoutes);
app.use('/summary', summaryRoutes);
app.use('/booking', bookingRoutes);
app.use('/profile', profileRoutes);
app.use('/support', supportRoutes);
app.use('/confirmation', confirmationRoutes);

// Middleware de manejo de errores
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

// Lanzar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
