const mongooose = require("mongoose")

const UserSchema = new mongooose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        cidade:{
            type: String,

        },
        idade: {
            type: Number

        }
    }

)
module.exports= mongooose.model("user",UserSchema)
