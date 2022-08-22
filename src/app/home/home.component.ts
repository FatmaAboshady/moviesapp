import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  


  items: MenuItem[];






	
  
  ngOnInit() {
    this.items = [
      {
          label:'home',
          icon:'pi pi-fw pi-home',
          url:"/home"
          
       
      },

      {
        label:'movies',
        url:"/movies",
        icon:'fa-solid fa-video'

     
    },
    {
      label:'tv shows',
      url:"/tv",
      icon: 'fa-light fa-tv'

   
  },
  {
    label:'people',
    url:"/people"

 
},

     


      // {
      //     label:'Quit',
      //     icon:'pi pi-fw pi-power-off'
      // }
  ];
  }

}
