import { TrafficLight } from "./TrafficeLight";
import { ITrafficLightState } from "./IState";
import { GreenLight } from "./GreenLight";

export class RedLigth implements ITrafficLightState{
    changeLight(trafficLight: TrafficLight): void {
        console.log("Red Light: Stop");
        trafficLight.setState(new GreenLight())
    }
}