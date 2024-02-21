const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;