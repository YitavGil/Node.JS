const mongoose = require("mongoose");
const express = require("express")
const Product = require("./Product");

const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb://localhost/testdb"
)

const productOne = new Product({
    name: "productOne",
    isActive: true,
    price: 100
})



const productTwo = new Product({
    name: "productTwo",
    isActive: false,
    price: 40
})

//! Saved products to the database
// productOne.save().then(() => console.log("Product added!"));
// productTwo.save().then(() => console.log("Product  two added!"));


//Get all products

app.get('/',  async (req, res) => {
    try{
       const all = await Product.find({})
       res.send(all)
    }
    catch(e){
        res.status(400).send({error: e.message})
    }
    
})

//Get specific product
app.get('/:id',async (req, res) => {
    const _id = req.params.id
    try{
        const product = await Product.findById(_id)

        if(!product) {
            return res.status(404).send()
        }
        res.send(product)
    }
    catch(e){
        res.status(400).send({error: e.message})
    }
    
})


//Get active products
app.get("/products/active", async (req, res) => {
    try{
        const activeProduct = await Product.find({isActive: true})
        if(!activeProduct){
            res.status(500).send("Product not active")
        }
        res.send(activeProduct)
        
    }
    catch(e){
        res.status(400).send({error: e.message})
    }
    
})

// Get products by range
app.get("/products/range", async (req, res) => {
    try{
        const priceRange = Product.find({ minNum :  { $gte :  50},
            maxNum : { $lte :  150}})
            res.send(priceRange)    
    }
    catch(e){
        res.status(400).send({error: e.message})
    }
    
})


// Update product to active
app.patch("/products/:id", async (req, res) => {
    try {
      const update = Object.keys(req.body).toString();
      const allowedUpdates = "isActive";
      if (update === allowedUpdates) {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        res.send(updated);
      } else res.send("you can only update isActive field");
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  //Delete single product 
  app.delete("/products/:id", async (req, res) => {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);
      res.send(deleted);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  //Delete all products
  app.delete("/products", async (req, res) => {
    try {
      const deleted = await Product.deleteMany({});
      res.send(deleted);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


