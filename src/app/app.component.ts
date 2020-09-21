import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  firstWorkSet = {
    imgPath:  "assets/image/work/Online-shop.png",
    workTitle: "Online Shop"
  }
  secondWorkSet = {
    imgPath:  "assets/image/work/corporate-design.png",
    workTitle: "Corporate Design"
  }
  thirdWorkSet = {
    imgPath:  "assets/image/no-image.jpg",
    workTitle: "Working on it!"
  }
  
  
}
