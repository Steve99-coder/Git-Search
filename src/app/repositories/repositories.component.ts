import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import {ProfileServiceService} from '../profile-service.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:Repository;

  constructor(public repoService: ProfileServiceService) { }

 searchRepository(searchName){
    this.repoService.getRepo(searchName).then(
      (results)=>{
        this.repos =this.repoService.repos
        console.log(this.repos);
      },  
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.searchRepository('Stephen Nderitu');
  }

}
