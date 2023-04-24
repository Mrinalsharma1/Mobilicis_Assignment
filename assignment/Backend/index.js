const express = require('express')
const app = express()
require('dotenv').config();
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017/tax-invoice';
const client = new MongoClient(url);

app.post('/getdetails', async (req, res) => {
    try {

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db('Mobilic');
        const collection = db.collection('sampleData');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.send(findResult)
    } catch (e) {
        console.log('error', e)
        res.status(500).send({ status: false, error: e })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`running app on ${process.env.PORT}`)
})
