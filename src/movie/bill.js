const Ticket = require('./Ticket');

allTickets = [];

module.exports = class Bill {

    /**
     * (1) New customers arrive at your ticket booth and tell you what movie they'd like to see (so keep it in mind!)
     *
     * @param runtime   movie's runtime in minutes
     * @param dayOfWeek day of the week
     * @param loge      true if seating category is 'loge')
     * @param threeD    true if the movie's shown in 3D
     */
    startPurchase(runtime, dayOfWeek, loge, threeD) {
        allTickets = [];
    }

    /**
     * (2) Add a ticket to the customers' bill
     *
     * @param age     the age of the ticket buyer in years
     * @param student true if the ticket buyer is a student
     */
    addTicket(age, student) {
        let newTicket = new Ticket(age, student);
        allTickets.push(newTicket);
    }

    /**
     * (3) Calculate the total admission for the current customer(s)
     *
     * @return total in dollars.
     */
    finishPurchase() {
        if (allTickets.length >= 20) {
            return allTickets
                .map(ticket => {return ticket.calculatePriceForGroup()})
                .reduce((a, b) => a + b, 0);
        } else {
            return allTickets
                .map(ticket => {return ticket.calculatePrice()})
                .reduce((a, b) => a + b, 0);
        }
    }
};
