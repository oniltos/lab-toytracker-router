import mongoose from "mongoose";
import validator from 'validator'

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
        message: "email is mandatory"
    }
  },
  birthDate: {
    type: Date,
    required: true
  },
}, { timestamps: true })

export default model('User', userSchema)