import { TrafficLight } from "./TrafficeLight";

export interface ITrafficLightState {
    changeLight(trafficLight: TrafficLight): void;
  }
  