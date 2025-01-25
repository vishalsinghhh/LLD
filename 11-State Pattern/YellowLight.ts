import { ITrafficLightState } from "./IState";
import { RedLigth } from "./RedLight";
import { TrafficLight } from "./TrafficeLight";

export class YellowLight implements ITrafficLightState{
    changeLight(trafficLight: TrafficLight): void {
        console.log("Yellow Light: WAITTTT!!!!");
        trafficLight.setState(new RedLigth)
    }
}