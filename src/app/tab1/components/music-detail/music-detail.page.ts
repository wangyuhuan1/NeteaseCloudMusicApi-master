import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.page.html',
  styleUrls: ['./music-detail.page.scss'],
})
export class MusicDetailPage implements OnInit {
  public playlist:object;
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      var url:string=`http://localhost:3000/playlist/detail?id=${res.id}`
      this.http.get(url).subscribe(res=>{
        this.playlist=JSON.parse(JSON.stringify(res["playlist"]))
        
        // console.log(typeof res["playlist"])
      })
    })
  }

}
