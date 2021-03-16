import { BlogServiceService } from './blog-service.service';
import { Component, OnInit } from '@angular/core';
import {Blog} from'./blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  firstCount=0
  lastCount=8
  blogs:Blog[]

  selectedTopic:string="all"
  selectedAuthor:string="all"

  selectedDate:string="all"

  constructor(private BlogServiceService:BlogServiceService) { }
  filterByTopic(){
   
    console.log(this.selectedTopic);
  if(this.selectedAuthor!="all" &&this.selectedDate!="all"){
    this.blogs = this.BlogServiceService.blogs.filter(p=>{return p.Author==this.selectedAuthor
      &&p.Date==this.selectedDate&&p.topic==this.selectedTopic}
    )}else if(this.selectedAuthor!="all"){  this.blogs = this.BlogServiceService.blogs.filter(p=>{return p.Author==this.selectedAuthor
      &&p.topic==this.selectedTopic
    })

  }else if(this.selectedDate!="all"){this.blogs=this.BlogServiceService.blogs.filter(p=>{return p.Date==this.selectedDate
   &&p.topic==this.selectedTopic}
  )}
 else{this.blogs=this.BlogServiceService.blogs.filter(p=>{ return p.topic==this.selectedTopic}
)}
}
filterByAuthor(){    
  console.log(this.selectedTopic);
if(this.selectedTopic!="all" &&this.selectedDate!="all"){
  this.blogs =this.BlogServiceService.blogs.filter(p=>{return p.Author==this.selectedAuthor
    &&p.Date==this.selectedDate&&p.topic==this.selectedTopic}
  )}else if(this.selectedTopic!="all"){  this.blogs = this.BlogServiceService.blogs.filter(p=>{return p.Author==this.selectedAuthor
    &&p.topic==this.selectedTopic
  })

}else if(this.selectedDate!="all"){this.blogs=this.BlogServiceService.blogs.filter(p=>{return p.Date==this.selectedDate
 &&p.Author==this.selectedAuthor}
)}
else{this.blogs=this.BlogServiceService.blogs.filter(p=>{ return p.Author==this.selectedAuthor}
)}
}

  ngOnInit(): void {
    this.blogs=this.BlogServiceService.blogs
  }

}
