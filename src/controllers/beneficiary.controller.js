
import beneficiaryModel from "../models/beneficiary.model.js";


const CreateBeneficiary = async (req, res) => {
  const { fullname, cnic, contactNumber, email, address, purpose } = req.body;


  if (!fullname) {
    return res.json({ message: "fullname required" });
  }
  if (!cnic) {
    return res.json({ message: "cnic required" });
  }
  if (!contactNumber) {
    return res.json({ message: "contactNumber required" });
  }
  if (!email) {
    return res.json({ message: "email required" });
  }
  if (!purpose) {
    return res.json({ message: "purpose required" });
  }
  if (!address) {
    return res.json({ message: "address required" });
  }

  try {
    let beneficiary = await beneficiary.create({
      fullname,
      cnic,
      email,
      contactNumber,
      address,
      purpose
    })

    
    res.status(201).json({ message: "Beneficiary created successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error creating beneficiary", error });
  }
};

// const getBeneficiary = async(req,res)=>{

// const getall = await beneficiary.find({})

// if(!getall){
//     res.json({
//         message:"No Beneficiary found"
//     })
// }

// res.json({
//     message:"successfully",
//     data:getall

// })

// }


export {CreateBeneficiary}