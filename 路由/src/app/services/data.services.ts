import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class DataService{

  constructor(public http:Http){

  }

  getSingleUsers(id){
    return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
      .map(res=>res.json())
  }
  getUsers(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
      .map(res=>res.json())
  }
  addUser(user){
    return this.http.post("http://jsonplaceholder.typicode.com/users",user)
      .map(res=>res.json());
  }
  deleteUser(id){
    return this.http.delete("http://jsonplaceholder.typicode.com/users/"+id)
      .map(res=>res.json())
  }
  updateUser(user){
    return this.http.put("http://jsonplaceholder.typicode.com/users/"+user.id,user)
      .map(res=>res.json())
  }
}
