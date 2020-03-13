const User = require ("../models/User")
module.exports={


    async show(req,res){
        try{
            const{ userId}= req.params


            const users = await User.find({
                _id: userId
            })
            console.log(users)
            res.json({users})

        }catch(err){
            console.log(err)
            res.json({msg:"problemas no server"})
        
        }
    },

    async List(req,res){
        try{

            const users = await User.find()
            console.log(users)
            res.json({users})

        }catch(err){
            console.log(err)
            res.json({msg:"problemas no server"})
        
        }
    },

  
    
    async create (req,res){
        try {
            const{nome,cidade,idade}= req.body
            const user= await User.create({nome,cidade,idade})
            console.log(user)
            res.json({user})

        } catch(err){
            console.log(err)
            res.json({msg:"problemas no server"})
        }
    },

    async update (req,res){
        try {
            const{nome,cidade,idade}= req.body
            const { userId}= req.params
            const user= await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                cidade,
                idade

            },{
                new:true
            })
            console.log(user)
            res.json({user})

        } catch(err){
            console.log(err)
            res.json({msg:"problemas no server"})
        }
    },

    async delete (req,res){
        try {
            const { userId }= req.params
            const user= await User.findByIdAndDelete({_id:userId})
            console.log(user)
            res.json({user})
               
            

        } catch(err){
            console.log(err)
            res.json({msg:"problemas no server"})
        }
    },
}

    
       
