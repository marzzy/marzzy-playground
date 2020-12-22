/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.carCapasity = [null, big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return this.carCapasity[carType]-- > 0;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */


let parkingSystem = new ParkingSystem(1, 1, 0);

console.log('true because there is 1 available slot for a big car: ', parkingSystem.addCar(1));
console.log('true because there is 1 available slot for a medium car: ', parkingSystem.addCar(2));
console.log('false because there is no available slot for a small car: ', parkingSystem.addCar(3));
console.log('false because there is no available slot for a big car: ', parkingSystem.addCar(1));