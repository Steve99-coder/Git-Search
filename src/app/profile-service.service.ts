import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProfileServiceService {
  findUser: User;
  repos: Repository;

  constructor(private http: HttpClient) {
    this.findUser = new User("", "", "", "", 0, 0, 0, "","", new Date);
    this.repos = new Repository("", "", "", new Date, 0, 0, "");
  }
  userSeach(nameSearch: string) {
    interface Response {
      url: string,
      login: string;
      html_url: string;
      location: string
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      bio:string;
      created_at: Date;

    }
    return new Promise((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + nameSearch + '?access_token=' + environment.Apikey).toPromise().then(
        (result) => {
          this.findUser = result;
          console.log(this.findUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepo(nameSearch) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http.get<Repos>('https://api.github.com/users/' + nameSearch + "/repos?order=created&sort=asc?access_token=" + environment.Apikey).toPromise().then(
        (results) => {
          this.repos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
