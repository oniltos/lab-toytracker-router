import { Router } from "express"
import Toy from '../models/toy.model.js'

const searchRouter = Router()

searchRouter.get('/', async (req, res) => {

    const { minValue, maxValue } = req.query

    try {

        if (!minValue && !maxValue) {
            return res.status(204).json()
        }

        const toysBetween = await Toy.find({ value: { $gte: minValue, $lte: maxValue } })

        return res.status(200).json(toysBetween)

    } catch (err) {

        return res.status(500).json({ message: 'Internal Server Error' })
    }
})


export default searchRouter