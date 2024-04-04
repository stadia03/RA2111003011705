const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const productsMap = {}; // Map to store products with their IDs
const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
// const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

  
// GET /categories/categoryname/products ROUTE FOR SEARCHING FROM SPECIFIC CATEGORY
router.get('/:category/products', async (req, res) => {
    const category = req.params.category;
    const searchQuery = req.query.search || ''; // Default to empty string
    const n = parseInt(req.query.n) || 10; // default to 10 products
    const page = parseInt(req.query.page) || 1; // default to page 1
    const sort = req.query.sort || 'default'; // default sorting

    try {
        let allProducts = [];

        for (const company of companies) {
            const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products`, {
                params: {
                    n,
                    page,
                    search: searchQuery // Pass search query parameter to each company API call
                }
            });

            const formattedProducts = response.data.map(product => {
                const productId = generateUUID();
                productsMap[productId] = {
                    id: productId,
                    company,
                    name: product.name,
                    price: product.price,
                    rating: product.rating,
                    discount: product.discount,
                    availability: product.availability
                };
                return productId;
            });

            allProducts = allProducts.concat(formattedProducts);
        }

        switch (sort) {
            case 'price_asc':
                allProducts.sort((a, b) => productsMap[a].price - productsMap[b].price);
                break;
            case 'price_desc':
                allProducts.sort((a, b) => productsMap[b].price - productsMap[a].price);
                break;
            case 'rating_asc':
                allProducts.sort((a, b) => productsMap[a].rating - productsMap[b].rating);
                break;
            case 'rating_desc':
                allProducts.sort((a, b) => productsMap[b].rating - productsMap[a].rating);
                break;
            default:
                break;
        }

        res.json(allProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /categories/categoryname/products/:productid ROUTE
router.get('/:category/products/:productid', (req, res) => {
    const productId = req.params.productid;
    const product = productsMap[productId];

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

function generateUUID() {
    return uuidv4();
}

module.exports = router;
