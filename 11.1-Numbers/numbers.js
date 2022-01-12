const express = require("express");
const { userInfo } = require("os");
const app = express();
app.use(express.json())
const nums = [1, 2, 3, 4, 5, 6];



app.get('/', (req, res) => {
    res.json({nums})
})

app.post('/numbers', (req, res) => {
    const id = parseInt(req.body.number);
    const match = nums.findIndex((n) => n === id)
    if(match === id){
        res.status(400).send('Number already exist')     
    }

    else{
        nums.push(req.body.number)
        res.send(`${req.body.number}`)
    }
    
})

app.delete('/numbers/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const place = nums.findIndex((n) => n === id)
   if(place === -1){
    res.status(400).send('Please enter a valid number')
   } 
   else{
    nums = nums.filter((n) => n !== id)
    res.send(nums)
   }

  })

  app.put('/numbers', (req, res) => {
    const number = parseInt(req.body.put)
    const place = nums.findIndex((n) => n === id);
    if (place === -1){
        res.status(400).send("Can't find numbers")
    }
    else {
        nums[place] = number
        res.send(nums)
    }
  })




app.listen(3000)