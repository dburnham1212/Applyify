const db = require('../../configs/db.config');

const getNotesByApplicationId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM notes WHERE application_id = $1', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};


module.exports = { getNotesByApplicationId };