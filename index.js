import express from 'express';
import Contenedor from './classContenedor.js';

const contenedor = new Contenedor("productos.txt")

const app = express()
const port = 8080

app.get("/", (req, res) => {
    res.send("Hola desde home")
    console.log("hola")
})

app.get("/productos", async (req, res) => {
    let productos = await contenedor.getAll()
    res.send(productos)
    console.log(productos)
})

app.get("/productoRandom", async (req,res) => {
    let productos = await contenedor.getAll()
    let cantProductos = productos.length
    let randomId = Math.floor(Math.random() * (cantProductos) + 1)
    let productoRandom = await contenedor.getById(randomId)
    res.send(productoRandom)
    console.log("Producto random:",productoRandom)
    
})


app.listen(port, ()=> {
    console.log(`Servidor activo y escuchando en el puerto ${port}`)
})