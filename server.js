const express = require('express')

const app = express();

const port = 3000; // porta server

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/json', (req, res) => {
    const posts = [
        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },
    ];

    app.listen(port, () => {
        console.log(`Server avviato su http://localhost:${port}`);
    });