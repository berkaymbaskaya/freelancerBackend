const { pool } = require('../../database/db');



const AllUsers = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM kullanicilar');
    console.log(response.rows)
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
};

module.exports = {
  AllUsers,
};
