import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor() { }
  
  users() {
    return [
    { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User'  ,id:1},
    { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin',id:2  },
    { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', id:3 },
    { firstName: 'riya', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', id:4 },
    { firstName: 'sonal', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:5},
    { firstName: 'ajay', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:6},
    { firstName: 'ananya', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:7},
    { firstName: 'aarav', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:8},
    { firstName: 'ajit', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:9},

    { firstName: 'ayan', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' ,id:10}]

  }

}
