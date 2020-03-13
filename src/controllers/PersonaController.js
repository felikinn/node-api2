const Persona=require ("../models/Persona")
module.exports={
    async show (req,res){
        try {
            const { personaId }= req.params
            const personaExist= await Persona.findById ({_id: personaId})
            if(!personaExist){
                return res.status(401).json({error: "usuario não cadastrado"})
            }
            const personas= await Persona.find({_id:personaId})
            
            return res.status(200).json({personas})
               
            

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

   

   
   
   


   

    async List(req,res){
        try{

            const personas = await Persona.find()
            
            res.status(200).json({personas})

        }catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        
        }
    },

  
    
    async create (req,res){
        try {
            const {owner, name, sex, age, role, where_works, scolarship, communication_means, dream, problems, company_help, company_workers, company_role, image} = req.body
            
            const persona= await Persona.create({owner, name, sex, age, role, where_works, scolarship, communication_means, dream, problems, company_help, company_workers, company_role, image})
            
             return res.status(201).json({persona})

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

    async update (req,res){
        try {
            const{owner, name, sex, age, role, where_works, scolarship, communication_means, dream, problems, company_help, company_workers, company_role, image}= req.body
            const { personaId }= req.params
           
            const personaExist= await Persona.findById ({_id: personaId})
            if(!personaExist){
                return res.status(401).json({error: "não é possive atualizar um usuario não cadastrado"})
            }
            
            const persona= await Persona.findByIdAndUpdate({
                _id: personaId
            },{
                owner, name, sex, age, role, where_works, scolarship, communication_means, dream, problems, company_help, company_workers, company_role, image

            },{
                new:true
            })
           
            res.status(200).json({persona})

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },

    async delete (req,res){
        try {
            const { personaId }= req.params
            const personaExist= await Persona.findById ({_id: personaId})
            if(!personaExist){
                return res.status(401).json({error: "não é possivel deletar atualizar um usuario não cadastrado"})
            }
            const persona= await Persona.findByIdAndDelete({_id:personaId})
            res.json({persona})
               
            

        } catch(err){
            console.log(err)
            return res.status(500).json({msg:"problemas no server"})
        }
    },
    
} 