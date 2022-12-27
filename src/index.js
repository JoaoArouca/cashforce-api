const app = require('./app');
const db = require('./database/models/index');

const PORT = 3001;

app.listen(PORT,  async () => {
    // await db.sync({ force: true }); // Force sync database
    await db.sequelize.sync({ alter: true }); // Force sync database

    console.log(`Aplicação rodando na porta ${PORT}`);
});
