import mongoose from 'mongoose'
// TODO Tags, Comments, Update time...
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createTime: { type: Date, default: Date.now },
  userId: String
})

interface IPost extends mongoose.Document {
  title: string
  content: string
  createTime: Date
  userId: string
}

const PostModel = mongoose.model<IPost>('Post', postSchema)

export default PostModel
