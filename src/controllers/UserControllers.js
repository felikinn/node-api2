const User = require ("../models/User")
module.exports={
    
    async show (req,res){
        try {
            const { userId }= req.params
            const userExist= await User.findById ({_id: userId})
            if(!userExist){
                return res.status(401).json({error: "usuario não cadastrado"})
            }
            const users= await User.find({_id:userId})
            
            return res.status(200).json({users})
               
            

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

   

   
   
   


   

    async List(req,res){
        try{

            const users = await User.find()
            
            res.status(200).json({users})

        }catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        
        }
    },

  
    
    async create (req,res){
        try {
            const {nome, email, cargo} = req.body
            const userExist= await User.find({email})
            
            if (userExist){
                return res.status(401).json({error:"ja existe um usuario com este email"})
            }
            const user= await User.create({nome, email, cargo})
            
             return res.status(201).json({user})

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

    async update (req,res){
        try {
            const{nome,email,cargo}= req.body
            const { userId }= req.params
           
            const userExist= await User.findById ({_id: userId})
            if(!userExist){
                return res.status(401).json({error: "não é possive atualizar um usuario não cadastrado"})
            }
            
            const user= await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                email,
                cargo

            },{
                new:true
            })
           
            res.status(200).json({user})

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

    async delete (req,res){
        try {
            const { userId }= req.params
            const userExist= await User.findById ({_id: userId})
            if(!userExist){
                return res.status(401).json({error: "não é possivel deletar atualizar um usuario não cadastrado"})
            }
            const user= await User.findByIdAndDelete({_id:userId})
            
            res.json({user})
               
            

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },
    
}

    
       
