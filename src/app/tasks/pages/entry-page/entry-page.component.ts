import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent implements OnInit {
	public title:string = 'Titulo'

  constructor() { }

  ngOnInit(): void {
  }

}
