const GetKeywords = async (req, res) => {
  try {
    const keywords=['web','özel ders','yazılım','bilişim','mobil','eğitim','matematik'
,'fizik','edebiyat','öğrenim','tez','ödev','grafik tasarım']

    res.status(200).json(keywords);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
};

module.exports = {
    GetKeywords
};
