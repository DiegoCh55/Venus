import { Component, OnInit } from '@angular/core';
import { PageView} from 'src/utils/interfaces';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  //Mocks
  pagesMock: PageView[] = [
    {
      id: 0,
      name: "Crear pedido",
      route: "/createOrder"
    },
    {
      id: 1,
      name: "Ver Pedidos",
      route: "/seeOrders"
    }
  ]

  public pagesView: PageView[] = []


  ngOnInit(): void {
    this.pagesView = this.pagesMock;
  }
}
