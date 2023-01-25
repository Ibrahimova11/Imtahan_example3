const mongoose = require("mongoose");
const express = require("express");
const Joi = require ("joi");
const cors = require('cors');
const app = express()
const bodyParser = require("body-parser");
const PORT = 8080;
app.use(bodyParser());
app.use(cors())


const ProductSchema = new mongoose.Schema({
    name1: String,
    description: String,
    auther:String,
    price:Number,
    
  });
  
  const ProductModel = mongoose.model("Product", ProductSchema);
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      `mongodb+srv://Susen:77ccuZiYoAc54UIO@cluster.91dhbal.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));
  
  const addProductSchema = Joi.object({
    name1: Joi.string().required(),
    description: Joi.string().required(),
    auther: Joi.string().required(),
    price: Joi.number().required(),
  });
  
  app.get("/api/products", (req, res) => {
    ProductModel.find(null, "name description auther price ", (error, products) => {
      if (error) return res.status(500).send({ error });
      res.send(products);
    });
  });
  
  app.post(
    "/api/products",
    (req, res, next) => {
      const { error } = addProductSchema.validate(req.body);
  
      if (error == null) next();
      else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.status(422).json({ error: message });
      }
    },
  
    (req, res) => {
        console.log(req.body)
      let newProduct = new ProductModel({ ...req.body });
  
      newProduct.save();
      res
        .status(201)
        .send({ message: "Product succesfully added!", product: newProduct });
    }
  );
  
  app.delete("/api/products/:id", (req, res) => {
    if (req.params.id)
      ProductModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });

  app.listen(PORT, () => {
    console.log("Server running on " + PORT);
  });
  





//77ccuZiYoAc54UIO
// mongodb+srv://Susen:77ccuZiYoAc54UIO@cluster.91dhbal.mongodb.net/?retryWrites=true&w=majority