import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){
    let scrolltop = window.setInterval(()=>{
      let pos = window.pageYOffset;
      if (pos > 0){
        window.scrollTo(0,pos - 20);
      } else {
        window.clearInterval(scrolltop);
      }
      
    },16) 
    
  }
}
