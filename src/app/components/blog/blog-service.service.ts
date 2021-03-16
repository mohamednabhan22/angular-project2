import { Injectable } from '@angular/core';
import {Blog} from'./blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }
  blogs:Blog[]=[new Blog('sport','ahmed','2017',"../../../assets/blog/1.png"),new Blog('programing','slem','2017',"../../../assets/blog/2.png"),new Blog('medicine','ali','2017',"../../../assets/blog/3.png"),
  new Blog('sport','slem','2017',"../../../assets/blog/2.png"),new Blog('programing','ahmed','2017',"../../../assets/blog/1.png"),new Blog('medicine','slem','2017',"../../../assets/blog/2.png"),
  new Blog('medicine','ahmed','2017',"../../../assets/blog/1.png"),new Blog('medicine','ali','2018',"../../../assets/blog/3.png"),new Blog('sport','ahmed','2017',"../../../assets/blog/1.png"),
  new Blog('sport','slem','2018',"../../../assets/blog/2.png"),new Blog('programing','ali','2018',"../../../assets/blog/3.png"),new Blog('medicine','slem','2018',"../../../assets/blog/2.png"),
  new Blog('medicine','ahmed','2018',"../../../assets/blog/1.png"),new Blog('medicine','slem','2018',"../../../assets/blog/2.png"),new Blog('sport','ahmed','2018',"../../../assets/blog/1.png"),
  new Blog('sport','ahmed','2019',"../../../assets/blog/1.png"),new Blog('sport','slem','2019',"../../../assets/blog/2.png"),new Blog('sport','ali','2019',"../../../assets/blog/3.png"),
  new Blog('sport','ahmed','2019',"../../../assets/blog/1.png"),new Blog('programing','slem','2019',"../../../assets/blog/2.png"),new Blog('medicine','ali','2019',"../../../assets/blog/3.png"),
  new Blog('sport','ali','2017',"../../../assets/blog/3.png"),new Blog('programing','ahmed','2017',"../../../assets/blog/1.png"),new Blog('medicine','slem','2017',"../../../assets/blog/2.png"),
  new Blog('sport','slem','2020',"../../../assets/blog/2.png"),new Blog('programing','ali','2020',"../../../assets/blog/3.png"),new Blog('medicine','slem','2020',"../../../assets/blog/2.png"),
  new Blog('medicine','ali','2020',"../../../assets/blog/3.png"),new Blog('medicine','ahmed','2020',"../../../assets/blog/1.png"),new Blog('sport','ahmed','2020',"../../../assets/blog/1.png"),



]
}
