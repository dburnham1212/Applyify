const db = require('../../configs/db.config');

const getUserById = async (id) => {
  try {
    const data = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserById };