import { ITrafficLightState } from "./IState";
import { TrafficLight } from "./TrafficeLight";
import { YellowLight } from "./YellowLight";

export class GreenLight implements ITrafficLightState{
    changeLight(trafficLight: TrafficLight): void {
        console.log("Green Light: GO GO GO!!!");
        trafficLight.setState(new YellowLight())
    }
}