const exports = require('express');
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// be sure to include its associated Product data
router.get('/', (req, res) => {
  res.send("Hello world");
  Tag.findAll().then((tags) => res.json(tags));
  console.log(tags);
  const tags = tags
  
});


// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { 
      id: req.params.id,
    },
  })
  .then((tags) => {
    if (!tags) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tags);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tags) => res.json(tags))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


 // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
 Tag.update({ 
   tag_name: req.body.tag_name
 },
 {
   where: {
     id: req.params.id
   }
 }).then(tags => {
  if (!tags) {
    res.status(404).json({ message: 'Tag not found' });
    return;
  }
  res.json(tags);
 })
 .catch((err) => {
   console.log(err);
   res.status(500).json(err);
 })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tags => {
    res.json(tags);
  });
});

module.exports = router;
