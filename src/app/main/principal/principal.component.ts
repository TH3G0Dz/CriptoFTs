/*import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent   {

}*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  cryptos = [
    { name: 'Bitcoin', image: 'bitcoin.png', change: 5.23 },
    { name: 'Ethereum', image: 'ethereum.png', change: -3.14 },
    // Add more cryptocurrencies as needed
  ];

  videos = [
    { url: 'https://www.youtube.com/embed/video1' },
    { url: 'https://www.youtube.com/embed/video2' },
    // Add more videos as needed
  ];

  newsFeed = [
    { title: 'Bitcoin Hits New All-Time High', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Ethereum Upgrade Sparks Debate', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more news articles as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}




