const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: { 
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'] 
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// find a single tag by its `id`
  
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { 
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: {
      model: Product,
    attributes: ['product_name', 'price', 'stock', 'category_id']
  }
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
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tags => res.json(tags))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


 // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
 Tag.update(req.body, {  
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
    if(!tags) {
      res.status(404).json({ message: 'Tag ID not found' });
      return;
    }
    res.json(tags);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
