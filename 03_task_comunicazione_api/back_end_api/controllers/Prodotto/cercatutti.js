const Prodotto = require("../../models/Prodotto")

module.exports = async (req, res) => {
    try {
        let risultato = await Prodotto.find({})

        res.json({
            status: 'success',
            data: risultato
        })
    } catch (error) {
        res.json({
            status: 'error',
            data: error
        })
    }
}