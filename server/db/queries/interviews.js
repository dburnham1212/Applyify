const db = require('../../configs/db.config');

const getInterviewByApplicationId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM interviews WHERE application_id = $1 ORDER BY interview_date DESC', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};


module.exports = { getInterviewByApplicationId};