import express from 'express';
import cors from 'cors';
import { agregarViaje, obtenerViajes } from './consultas.js'; 

const app = express(); // Creamos la aplicación express
app.use(cors());  // Habilitamos CORS
app.use(express.json()); // Habilitamos el uso de JSON


app.listen(3000, console.log("SERVIDOR ENCENDIDO"))

app.get("/viajes", async (req, res) => {
    const viajes = await obtenerViajes()
    res.json(viajes)
})

app.post("/viajes", async (req, res) => {
    const { destino, presupuesto } = req.body
    await agregarViaje(destino, presupuesto)
    res.send("Viaje agregado con éxito")
})