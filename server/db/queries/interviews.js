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

const deleteInterview = async (id) => {
  try {
    const data = await db.query(
      'DELETE FROM interviews WHERE id = $1 RETURNING *', 
    [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

const updateInterview = async (id, interview) => {
  const { interviewDate, interviewer, thankYouSent, dateSent } = interview;
  try {
    const data = await db.query(
      'UPDATE interviews SET interview_date = $2, interviewer = $3, thank_you_note_sent = $4, date_sent = $5 WHERE id = $1 RETURNING *', 
    [id, interviewDate, interviewer, thankYouSent, dateSent]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}


module.exports = { getInterviewByApplicationId, createInterview, deleteInterview, updateInterview };