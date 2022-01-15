import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService]
})


export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private categoryService: CategoryService, 
    private productService: ProductService,
    private toastr: ToastrService) { }

  productAddForm= new FormGroup({});
  product: Product = new Product();
  categories: Category[]=[];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories= data;
    })
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.toastr.success(this.product.name+" başarıyla eklendi.")
    }, error => {
      this.toastr.error("Bir hata oluştu");
  });
  }

}
