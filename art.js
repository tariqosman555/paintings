// art.js
const express = require('express');
const path = require('path');
const dataProvider = require('./dataprovider');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'static')));

// Route to get all paintings
app.get('/', (req, res) => {
  const allPaintings = dataProvider.getAllPaintings();
  res.json(allPaintings);
});

// Route to get a single painting by ID
app.get('/:id', (req, res) => {
  const id = req.params.id;
  const painting = dataProvider.getPaintingById(id);
  res.json(painting);
});

// Route to get all paintings for a specific gallery ID
app.get('/gallery/:id', (req, res) => {
  const galleryid = req.params.id;
  const gallerypaintings = dataProvider.getPaintingsByGalleryId(galleryid);
  res.json(gallerypaintings);
});

// Route to get all paintings for a specific artist ID
app.get('/artist/:id', (req, res) => {
  const id = req.params.id;
  const paintings = dataProvider.getPaintingsByArtistId(id);
  res.json(paintings);
});

// Route to get paintings by year range
app.get('/year/:min/:max', (req, res) => {
  const min = req.params.min;
  const max = req.params.max;
  const paintings = dataProvider.getPaintingsByYearRange(parseInt(min), parseInt(max));
  res.json(paintings);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
