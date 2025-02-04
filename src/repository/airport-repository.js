const CrudRespository = require('./crud-repository');
const { Airport } = require('../models/index');
class AirportRepository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}
module.exports = AirportRepository;