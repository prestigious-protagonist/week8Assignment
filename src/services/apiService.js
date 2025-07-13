const axios = require('axios');

exports.getData = async () => {
  const response = await axios.get('https://api.publicapis.org/entries');
  return response.data;
};
