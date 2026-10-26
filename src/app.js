import express from 'express';
import livrosRoutes from './routes/livros.routes.js'
import leitoresRoutes from './routes/leitores.route.js'


const app = express();

app.use(express.json());
app.use('/livros', livrosRoutes);
app.use('/leitores', leitoresRoutes);

export default app;