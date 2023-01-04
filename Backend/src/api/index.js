require('dotenv').config();
const app = require('./app');

const PORT = process.env.APP_PORT;

app.listen(PORT,  async () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
