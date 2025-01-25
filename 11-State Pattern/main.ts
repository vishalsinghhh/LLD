import { TrafficLight } from "./TrafficeLight";
import { RedLigth } from "./RedLight";

function main(){
    const trafficeLight = new TrafficLight(new RedLigth())

    trafficeLight.changeLight()
    trafficeLight.changeLight()
    trafficeLight.changeLight()
    trafficeLight.changeLight()
    trafficeLight.changeLight()
    trafficeLight.changeLight()
    trafficeLight.changeLight()

}

main()