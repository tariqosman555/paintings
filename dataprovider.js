// dataProvider.js
const paintings = require('./paintings.json');
module.exports = {
  getAllPaintings: () => paintings,
  getPaintingById: (id) => paintings.find(painting => painting.paintingID == id),
  getPaintingsByGalleryId: (galleryId) => paintings.filter(painting => painting.gallery.galleryID == galleryId),
  getPaintingsByArtistId: (artistId) => paintings.filter(painting => painting.artist.artistID == artistId),
  getPaintingsByYearRange: (minYear, maxYear) => paintings.filter(painting => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear),
};
