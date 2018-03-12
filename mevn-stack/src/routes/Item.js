const express = require('express');
const itemRoutes = require("express").Router();
var Item = require("../models/Item");


// Defined get data(index or listing) route
itemRoutes.route('/').get(function(req, res) {
    Item.find(function(err, items) {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

//insertar datos
itemRoutes.post('/', (req, res) => {
    const item = new Item(req.body);
    item.save()
        .then(item => {
            res.status(200).json({ item: 'Item agregado' });
        })
        .catch(err => {
            res.status(400).send({ item: 'Error al agregar' });
        })
});

//actualizar data /item/kjjskajskd21321312 - PUT
itemRoutes.put("/:id", (req, res, next) => {
    Item.findById(req.params.id, function(err, item) {
        if (!item) {
            return next(new Error("no se pudo cargar documento"));
        } else {
            item.name = req.body.name;
            item.price = req.body.price;
            item
                .save()
                .then(item => {
                    res.json("Actualizacion Completado");
                })
                .catch(err => {
                    res.status(400).send("no se pudo actualizar");
                });
        }
    });
});

// Defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get(function(req, res) {
    Item.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = itemRoutes;