import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-route',
  templateUrl: './add-edit-route.component.html',
  styleUrls: ['./add-edit-route.component.scss']
})
export class AddEditRouteComponent implements OnInit {
  averageConsumption: number;
  constructor() {}

  ngOnInit() {
    
  }

  onSubmit(values) {
    console.log(values);
  }
}
