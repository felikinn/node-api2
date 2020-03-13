const express= require("express")

const routes = express.Router()
const UserController= require("../controllers/UserControllers")


routes.post('/user',UserController.create)
routes.put('/user/:userId',UserController.update)
routes.get('/user',UserController.List)
routes.get('/user/:userId',UserController.show)
routes.delete('/user/:userId',UserController.delete)

module.exports = routes

