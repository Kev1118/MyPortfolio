import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-component',
  templateUrl: './work-component.component.html',
  styleUrls: ['./work-component.component.css']
})
export class WorkComponentComponent implements OnInit {

  @Input() workSet;
  
  constructor() { }

  ngOnInit(): void {
  }

}
