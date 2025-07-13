const apiService = require('../services/apiService');

exports.fetchData = async (req, res, next) => {
  try {
    const data = await apiService.getData();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
