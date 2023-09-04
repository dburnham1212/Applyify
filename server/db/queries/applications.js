const db = require('../../configs/db.config');

const getApplicationsByUserId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM applications WHERE user_id = $1', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};

const getApplicationById = async (id) => {
  try {
    const data = await db.query('SELECT * FROM applications WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};


module.exports = { getApplicationsByUserId, getApplicationById };