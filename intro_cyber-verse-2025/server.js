const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Counter for tracking clicks
let clickCounter = 0;
const MAX_CLICKS = 10;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Client-side trigger endpoint
app.post('/trigger-event', (req, res) => {
    if (clickCounter < MAX_CLICKS) {
        clickCounter++;
        
        // Broadcast the event to all connected clients
        io.emit('gate-update', {
            currentClicks: clickCounter,
            maxClicks: MAX_CLICKS,
            gateStatus: clickCounter === MAX_CLICKS ? 'fully-open' : 'opening',
            logoReveal: Math.floor((clickCounter / MAX_CLICKS) * 100)
        });
        
        res.json({
            currentClicks: clickCounter,
            maxClicks: MAX_CLICKS,
            success: true
        });
    } else {
        res.json({
            currentClicks: clickCounter,
            maxClicks: MAX_CLICKS,
            success: false,
            message: 'Maximum clicks reached'
        });
    }
});

// Reset endpoint (for admin use)
app.post('/reset-event', (req, res) => {
    clickCounter = 0;
    io.emit('event-reset');
    res.json({ success: true, message: 'Event reset successfully' });
});

// Socket.io connection handler
io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Send the current state to newly connected clients
    socket.emit('init-state', {
        currentClicks: clickCounter,
        maxClicks: MAX_CLICKS,
        gateStatus: clickCounter === MAX_CLICKS ? 'fully-open' : 'opening',
        logoReveal: Math.floor((clickCounter / MAX_CLICKS) * 100)
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});