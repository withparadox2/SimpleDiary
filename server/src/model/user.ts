
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        maxlength: 80,
        required: true
    },
    password: {
        required: true,
        type: String
    }
})

interface IUser extends mongoose.Document {
    email: string,
    userName: string,
    password: string
}

const UserModel = mongoose.model<IUser>('User', userSchema)

export default UserModel