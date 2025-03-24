import express from 'express';

const app = express();
const PORT = 5002;

app.get('/ping', (req, res) => {
    res.send('pong');
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });