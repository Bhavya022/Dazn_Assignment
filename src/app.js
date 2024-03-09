"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Routes
app.use('/api', movieRoutes_1.default);
const PORT = process.env.PORT || 3000;
// Connect to MongoDB and start server
mongoose_1.default.connect('mongodb://localhost:27017/moviedb')
    .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((error) => console.log(error.message));
