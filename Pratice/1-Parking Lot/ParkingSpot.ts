import { Vehicle } from "./Vehicle";
import { VechileType } from "./Vehicle";
import { SpotProximity } from "./SpotProximity";

export class ParkingSpot{
    id:number
    size:VechileType
    proximity:SpotProximity
    isAvailable:boolean
    vehicle:Vehicle | null

    constructor(id:number, size: VechileType, proximity:SpotProximity){
        this.id = id
        this.size = size
        this.proximity = proximity
        this.isAvailable = true
        this.vehicle = null
    }

    park(vechile:Vehicle):boolean{
        if(this.isAvailable && this.size === vehicle.type){
            this.vehicle = vechile
            this.isAvailable = false
            return true
        }
        return false
    }

    unpark():void{
        this.vehicle = null;
        this.isAvailable = true
    }

    // getPaymentRate(st)
}