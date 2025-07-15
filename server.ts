
import express from 'express';
import ShoppingList from './src/models/shoppingList';
import dotenv from 'dotenv';
import syncDatabase from './src/config/services/sql/sql-init';
import { fetchCategories } from './src/config/services/sql/sql-connection';
import cors from 'cors';
const app = express();


const port: number = Number(process.env.PORT) || 6868;
const host: string = process.env.HOST || 'localhost';

app.use(express.json());
app.use(cors());
dotenv.config();
  
app.post('/shopping-list', async (req, res) => {
    try {
        const { item, quantity } = req.body;
        const newItem = await ShoppingList.create({ item, quantity });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: 'Error creating item' });
    }
});

app.get('/shopping-list', async (req, res) => {
    try {
        const items = await ShoppingList.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items' });
    }
});

app.get('/categories', async(req, res) => {
    const categories = await fetchCategories();
    res.status(200).json(categories);
});


(async () => {
    try {
        await syncDatabase();

        app.listen(port, () => {
            console.log(`Server running at http://${host}:${port}/`);
        });
    } catch (error) {
        console.error('Error in connecting to SQL or building database tables:', error);
    }
})();

