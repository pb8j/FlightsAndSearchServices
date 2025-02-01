const {FlightRepository , AirplaneRepository} = require('../repository/index');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight (data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flighrepository.createFlight({...data, totalSeats:airplane.capacity
            });
            return airplane;
        } catch (error) {
            console.log("Something went wrong at the service layer")
            throw {error};
        }
    }

    async getFlightData() {

    }
}