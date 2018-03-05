import { Passenger } from "./passenger";
import { Route } from "./route";
import { Refuel } from "./refuel";

export class Trip {
    passengers: Passenger[];
    route: Route;
    refuels: Refuel[];
    averageConsumption: number;
    calculationMethod: FuelCalculationMethod
}

export enum FuelCalculationMethod {
    BurnNewestFuelFirst,
    BurnOldestFuelFirst,
    BurnFuelEvenly
}