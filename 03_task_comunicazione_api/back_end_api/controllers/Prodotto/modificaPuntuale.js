const Prodotto = require("../../models/Prodotto")

module.exports = async (req, res) => {
    try {

        let oggetto = await Prodotto.findById(req.params.id);

        /* 
        if(req.body.codice) 
            return req.body.codice
        else
            return oggetto.codice
        */

        let aggiornamento = await Prodotto.findByIdAndUpdate(req.params.id, {
            codice: req.body.codice ? req.body.codice : oggetto.codice,  
            nome: req.body.nome ? req.body.nome : oggetto.nome,  
            prezzo: req.body.prezzo ? req.body.prezzo : oggetto.prezzo,
            categoria: req.body.categoria ? req.body.categoria : oggetto.categoria,  
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