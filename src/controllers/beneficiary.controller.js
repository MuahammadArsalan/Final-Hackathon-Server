
import beneficiaryModel from "../models/beneficiary.model.js";




const CreateBeneficiary = async (req, res) => {
  const { name, cnic, phone, address,purpose } = req.body;


  if (!name) {
    return res.json({ message: "name required" });
  }
  if (!cnic) {
    return res.json({ message: "cnic required" });
  }
  if (!phone) {
    return res.json({ message: "phone required" });
  }
  
  if (!purpose) {
    return res.json({ message: "purpose required" });
  }
  if (!address) {
    return res.json({ message: "address required" });
  }

try {
    
  let checkbeneficiary = await beneficiaryModel.find({cnic})

if(checkbeneficiary){

res.json({
  message:"Beneficiary Already exist"

})}  

} catch (error) {
 console.log(error);
    
}
  try {
    let beneficiary = await beneficiaryModel.create({
      name,
      cnic,
      phone,
      address,
      purpose
    })

    
    res.status(201).json({ message: "Beneficiary created successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error creating beneficiary", error });
  }
};

const getBeneficiary = async(req,res)=>{

const getall = await beneficiaryModel.find({})

if(!getall){
    res.json({
        message:"No Beneficiary found"
    })
}

res.json({
    message:"successfully executed",
    data:getall

})

}


export {CreateBeneficiary,getBeneficiary}