const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/thirdparty', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
