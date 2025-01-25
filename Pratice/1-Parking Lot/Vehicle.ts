export enum VechileType{
    TwoWheller = "Two-wheeler",
    ThreeWheller = "Three-Wheeler",
    Car = "Car"
}

export class Vehicle{
    type:VechileType;
    plateNumber: string;
    entryTime:Date;
    
    constructor(type:VechileType, plateNumber:string){
        this.type = type;
        this.plateNumber = plateNumber
        this.entryTime = new Date()
    }

    getParkingDuration():number{
        return Math.floor((new Date().getTime()-this.entryTime.getTime())/60000)
    }

}