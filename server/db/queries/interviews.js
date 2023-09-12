const db = require('../../configs/db.config');

const getInterviewByApplicationId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM interviews WHERE application_id = $1 ORDER BY interview_date DESC', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};

const createInterview = async (id, interview) => {
  console.log(interview);
  const { interviewDate, interviewer } = interview;
  try {
    const data = await db.query(
      'INSERT INTO interviews (application_id, interview_date, interviewer) VALUES ($1, $2, $3) RETURNING *', 
    [id, interviewDate, interviewer]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}


module.exports = { getInterviewByApplicationId, createInterview };