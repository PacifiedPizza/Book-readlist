import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3124;

const conString = process.env.DATABASE_URL;

const { Pool } = pg;
const pool = new Pool({
    connectionString: conString,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let books = [];

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM books");
        const books = result.rows; 
        res.render("index.ejs", { books: books }); 
    } catch (error) {
        res.render("index.ejs");
    }
});

app.get("/docs", async (req, res) => {
    try {
        res.render("docs.ejs", { books: books });
    } catch (error) {
        res.render("docs.ejs");
    }
});
app.get("/add", (req, res) => {
    res.render("add.ejs");
}); app.post("/add", async (req, res) => {
    const title = req.body.title;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const rating = req.body.rating;

    try {
        const result = await pool.query("INSERT INTO books(title, isbn, description, rating) VALUES($1, $2, $3, $4)", [title, isbn, description, rating]);
        res.redirect("/add");
    } catch (error) {
        console.error("Error inserting into database:", error);
        res.render("index.ejs");
    }
});


app.post("/delete/:id", async (req, res) => {
    const specificID = parseInt(req.params.id);

    try {
        const result = await pool.query("DELETE FROM books WHERE id = $1", [specificID]);

        if (result.rowCount > 0) {
            res.status(200).redirect("/");
        } else {
            res.status(404).send(`Book with ID: ${specificID} not found.`);
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/edit", async (req, res) => {
    try {
        res.redirect("/");
    } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
