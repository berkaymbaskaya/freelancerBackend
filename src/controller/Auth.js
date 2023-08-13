const { pool } = require('../../database/db');

const Auth = async (req, res) => {
  try {
    var key = Object.keys(req.query);
    var values = Object.values(req.query);
    var telno= values[0].toString();
    var sifre= values[1].toString();
    console.log(`SELECT * FROM kullanicilar where telno='${telno}' and sifre='${sifre}'`)
    const response = await pool.query(`SELECT * FROM kullanicilar where telno='${telno}' and sifre='${sifre}'`);
    
    if (response.rows.length > 0){
      res.status(200).json([true,response.rows]);
    }
    else {
      res.status(200).json([false,"Telefon Numarası ya da Şifre Hatalı"]);
    }    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
    Auth,
};

