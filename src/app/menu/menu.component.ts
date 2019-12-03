import { Component, OnInit } from '@angular/core';
import{MenuService} from '../services/menuservice'
import { from } from 'rxjs';

@Component({
  selector: 'loan-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _menuArr: any;
  constructor(private menuservice: MenuService) { }
  //when component is ready
  ngOnInit() {
    this._menuArr = this.menuservice.getMenuData();
  }

}
