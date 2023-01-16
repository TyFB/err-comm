const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Jinkies, Fred you took a wrong turn!</h1>")
});

module.exports = router;