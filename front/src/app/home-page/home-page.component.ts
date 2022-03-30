import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  showCarDetailsModal(event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'flex';
  }

  closeCarDetailsModal(event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
  }

}
