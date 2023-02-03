import {Router} from 'express'
import Toy from '../models/Toy.model.js'

const toysRouter = Router()

toysRouter.post('/', async (req, res) => {

    try {

        const newToy = await Toy.create(req.body)
        return res.status(201).json(newToy)
    } catch (error) {
        console.log('Erro ao criar toy ', error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

toysRouter.get('/', async (req, res) => {
    try {
        const toys = await Toy.find({})
        return res.status(200).json(toys)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

toysRouter.get('/search', async (req, res) => {
    const { minValue, maxValue } = req.query
    let query = {}
    
    if (minValue && maxValue) {
        query = {value: {$gte: minValue, $lte: maxValue}};
    } else if (minValue) {
        query= {value: {$gte: minValue}};
    } else if (maxValue) {
        query = {value: {$lte: maxValue}};
    }
    
    try {
        const toys = await Toy.find(query)
        return res.status(200).json(toys)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
})




toysRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const toy = await Toy.findById(id)

        if(!toy) {
            return res.status(404).json({message: 'Toy not found'})
        }

        return res.status(200).json(toy)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

toysRouter.put('/:id', async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const updatedToy = await Toy.findOneAndUpdate({_id: id}, payload, { new: true })
        return res.status(200).json(updatedToy)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

toysRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Toy.findOneAndDelete({_id: id})
        res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

export default toysRouter