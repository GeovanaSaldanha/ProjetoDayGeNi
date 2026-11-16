import express from 'express';
import livrosRoutes from './routes/livros.route.js'
import leitoresRoutes from './routes/leitores.route.js'
import exemplaresRoutes from './routes/exemplares.route.js'


const app = express();

app.use(express.json());
app.use('/livros', livrosRoutes);
app.use('/leitores', leitoresRoutes);
app.use('/exemplares', exemplaresRoutes);

export default app;