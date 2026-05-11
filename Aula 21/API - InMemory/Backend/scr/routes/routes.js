import express from 'express';
import cors from 'cors';
import order from "./orders.js";

export default function(app) {
    app
    .use(cors())
    .use(express.json())
    .use('/order', order)

};
