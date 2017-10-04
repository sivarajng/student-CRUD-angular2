import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  ngOnInit() {

  }

  /* Call clear the local storage Service */
  clearLocalStorage() {

    this.crudService.clearLocalStorage();
    setTimeout(() => { alert('Successfully resetted LocalStorage'); location.reload(); }, 200);

  }

}
