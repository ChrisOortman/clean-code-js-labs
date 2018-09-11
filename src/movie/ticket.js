const generalTicket = 11;
const studentTicket = 8;
const seniorTicket = 6;
const childTicket = 5.50;
const groupTicket = 6;

module.exports = class Ticket {
    constructor(age, student) {
        this.age = age;
        this.student = student;
    }

    calculatePrice() {
        if (this.student) {
            return studentTicket;
        } else {
            if (this.age >= 65) {
                return seniorTicket;
            } else if (this.age <= 13) {
                return childTicket;
            } else {
                return generalTicket;
            }
        }
    }

    calculatePriceForGroup() {
        return groupTicket;
    }
};
