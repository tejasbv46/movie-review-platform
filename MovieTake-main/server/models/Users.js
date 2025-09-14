import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  ratedMovies: [
    {
      movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
      rating: Number
    }
  ],
  watchlist: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }  // ✅ new field
  ]
});

export const UserModel = mongoose.model('User', UserSchema);
