const express= require("express")

const routes = express.Router()
const UserController= require("../controllers/UserControllers")
const PersonaController =require("../controllers/PersonaController")


routes.post('/user',UserController.create)
routes.put('/user/:userId',UserController.update)
routes.get('/user',UserController.List)
routes.get('/user/:userId',UserController.show)
routes.delete('/user/:userId',UserController.delete)


routes.post('/persona',PersonaController.create)
routes.put('/persona/:personaId',PersonaController.update)
routes.get('/persona',PersonaController.List)
routes.get('/persona/:PersonaId',PersonaController.show)
routes.delete('/persona/:PersonaId',PersonaController.delete)












module.exports = routes



