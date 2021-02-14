import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // added formcontrol
  username = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  clear(): void {
    // this.username.reset();
    this.username.setValue('');
  }
}
