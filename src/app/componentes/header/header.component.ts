import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string='';
  constructor() { }

  ngOnInit() {}

}
