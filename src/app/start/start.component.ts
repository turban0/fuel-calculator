import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
})
export class StartComponent {

  constructor(private router: Router) { }

  btnClick() {
    this.router.navigateByUrl('/route/add');
  };

}
