const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Static files (HTML, CSS, JS) ko serve karne ke liye config
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 1. MAIN HOME PAGE ROUTE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 2. MEDITATION PAGE ROUTE
app.get('/meditation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'meditation.html'));
});

// 3. YOGA PAGE ROUTE
app.get('/yoga', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'yoga.html'));
});

// Server listener port 3000 par
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 Server running smoothly on http://localhost:${PORT}`);
    console.log(`==================================================`);
});