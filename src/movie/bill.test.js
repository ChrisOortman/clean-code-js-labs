const Bill = require('./Bill');

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(29, false);

    describe('when general admission for 1 ticket', () => {

        let price = bill.finishPurchase();


        test('Then total price is $11', () => {
            expect(price).toBe(11);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(29, false);
    bill.addTicket(29, false);

    describe('when general admission for 2 ticket', () => {

        let price = bill.finishPurchase();

        test('Then total price is $22', () => {
            expect(price).toBe(22);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(29, true);

    describe('when student admission for 1 ticket', () => {

        let price = bill.finishPurchase();

        test('Then total price is $8', () => {
            expect(price).toBe(8);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(29, false);
    bill.addTicket(29, true);

    describe('when student admission for 1 ticket and general admission for 1 ticket', () => {

        let price = bill.finishPurchase();

        test('Then total price is $19', () => {
            expect(price).toBe(19);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(70, false);

    describe('when senior orders 1 ticket', () => {

        let price = bill.finishPurchase();

        test('Then total price is $6', () => {
            expect(price).toBe(6);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(11, false);

    describe('when child orders 1 ticket', () => {

        let price = bill.finishPurchase();

        test('Then total price is $5.50', () => {
            expect(price).toBe(5.50);
        });
    });
});

describe('Given a bill', () => {
    let bill = new Bill();

    bill.startPurchase(70, 0, false, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);
    bill.addTicket(11, false);

    describe('when 20 persons orders a ticket in group', () => {

        let price = bill.finishPurchase();

        test('Then total price is $120', () => {
            expect(price).toBe(120);
        });
    });
});
