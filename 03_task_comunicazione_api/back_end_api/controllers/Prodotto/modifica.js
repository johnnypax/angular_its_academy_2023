const Prodotto = require("../../models/Prodotto")

module.exports = async (req, res) => {
    try {
        let risultato = await Prodotto.findByIdAndUpdate(req.params.id, {
            codice: req.body.codice,
            nome: req.body.nome,
            prezzo: req.body.prezzo,
            categoria: req.body.categoria,
        });

        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
}