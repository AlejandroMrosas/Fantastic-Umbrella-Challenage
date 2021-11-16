// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'user_id'
});
// Categories have many Products
Category.haveMany(Product, {
  foreignKey: 'user_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'user_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.BelongToMany(Product {
  through: ProductTag,
  foreignKey: 'user_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
