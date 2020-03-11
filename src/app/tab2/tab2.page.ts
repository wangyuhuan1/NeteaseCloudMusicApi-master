import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public subjects:object[];
  constructor(public http: HttpClient) { }
  ngOnInit() {
    var url: string = "https://douban.uieee.com/v2/movie/top250"
    this.http.get(url).subscribe(res => {
      this.subjects=res["subjects"]
    })
  }

}
