const { pool } = require('../../database/db');



const Allilanlar = async (req, res) => {
  try {
    var limit;
    console.log
    console.log("length",Object.keys(req.query).length)
    if (Object.keys(req.query).length>0) {
      var values = Object.values(req.query);
      console.log(values)
      limit = values[0] //limit parametresi geçildiyse
    }
    else {
      limit = 10; //default limit değeri
    }

    const response = await pool.query(`SELECT * FROM ilanlar LIMIT ${limit}`);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
};

module.exports = {
  Allilanlar
};
