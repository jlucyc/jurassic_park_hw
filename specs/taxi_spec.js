const assert = require('assert');
const Taxi = require ('../taxi.js');

describe('Taxi', function(){
    beforeEach(function(){
        taxi = new Taxi('Toyota', 'Prius', 'Jen'); 
                            //Arrange
    });

    it('should have a manufacturer', function(){
        const actual = taxi.manufacturer;         //Act
        assert.strictEqual(actual, 'Toyota');     //Assert
    });

    it('should have a model', function(){
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

    it('should have driver', function(){
        const actual = taxi.driver;
        assert.strictEqual(actual, 'Jen')
})
    describe('passengers', function(){ 
        
        it('should start with no passengers', function(){
            const actual = taxi.passengers
            assert.deepStrictEqual(actual, []);
        });

        

        it('should be able to return the number of passengers', function() {
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        });

        it('should be able to add passengers', function() {
                taxi.addPassenger('Randolph');
                const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1)
        })

        it('should remove passenger by name', function(){
            taxi.addPassenger('Randolph');
            taxi.addPassenger('Ali');
            taxi.removePassengerByName('Ali');
            const expected = ['Randolph']
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected)
        })

        it('should be able to remove all passengers', function(){
            taxi.addPassenger('Randolph');
            taxi.addPassenger('Ali');
            taxi.removeAllPassengers();
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        })
    });



    });
