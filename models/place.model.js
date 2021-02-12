const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: [ 'cafetería', 'librería' ],
  },
  location: {
    type: {
      type: String,
      coordinates: [Number]
    }
  }
}, {
  timestamps: true
})

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('place', placeSchema)
module.exports = Place