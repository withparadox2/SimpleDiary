import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createTime: { type: Date, default: Date.now }
})

interface IPost extends mongoose.Document {
    title: String,
    content: String,
    createTime: Date
}

const PostModel = mongoose.model<IPost>('Post', postSchema)

export default PostModel
