import express, { Request, Response } from "express"
import ITodos from "./src/interface/Todos"
import Todos from "./src/mocks/Todos"

const app = express()
const PORT = 5000

app.use(express.json())

app.get("/", (req: Request, res: Response) : Response => {
  return res.status(200).json({ message: "Gagal biasa menyerah jangan pernah" })
})

app.get("/todos", (req: Request, res: Response) : Response => {
  return res.status(200).json({ data: Todos})
})

// localhost:5000/todos/1
// 1 = string => number (Number() / parseInte() )

app.get("/todo/:id", (req: Request, res: Response) : Response => {
  const id = Number(req.params.id)
  const data = Todos.find((data) => data.id === id)
  
  return res.status(200).json(data)
})

app.post('/todo',(req:Request, res:Response) : Response => {
  const data: ITodos = req.body
  Todos.push(data)

  return res.status(200).json({ data: Todos})
})

app.delete("/todo/:id", (req: Request, res: Response) : Response => {
  const { id } = req.params
  const data: ITodos[] = Todos.filter(todo => todo.id !== parseInt(id))

  return res.status(200).json(data)
})

async function start(): Promise<void> {
  try {
    app.listen(PORT, () => console.log("Server express running"))
  } catch (error) {
    console.log(error)
    process.exit(1)  
  }
}

void start()
