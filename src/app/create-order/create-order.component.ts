import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Order, Product, ProductCategory } from 'src/utils/interfaces';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup: any;

  private mockPC: ProductCategory[] = [
    {
      id: 0,
      name: "Bebidas"
    },
    {
      id: 1,
      name: "Entradas"
    },
    {
      id: 2,
      name: "Platos Fuertes"
    }
  ]

  private mockP: Product[] = [
    {
      id: 0,
      name: "Coca",
      price: 800,
      image: 'https://media.istockphoto.com/id/499208007/photo/coca-cola-classic-in-a-glass-bottle.jpg?s=612x612&w=0&k=20&c=hQ2ub4bQdSRjPkreJBMHT5lwZdXyyRd4dtf8w0NWVUg=',
      category: 0
    },
    {
      id: 1,
      name: "Ceviche",
      price: 1000,
      image: 'https://t1.rg.ltmcdn.com/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg',
      category: 1
    },
    {
      id: 2,
      name: "Arroz con pollo",
      price: 3500,
      image: 'https://www.arrozsos.es/wp-content/uploads/2020/06/arroz-con-pollo-SOS-600.jpg',
      category: 2
    },
  ]

  public productCategories: ProductCategory[] = [];

  public products: Product[] = [];
  public productsTab: Product[] = [];

  public order: Order;

  constructor () {
    this.order = {
      id: 1,
      total: 0,
      productList: [],
      status: true, 
    }
  }

  ngOnInit(): void {
    this.productCategories = this.mockPC;
    this.products = this.mockP;
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      this.productsTab = this.products
      .filter((product) => product.category === this.productCategories[this.tabGroup.selectedIndex].id)
  }, 0);
  }

  tabChange(event: MatTabChangeEvent): void {
    this.productsTab = this.products
      .filter((product) => product.category === this.productCategories[event.index].id)
  }

  getProductName(id: number): string {
    const name = this.products.find((product) => product.id === id)?.name!;
    return name;
  }

  addProduct(id: number): void {
    const product = this.order.productList.find((product) => product.id === id);
    product !== undefined ? product.total++ : this.order.productList.push({id: id, total: 1})
  }
}
