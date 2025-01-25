import { ITrafficLightState } from "./IState";

export class TrafficLight{
    private state:ITrafficLightState

    constructor(state:ITrafficLightState){
        this.state = state
    }

    setState(state:ITrafficLightState):void{
        this.state = state
    }

    changeLight():void{
        this.state.changeLight(this)
    }
}