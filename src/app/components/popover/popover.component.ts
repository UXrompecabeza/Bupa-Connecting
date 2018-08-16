import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  show: boolean = true;

  popover = ['Agendar hora', 'Más horarios']

  images: Array<string>;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
        .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        .subscribe(images => this.images = images);

        
      }
      
  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
  move(event) {
    let element = event.target.parentElement;
    let content = document.getElementById("content");
    content.classList.toggle("contraer"); 
    element.parentElement.scrollLeft += element.offsetLeft;
  }
}
