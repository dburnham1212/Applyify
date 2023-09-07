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
  const {company, position, link} = application;
  try {
    const data = await db.query(
      'INSERT INTO applications (user_id, company, position, link) VALUES ($1, $2, $3, $4) RETURNING *', 
    [id, company, position, link]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getApplicationsByUserId, getApplicationById, deleteApplicationById, updateApplicationById, createApplication };