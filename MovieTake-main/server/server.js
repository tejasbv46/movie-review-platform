import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { keyRouter } from './routes/keys.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

// Routes
app.use("/auth", userRouter)
app.use("/keys", keyRouter)

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err))

// Start server
app.listen(PORT, () => {
    console.log("🚀 Server listening on port " + PORT + "...")
})
