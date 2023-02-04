import { Router } from "express";

const welcomeRouter = Router()

welcomeRouter.get('/', (req, res) => {
    res.send('Welcome to the Toy Tracker API!')
})

export default welcomeRouter