import app from "./app"
import 'dotenv/config'

app.listen(process.env.APP_PORT, () => { console.log(`Ouvindo na porta: ${process.env.APP_PORT}`) });
