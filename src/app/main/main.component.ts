import { Component, OnInit } from '@angular/core';
import { Page } from 'src/interfaces/page';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  //Mocks
  pagesMock: Page[] = [
    {
      id: 0,
      name: "Crear pedido"
    },
    {
      id: 1,
      name: "Ver Pedidos"
    },
    {
      id: 2,
      name: "test"
    }
  ]


  public pages: Page[] = []


  ngOnInit(): void {
    this.pages = this.pagesMock;
  }
}
