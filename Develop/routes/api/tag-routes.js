const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tags.findAll()
    .then(dbTagsData => res.json(dbTagsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tags.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagsData => {
      if (!dbTagsData) {
        res.status(404).json({ message: 'No tags found with this id' });
        return;
      }
      res.json(dbTagsData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
  // create a new tag
  Tags.create({
    
  })
    .then(dbTagsData => res.json(dbTagsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
