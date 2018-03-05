export class Route {
    distance: number;
    waypoints: Waypoint[];
}

export class Waypoint {
    name: string;
    distanceFromStart: number;
}