import { Injectable } from '@angular/core';
import { Trainings } from '../components/trainings/trainings.component';
import { Customer } from '../components/customer/customer.component';
import { User } from '../model/user.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listUser: User[] = [];
  listCustomer: Customer[] = [];
  items: Trainings[] = [];
  localStorage: any;
  constructor() {}

  addTraining(training: Trainings) {
    const isExist = this.items.find((t) => t.id === training.id);
    if (isExist) {
      isExist.quantity += training.quantity;
    } else {
      this.items.push(training);
    }
  }

  onSaveCustomer(customer: Customer) {
    console.log(customer);
  }
  // add to customer to send in order page
  addCustomer(customer: Customer) {
    console.log(customer);
    this.listCustomer.push(customer);
  }
  onSaveUser(user: User) {
    console.log(user);
  }
  addUser(user: User) {
    console.log(user);
    this.listUser.push(user);
  }
  //return list of item(trainigs)
  getItems() {
    return this.items;
  }
  //return list of customer
  getCustomer() {
    return this.listCustomer;
  }
  getUser() {
    return this.listUser;
  }
  itemsCount() {
    return this.items.length;
  }
  // splice to item with index
  clearCart(index: number) {
    this.items.splice(index, 1);
  }
}
