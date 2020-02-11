import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbTitle: string;

  constructor( private router:Router, 
               private title:Title,
               private meta: Meta ) {
    

    this.getDataRoute()
    .subscribe( data=>{
      console.log(data);
      this.breadcrumbTitle = data.title;
      this.title.setTitle(this.breadcrumbTitle);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.breadcrumbTitle
      };

      this.meta.updateTag(metaTag);
    } );

  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd  ),
      filter( (evento: ActivationEnd) =>  evento.snapshot.firstChild === null ),
      map( (evento:ActivationEnd) => evento.snapshot.data  )
    )
  }

}
