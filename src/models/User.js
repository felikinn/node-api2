const mongooose = require("mongoose")

const UserSchema = new mongooose.Schema(
    {
        nome: {
            type: String,
           
        },
        email:{
            type: String,
            require: true

        },
        cargo: {
            type: String

        }
    },{
        timestamps:true
    }

)
module.exports= mongooose.model("user",UserSchema)
