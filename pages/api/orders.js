import Authenticated from '../../helpers/Authenticated';
import initDB from '../../helpers/initDB';
import Order from '../../models/Order';

initDB();

export default Authenticated (async(req, res)=>{

     const order = await Order.find({user:req.userId})
     .populate("products.product")

     res.status(200).json(order)
    })