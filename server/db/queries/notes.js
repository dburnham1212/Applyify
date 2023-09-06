const db = require('../../configs/db.config');

const getNotesByApplicationId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM notes WHERE application_id = $1', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};

const createNote = async (id, body) => {
  try {
    const data = await db.query('INSERT INTO notes (application_id, body) VALUES ($1, $2) RETURNING *', [id, body]);
    return data.rows;
  } catch (error) {
    throw error;
  }
}


module.exports = { getNotesByApplicationId, createNote };