import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.connection.js'
import toysRouter from './routes/toys.routes.js'
import usersRouter from './routes/users.routes.js'
import welcomeRouter from './routes/welcome.routes.js'
import searchRouter from './routes/search.routes.js'

const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use('/', welcomeRouter)
app.use('/search', searchRouter)
app.use('/toys', toysRouter)
app.use('/users', usersRouter)

app.listen(process.env.PORT, () => console.log("Server listening on port:", process.env.PORT))