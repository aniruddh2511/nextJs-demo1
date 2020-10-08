import initDB from '../../helpers/initDB';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import Cart from '../../models/Cart';
initDB();

export default async (req, res) => {

    const {name,email,password} =req.body;

    try{
        if(!name || !email || !password)
        {
         return res.status(422).json({error:"please fill all field"})
        }
      const user =  await User.findOne({email})
        if(user){
            return res.status(422).json({error:"User already exist with email"})
        }
      const hashPassowrd = await bcrypt.hash(password,12)
     const newuser = await new User({
            name,
            email,
            password:hashPassowrd
        }).save()
        await new Cart({user:newuser._id}).save()
       
        res.status(201).json({message:"signup sucess"})

    }catch(err){
            console.log(err);
    }

}