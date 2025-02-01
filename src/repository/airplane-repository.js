const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane (id) {
        try {
            const airplane = await Airplane.findBypk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wwrong at the repo layer");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;