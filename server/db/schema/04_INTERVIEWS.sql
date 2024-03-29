DROP TABLE IF EXISTS interviews CASCADE;

-- CREATE USERS
CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  application_id INTEGER NOT NULL REFERENCES applications(id) ON DELETE CASCADE NOT NULL,
  interview_date TIMESTAMP DEFAULT NOW(),
  interviewer VARCHAR(50) NOT NULL,
  thank_you_note_sent BOOLEAN DEFAULT FALSE,
  date_sent TIMESTAMP DEFAULT NOW()
);