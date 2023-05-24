import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import e from 'express';

const app = express();
app.use(cors())


const emr = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ['emr']
})

const etl = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ['etl']

});

const dwh = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ['dwh']
});

// connectio to emr database

emr.getConnection((err, connection) => {
    if (err) {
        console.error('error connecting to emr database')
    } else {
        console.log('connected to emr database')
    }
});

// connection to etl database
etl.getConnection((err) => {
    if (err) {
        console.error('error connecting to etl database')
        console.error('error connecting to etl database')
    } else {
        console.log('connected to etl database')
    }
})

// connection to dwh database
dwh.getConnection((err) => {
    if (err) {
        console.error('error connecting to dwh database')
    } else {
        console.log('connected to dwh database')
    }
})

etl.query('CALL Populate_etl_tables()', (error, results) => {
    if (error) {
        console.error(error)
    } else {
        console.log('etl tables populated')
    }
})

dwh.query('CALL Populate_dwh_tables()', (error, results) => {
    if (error) {
        console.error(error)
    } else {
        console.log('dwh tables populated')
    }
})




app.get('/source-data/patients', (req, res) => {
    emr.query('SELECT * FROM patients',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})


app.get('/source-data/visits', (req, res) => {
    emr.query('SELECT * FROM visits',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})



app.get('/destination-data/patients', (req, res) => {
    etl.query('SELECT * FROM etl_patients',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})

app.get('/destination-data/visits', (req, res) => {
    etl.query('SELECT * FROM etl_visits',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})


app.get('/dwh-data/visits', (req, res) => {
    dwh.query('SELECT * FROM dwh_visits',(error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('error retrieving results')
        } else {
            res.json(results)
        }
    })
})

app.get('/dwh-data/patients', (req, res) => {
    dwh.query('SELECT * FROM dwh_patients',(error, results) => {
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