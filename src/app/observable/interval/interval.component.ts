import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  objMsg;
  videoSubscribe:Subscription;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    //const broadCastVideos=interval(2000);
    const broadCastVideos=timer(5000,1000)
    this.videoSubscribe=broadCastVideos.subscribe(res=>{
      console.log(res)
      this.objMsg='Video '+ res;
      this._designUtility.print(this.objMsg,'elContainer');
      this._designUtility.print(this.objMsg,'elContainer2');
      this._designUtility.print(this.objMsg,'elContainer3');
    if(res >= 5){
      this.videoSubscribe.unsubscribe()
    }
    })
  }

}
