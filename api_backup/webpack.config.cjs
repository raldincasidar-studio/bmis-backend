const path = require('path');

module.exports = {
  entry: './index.js', // Path to your main file
  output: {
    filename: 'index.js', // Desired output filename
    path: path.resolve(__dirname, '../api'), // Output directory
  },
  target: 'node', // Ensure compatibility with Node.js
  mode: 'production', // Set the mode to production for optimization
};