import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1=of('Anup','Shekhar','Sharma')

    obs1.subscribe(res=>{
      console.log(res)
    })
  }

}
