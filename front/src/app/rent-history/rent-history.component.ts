import { Component, OnInit } from '@angular/core';
import { Renting } from '../model/renting.model';

@Component({
  selector: 'app-rent-history',
  templateUrl: './rent-history.component.html',
  styleUrls: ['./rent-history.component.css']
})
export class RentHistoryComponent implements OnInit {

  rentingHistory: Renting[] = [
    {
        vehicleModel: "Tesla serie 3",
        startAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        endAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        durationInDays: 2,
        totalPrice: 1200,
        images: []
    },
    {
        vehicleModel: "Audi e tron",
        startAddress: {
            streetName: "Hadzi Ruvimova",
            streetNumber: "8",
            city: "Novi Sad"
        },
        endAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        durationInDays: 3,
        totalPrice: 1500,
        images: []
    },
    {
        vehicleModel: "Tesla serie 4",
        startAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        endAddress: {
            streetName: "Hadzi Ruvimova",
            streetNumber: "8",
            city: "Novi Sad"
        },
        durationInDays: 5,
        totalPrice: 2500,
        images: []
    },
  ];  

  constructor() { }

  ngOnInit(): void {}

}
