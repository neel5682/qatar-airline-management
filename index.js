const express = require('express');
const connection = require('./db');
const app = express();
app.use(express.static('public'));


app.use(express.json()); // For parsing JSON requests

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Get all passengers
app.get('/passengers', (req, res) => {
    const sql = 'SELECT * FROM Passengers';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add a new passenger
app.post('/passengers', (req, res) => {
    const { first_name, last_name, email, phone_number, passport_no, date_of_birth } = req.body;
    const sql = 'INSERT INTO Passengers (first_name, last_name, email, phone_number, passport_no, date_of_birth) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [first_name, last_name, email, phone_number, passport_no, date_of_birth], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ id: results.insertId, ...req.body });
    });
});

