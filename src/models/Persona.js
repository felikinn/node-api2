const mongooose = require("mongoose")

const PersonaSchema = new mongooose.Schema(
    {
        owner: {
            type: mongooose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        
        name:{
                type: String
        },

        sex:{
            type: String
        },
        age:{
            type: String
        }, 
        role:{
            type: String
        },    
        where_works:{
            type: String
        },    
        scolarship:{
            type: String
        },    
        communication_means:{
            type: String
        },    
        dream:{
            type: String
        },    
        problems:{
            type: String
        },    
        company_help:{
            type: String
        },    
        company_workers:{
            type: String
        },    
        company_role:{
            type: String
        },    
        image:{
            type: String
        },    


    
    },
    {
        timestamps:true
    }

)
module.exports= mongooose.model("User",PersonaSchema)