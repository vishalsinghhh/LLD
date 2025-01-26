import { Car } from "./Car";

export class CarBuilder{
    private brand!:string
    private model!:string
    private engine!:string
    private color?:string
    private sunroof?:boolean

    setBrand(brand:string):CarBuilder{
        this.brand = brand
        return this
    }

    setModel(model:string):CarBuilder{
        this.model = model
        return this
    }

    setEngine(engine:string):CarBuilder{
        this.engine = engine
        return this
    }

    setColor(color:string):CarBuilder{
        this.color = color
        return this
    }

    setSunroof(sunroof:boolean):CarBuilder{
        this.sunroof = sunroof
        return this
    }

    build():Car{
        if (!this.brand || !this.model || !this.engine) {
            throw new Error("Missing required fields: brand, model, or engine");
          }
          return new Car(this.brand, this.model, this.engine, this.color, this.sunroof)
    }
}