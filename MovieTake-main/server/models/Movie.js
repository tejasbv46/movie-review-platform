/*import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  name: String,
  poster: String,
  imdbID: String
});

export const MovieModel = mongoose.model('Movie', movieSchema)*/
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  poster: String,
  imdbID: { type: String, unique: true },
  reviews: [reviewSchema]  // <-- embed reviews
});

export const MovieModel = mongoose.model('Movie', movieSchema);
