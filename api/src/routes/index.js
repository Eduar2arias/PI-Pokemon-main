const { Router } = require('express');
const express = require('express')
const {pokemonRoute} = require('./pokemon.js')
const typeRoute = require('./type.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', (req ,res)=>{
    res.send('entramos')
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons',pokemonRoute)
router.use('/types',typeRoute)

module.exports = router;
