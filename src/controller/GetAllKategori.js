const { pool } = require('../../database/db');



const GetAllKategori = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM kategori');
    console.log(response.rows)
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
};

module.exports = {
  GetAllKategori
};
