import mongoose, { Schema, Types } from "mongoose";

const userSchema = new Schema(
    {
      username:{
type:String,
required:[true,'Email is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
      },
      password: {
        type: String,
        required: [true, 'Password is required']
      },
      role: {
        type: String,
        enum: ['admin', 'receptionist', 'departmentStaff'],
        default: 'receptionist',
        required: [true, 'Role is required']
      }
    },
    { timestamps: true }
  );


userSchema.pre('save',async function(next){
if(!this.isModified('password')) return next()

    this.password= await bcrypt.hash(this.password,10)
    next()

})
export default mongoose.model('Users',userSchema)
