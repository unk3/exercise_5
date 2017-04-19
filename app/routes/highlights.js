var express = require('express');
var router = express.Router();

router.get('/highlights', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageHighlights = data.data.highlights;

  data.data.highlights.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('highlights', {
    pageTitle: 'Highlights',
    artwork: pagePhotos,
    highlights: pageHighlights,
    pageID: 'highlightsList'
  });
});

router.get('/highlights/:highlightid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageHighlights = [];

  data.data.highlights.forEach(function(item) {
    if (item.id == req.params.highlightid) {
      pageHighlights.push(item);
      pagePhotos = pagePhotos.concat(item.image);
    }
  });

  res.render('highlights', {
    pageTitle: 'Highlight Info',
    artwork: pagePhotos,
    highlights: pageHighlights,
    pageID: 'highlightDetail'
  });
});

module.exports = router;
