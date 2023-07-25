const db = require('../models');


module.exports.getUserTransactions = async (req, res, next) => {
    try {
        const {tokenData: {userId}} = req;
        const foundTransaction = await db.Transaction.findAll({
            where: {
                userId
            }
        });
        res.send({data: foundTransaction});
    } catch(error) {
        next(error);
    }
}