const mongoose = require('mongoose');
const config = require('config');

module.exports = class MongoDB {

    async Connect() {
        try {
            await mongoose.connect(config.get("database.mongoURI"), {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then( (err) => {
                console.log("[SERVER] DataBase connected")
            });
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }

    async Disconnect() {
        try {
            await mongoose.disconnect();
            console.log("[SERVER] DataBase disconnected");
        } catch (err) {
            console.error(err);
            process.exit(2);
        }
    }

}