import { Component, OnInit } from '@angular/core';
import { faBars, faCopy, faEnvelope, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  iconHome = faHome
  iconAbout = faFileAlt
  iconWorks = faCopy
  iconContacts = faEnvelope
  iconBars = faBars

  constructor() { }

  ngOnInit(): void {
  }

}
