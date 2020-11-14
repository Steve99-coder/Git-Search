import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service'
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User; 
  repos:Repository;  
        
  constructor(public getService: ProfileServiceService, private repoService:ProfileServiceService) { }
  getInfo(nameSearch){
    this.getService.userSearch(nameSearch).then(
      (success)=>{
        this.users = this.getService.findUser;
      }, 
      (error)=>{
        console.log(error)
      } 
    ); 
    this.repoService.getRepo(nameSearch).then(
      (results)=>{
        this.repos =this.repoService.repos
        console.log(this.repos);
      },  
      (error)=>{
        console.log(error);
      } 
    );  
}    
 
  ngOnInit(){
    this.getInfo('Steve99-coder')
  } 
 

}
