import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

class Waypoint {
  name = '';
  distance = 0;
}

@Component({
  selector: 'app-add-edit-route',
  templateUrl: './add-edit-route.component.html',
  styleUrls: ['./add-edit-route.component.scss']
})
export class AddEditRouteComponent implements OnInit {  
  routeForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm(): any {
    this.routeForm = this.fb.group({
      averageConsumption: 12,
      waypoints: this.fb.array([new Waypoint(), new Waypoint()].map(c => this.fb.group(c)))
    });
    (<FormArray> this.routeForm.get('waypoints')).controls[0].get('distance').disable();
  }

  onSubmit(values) {
    console.log(values);
  }

  getNamePlaceholder(index: number): string {
    if (index === 0) return "Start";
    let numberOfWaypoints = (<FormArray> this.routeForm.get('waypoints')).controls.length;
    if (index === numberOfWaypoints - 1) return "Finish";
    return "Waypoint";
  }

  addWaypoint(index: number) {
    let waypoints = (<FormArray> this.routeForm.get('waypoints')).controls;
    waypoints.splice( index + 1 , 0, this.fb.group(new Waypoint()));
  }

  removeWaypoint(index: number) {
    let waypoints = (<FormArray> this.routeForm.get('waypoints')).controls;
    waypoints.splice( index , 1);
  }

  canRemoveWaypoint(index: number): boolean {
    let waypoints = (<FormArray> this.routeForm.get('waypoints')).controls;
    if (waypoints.length === 2) return false;
    return true;
  }
}
