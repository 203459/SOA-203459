const express = require('express');
const app = express();

app.use(express.json());

const tareasRoutes = require('./routes/tareasRoutes');
app.use('/api', tareasRoutes);

app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

