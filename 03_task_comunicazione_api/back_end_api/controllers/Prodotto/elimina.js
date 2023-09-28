const Prodotto = require("../../models/Prodotto");

module.exports = async (req, res) => {
    try {
        let risultato = await Prodotto.findByIdAndDelete(req.params.id);

        if(risultato)
            res.json({
                status: 'success',
                data: ""
            })
        else{
            res.json({
                status: 'error',
                data: 'oggeto non trovato'
            })
        }
    } catch (error) {
        res.json({
            status: 'error',
            data: error
        })
    }
}