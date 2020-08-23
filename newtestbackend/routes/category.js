const express = require('express')

const router = express.Router();

const {createCategory,getAllCategory,getCategory,getCategoryById,updateCategory} = require("../controllers/category");


router.post("/category/create/",createCategory);
router.get("/categories", getAllCategory);

router.param("categoryId", getCategoryById);
router.get("/category/:categoryId", getCategory);

router.put(  "/category/:categoryId",updateCategory);




module.exports = router;

// code:
// const express = require('express')

// const router = express.Router();

// const {getCategoryById,
//   createCategory,
//   getCategory,
//   getAllCategory,
//   updateCategory,
//   removeCategory} = require("../controller/category");

// router.param("categoryId", getCategoryById);

// router.post(
//   "/category/create/",
  
//   createCategory
// );

// router.get("/category/:categoryId", getCategory);
// router.get("/categories", getAllCategory);

// //update
// router.put(
//   "/category/:categoryId",
 
//   updateCategory
// );

// //delete

// router.delete(
//   "/category/:categoryId",

//   removeCategory
// );


// module.exports = router;

 
 
