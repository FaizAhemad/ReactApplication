const express = require('express');

const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../dbConfig');

sql
  .connect(dbConfig)
  .then(a => console.log(`Connected to ${a.config.database}`))
  .catch(e => {
    console.log(`An error occured in admin.js file: ${e}`);
    sql.close();
  });

router.get('/fetchcategories', async (req, res) => {
  try {
    const fetchAllCategoryQuery = await sql.query(
      'select * from tblcategories',
    );
    const categories = fetchAllCategoryQuery.recordset;
    const fetchAllSubcategoriesQuery = await sql.query(
      'select * from sub_categories JOIN tblcategories ON sub_categories.category = tblcategories.id',
    );
    const subcategories = fetchAllSubcategoriesQuery.recordset;
    const data = categories.map(category => {
      category.subcategories = [];
      subcategories.map(subcategory => {
        if (category.cat_name === subcategory.cat_name) {
          category.subcategories = [
            ...category.subcategories,
            subcategory.sub_categoryname,
          ];
        }
      });
      return category;
    });
    return res.status(200).json(data);
  } catch {
    return res.status(200).json({message: 'fetching categories failed.'});
  }
});

module.exports = router;
