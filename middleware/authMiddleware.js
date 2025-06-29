import jwt from "jsonwebtoken";

const authmiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            msg:"No token"
        });

        const token = authHeader.split(" ")[1];
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
            next();
        }
        catch(err){
            res.status(401).json({msg:"Token Invalid"});
        }
    }
}

export default authmiddleware;