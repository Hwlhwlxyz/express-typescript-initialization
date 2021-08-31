import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log("visit /")
    res.send('Well done!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
