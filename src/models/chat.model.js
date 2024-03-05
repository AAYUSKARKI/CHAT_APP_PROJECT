import mongoose, { Schema } from 'mongoose'

const chatschema = new Schema(
    {
        sender_id: {
         type :Schema.Types.ObjectId,
         ref:'User'
        },
       receiver_id:{
        type :Schema.Types.ObjectId,
        ref:'User'
       },
       message:{
        type :String,
        required:true
       }
    },
        {
            timestamps: true
        }
)

export const Chat = mongoose.model("chat", chatschema)