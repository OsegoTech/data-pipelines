import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors())


const pools = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ['emr']
})

const pool2 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ['etl']

});




app.get('/source-data/patients', (req, res) => {
    pools.query('SELECT * FROM patients',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})


app.get('/source-data/visits', (req, res) => {
    pools.query('SELECT * FROM visits',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})


app.get('/destination-data/patients', (req, res) => {
    pool2.query('SELECT * FROM etl_patients',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})

app.get('/destination-data/visits', (req, res) => {
    pool2.query('SELECT * FROM etl_visits',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})



app.get('/', (req, res) => {
    return res.json('Hello World!');
})



// app.use(cors());

app.listen(3000, () => {
    console.log('Server started on port 3000');
})