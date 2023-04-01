const CustomerService = require("../services/customer-service");

module.exports = async (app) => {
    const service = new CustomerService();

    app.use("/app-events", async ( req, res, next ) => {

        const { payload } = req.body;

        service.SubscribeEvents(payload);

        console.log("[MS] - Shopping Service => Received event...");

        return res.status(200).json(payload);

    });
}