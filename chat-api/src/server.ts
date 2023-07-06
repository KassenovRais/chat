import express, {Express}  from 'express'
import chatMessaga from './controllers/ChatController'

const PORT: number = 8000

const app:Express = express()

app.use(express.json())

app.use('/' , chatMessaga)

app.listen(PORT , () => console.log(`port start ${PORT}`))