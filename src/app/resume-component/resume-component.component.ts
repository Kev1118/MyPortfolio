import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.css']
})
export class ResumeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myfilename = "resume-kevin-morales.pdf";
  fileUrl = "assets/file/resume-kevin-morales.pdf";
}
