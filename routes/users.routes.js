import { Router } from "express"
import User from '../models/User.model.js'


const usersRouter = Router()

usersRouter.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        return res.status(201).json(newUser)
    } catch (error) {
        console.log('Erro ao criar usuário ', error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

usersRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({message: 'User not found'})
        }

        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

usersRouter.put('/:id', async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const updatedUser = await User.findOneAndUpdate({_id: id}, payload, { new: true })
        return res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

usersRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await User.findOneAndDelete({_id: id})
        res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

export default usersRouter