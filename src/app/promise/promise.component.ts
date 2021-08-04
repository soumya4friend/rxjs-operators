import { Component, OnInit } from '@angular/core';
//import { rejects } from 'node:assert';
//import { resolve } from 'node:path';
//import { promise } from 'selenium-webdriver';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  // DellAvailable(){
  //   return true
  // }

  // HpAvailable(){
  //   return false
  // }

  // // promiseVal


  // hp={
  //   Brand:"hp",
  //   size:"1TB",
  //   color:"silver"
  // }
  // notAvail={
  //   Brand:"not available",
  //   status:"Faild"
  // }
  fetch1(){
    alert("working")
  };
  ngOnInit(): void {
    // let buyLaptop=new Promise((resolve,reject)=>{
    //   resolve("promise resolve")
    // });

    // buyLaptop.then(res=>{
    //   console.log("success",res)
    // })

    // let buyLaptop=new Promise((resolve,reject)=>{
    //   reject("promise reject")
    //   if(this.DellAvailable()){
    //     return setTimeout(()=>{
    //       resolve('Dell purchased')
    //       resolve(this.dell)
    //     },3000)
    //   }else if(this.HpAvailable()){
    //     return setTimeout(() => {
    //       resolve('Hp purchased')
    //       resolve(this.hp)
    //     }, 3000);
    //   }else{
    //     reject('laptop not available')
    //     reject(this.notAvail)
    //   }
    // });

    // buyLaptop.then(res=>{
    //   this.promiseVal=res
    //   console.log("then=>",res)
    // }).catch(res=>{
    //   this.promiseVal=res
    //   console.log("then=>",res)
    // })



  }


}
