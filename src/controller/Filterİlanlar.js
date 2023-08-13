const { pool } = require('../../database/db');
const bodyParser = require('body-parser');

const Filterİlanlar = async (req, res) => {


  const requestData = req.body; // JSON verisi burada

  // Veriyi işleme veya cevap döndürme işlemleri burada yapılır
  console.log(requestData)


  console.log("keys:", key, "values:", values);


  //UĞURCAN'IN YAPTIĞI GET METOD
  try {
    var key = Object.keys(requestData);
    var values = Object.values(requestData);

    let limit = 10;
    if (requestData.limit) {
      const parsedLimit = parseInt(requestData.limit);
      if (!isNaN(parsedLimit)) {
        limit = parsedLimit;
      }
    }
    // Oluşturulan filtre ifadesini saklamak için boş bir dizi tanımlayın
    const filters = [];

    // Filtre ifadesini oluşturun ve filters dizisine ekleyin
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== 'limit' && values[i] !== null && key[i] !== 'keyword') { // limit parametresini filters dizisine ekleme
        filters.push(`${key[i]} = '${values[i]}'`);
      }
    }

    // SQL sorgusunu oluştururken filters dizisini kullanın
    var sqlQuery = `SELECT * FROM ilanlar WHERE ${filters.length > 0 ? filters.join(' AND ') : ''}`;
    if (requestData.keyword !== null) {
      if(filters.length>0){
        sqlQuery+=" OR "
      }
      sqlQuery+=`keyword::jsonb @> '["${requestData.keyword[0]}"]'::jsonb`;
      for(let i =1;i<requestData.keyword.length;i++){
        sqlQuery+=` OR keyword::jsonb @> '["${requestData.keyword[i]}"]'::jsonb`
      }
    }
    console.log(sqlQuery);

    const response = await pool.query(sqlQuery);
    res.status(200).json(response.rows);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Sorgu Hatası' });
  }
};

module.exports = {
  Filterİlanlar,
};


