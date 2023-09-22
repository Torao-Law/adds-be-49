import express from "express"
import dotenv from "dotenv"
import router from './src/routes'

async function start(): Promise<void> {
  try {
    dotenv.config()
    
    const app = express()
    const PORT = process.env.APP_PORT

    app.use(express.json())
    app.use("/api/v1", router)
    
    app.listen(PORT, () => console.log("Server express running"))
  } catch (error) {
    console.log(error)
    process.exit(1)  
  }
}

void start()


// http:localhost:5000/api/v1/todos