const db = require('../../configs/db.config');

const getApplicationsByUserId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM applications WHERE user_id = $1 ORDER BY date_job_found DESC', [id]);
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

const deleteApplicationById = async (id) => {
  try {
    const data = await db.query('DELETE FROM applications WHERE id = $1 RETURNING *', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

const updateApplicationById = async (application, id) => {
  const {company, position, link} = application;
  try {
    const data = await db.query(
      'UPDATE applications SET company = $1, position = $2, link = $3 WHERE id = $4 RETURNING *', 
    [company, position, link, id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

const createApplication = async (application, id) => {
  const {company, position, link, dateFound, dateApplied, researchDone, linkedInConn} = application;
  try {
    const data = await db.query(
      'INSERT INTO applications (user_id, company, position, link, date_job_found, date_applied, research_done, linked_in_connection) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
    [id, company, position, link, dateFound, dateApplied, researchDone, linkedInConn]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getApplicationsByUserId, getApplicationById, deleteApplicationById, updateApplicationById, createApplication };