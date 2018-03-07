import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Product } from '../models/product';
@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectProduct: Product = new Product();
  
  constructor(private firebase: AngularFireDatabase) 
  {

   }

   //METODO LISTAR
   getProduct(){
    return this.productList = this.firebase.list('products');

   }

   //METODO INSERTAR
   insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
   }

   //METODO ACTUALIZAR
   updateProduct(product: Product){
     this.productList.update(product.$key, {
       name: product.name,
       category: product.category,
       location: product.location,
       price: product.price
     });
   }

   //METODO ELIMINAR
   deleteProduct($key: string){
     this.productList.remove($key);
   }
}
