const authRequired = (req,res,next)=>{
    const {id} = req.cookies
    if (!id) res.status(401).json({message:"No token, authorization denied"})
    req.user = id;
    next()
};

module.exports = authRequired;