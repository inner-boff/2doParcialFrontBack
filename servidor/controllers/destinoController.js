const Destino = require('../models/Destino')

exports.crearDestino = async(req,res) => {

    try {
        let destino;
        destino = new Destino(req.body);
        await destino.save();
        res.send(destino);
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerDestinos = async(req,res) => {
    try {
        let destinos;
        destinos = await Destino.find();
        res.status(200).send(destinos);

    } catch (error) {
        console.log(error);
        res.status(500).send("OOPS! Hubo un error...")
    }
}

exports.eliminarDestino = async(req,res) => {
    try {
        let destino;
        destino = await Destino.findById(req.params.id)

        if(!destino) {
            res.status(404).json("No se encontró el destino")
        }
        await Destino.findOneAndRemove({_id:req.params.id});
        res.status(200).json("El destino ha sido eliminado con éxito")

    } catch (error) {
        console.log(error);
        res.status(500).send("OOPS! Hubo un error...")
    }
}

exports.obtenerDestino = async(req,res) => {
    try {
        let destino;
        destino = await Destino.findById(req.params.id)

        if(!destino) {
            res.status(404).json("No se encontyró el destino")
        }
        res.json(destino);s

    } catch (error) {
        console.log(error);
        res.status(500).send("OOPS! Hubo un error...")
    }
}

exports.actualizarDestino = async(req,res) => {
    try {
        const { nombre,descripcion,actividades,eventos,estacion } = req.body
        let destino;
        destino = await Destino.findById(req.params.id);

        if(!destino) {
            res.json("No se encontyró el destino")
        }

        destino.nombre = nombre;
        destino.descripcion = descripcion;
        destino.actividades = actividades;
        destino.eventos = eventos;
        destino.estacion = estacion;

        destino = await Destino.findOneAndUpdate({_id:req.params.id}, destino, {new: true});

        res.json(destino);

    } catch (error) {
        console.log(error);
        res.send("OOPS! Hubo un error...")
    }
}