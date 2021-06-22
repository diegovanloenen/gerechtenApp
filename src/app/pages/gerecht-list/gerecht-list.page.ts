import { Component, OnInit } from '@angular/core';
import { GerechtService, Gerecht } from 'src/app/services/gerecht.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-gerecht-list',
  templateUrl: './gerecht-list.page.html',
  styleUrls: ['./gerecht-list.page.scss'],
})
export class GerechtListPage implements OnInit {
 
  private gerechten: Observable<Gerecht[]>;
 
  constructor(private ideaService: GerechtService) { }
 
  ngOnInit() {
    this.gerechten = this.ideaService.getGerechten();
  }
}