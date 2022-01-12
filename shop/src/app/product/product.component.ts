import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private productsService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [];


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.productsService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    })
  }

  addToCart(product: { name: string; }) {
    //alert(product.name + " added") 
    this.toastr.success(product.name + " SEPETE EKLENDİ");
  }



}
