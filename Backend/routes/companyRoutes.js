const express = require('express');
const axios = require('axios');
const app = express();

const { v4: uuidv4 } = require('uuid');

const productsMap = {}; // Map to store products with their IDs

// GET /categories/categoryname/products ROUTE
app.get('/categories/:category/products', async (req, res) => {
    const category = req.params.category;
    const searchQuery = req.query.search || ''; // Default to empty string
    const n = parseInt(req.query.n) || 10; // default to 10 products
    const page = parseInt(req.query.page) || 1; // default to page 1
    const sort = req.query.sort || 'default'; // default sorting

    try {
        let allProducts = [];

        // Fetching products from each company
        for (const company of companies) {
            const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products`, {
                params: {
                    n,
                    page,
                    search: searchQuery // Pass search query parameter to each company API call
                }
            });

            // Extract and format products data
            const formattedProducts = response.data.map(product => {
                const productId = generateUUID(); // Genarating  unique ID for each product
                productsMap[productId] = { // Saving product with its ID
                    id: productId,
                    company,
                    name: product.name,
                    price: product.price,
                    rating: product.rating,
                    discount: product.discount, 
                    availability: product.availability, // add details mentioned in question added
                 
                };
                return productId; // Returning product ID
            });

            allProducts = allProducts.concat(formattedProducts);
        }

        // Sorting based on the provided filter
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
//we can locally return the data, no need to call the TEST API for the data, as we stored it
app.get('/categories/:category/products/:productid', (req, res) => {
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
