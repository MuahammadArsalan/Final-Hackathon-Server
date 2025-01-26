import express from "express";
import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
  cnic: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  purpose: { 
    type: String, 
    required: true 
  }
});



export default mongoose.model("beneficiarySchema", beneficiarySchema)

