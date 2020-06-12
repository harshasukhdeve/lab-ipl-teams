import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamName: String[] = [
    'Chennai super kings',
    'mumbai indians',
    'Delhi capitals',
    'Royal Challengers Banglore',
    'kolkata knight Riders',
    'kings xl punjab',
    'Sunrises Hyderabad',
    'Rising Pune Supergiant'
  ];
phoneNumbers: String[] = [
    '9851116000',
    '9123335123',
    '9271595000',
    '8888882643',
    '7397070070',
    '9988991212',
    '7035691565',
    '7845123698'
  ];
website: String[] = ['https://www.chennaisuperkings.com/', 'https://www.mumbaiindians.com/', 'https://www.dehlicapitals.in/', 'https://www.royalchallegers.com/', 'https://www.kkr.in/', 'https://www.kxip.in/','https://www.Sunrises-Hyderabad.in/','https://www.rps.in/'];
images: String[] = ['../../assets/csk.png','../../assets/MI.png', '../../assets/Delhi.png','../../assets/RCB.png','../../assets/KKR.png', '../../assets/KXI.png', '../../assets/SRH.png','../../assets/RPS.png'];


}
