import mongoose from "mongoose";
const beneficiarySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true, 
    match: /^[0-9]{13}$/, 
  },
  contactNumber: {
    type: String,
    required: true,
    match: /^[0-9]{11}$/, 
  },
  email: {
    type: String,
    match: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/,  },
  address: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
 
});

// Create a model from the schema
export default mongoose.model('Beneficiary', beneficiarySchema);

