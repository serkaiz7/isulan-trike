const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This serves the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    =============================================
    ISULAN TRIKE SERVER ACTIVE
    =============================================
    Running at: http://localhost:${PORT}
    On Network: Check your Phone IP (ifconfig)
    =============================================
    `);
});
