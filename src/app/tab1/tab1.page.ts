import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public playlists:object[];
  constructor(public http:HttpClient) {}
  ngOnInit(){
    var url:string="http://localhost:3000/top/playlist?cat=华语"
    this.http.get(url).subscribe(res=>{
      // console.log(res["playlists"])
      this.playlists=res["playlists"]
    })
  }

}
