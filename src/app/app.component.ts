import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  isPrevious = 'disabled';
  isNext = '';

  images = [
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "First Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    },
    {
      url: "https://images.unsplash.com/photo-1517157622233-2e4b84b98b6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Third Image"
    },
    {
      url: "https://images.unsplash.com/photo-1501707305551-9b2adda5e527?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Fourth Image"
    },
    {
      url: "https://images.unsplash.com/photo-1611477407980-4df0ee6e4913?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Fifth Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Sixth Image"
    },
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Firset Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    },
    {
      url: "https://images.unsplash.com/photo-1517157622233-2e4b84b98b6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Third Image"
    },
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Firset Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    },
    {
      url: "https://images.unsplash.com/photo-1517157622233-2e4b84b98b6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Third Image"
    },
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Firset Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    },
    {
      url: "https://images.unsplash.com/photo-1517157622233-2e4b84b98b6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Third Image"
    },
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Firset Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    },
    {
      url: "https://images.unsplash.com/photo-1517157622233-2e4b84b98b6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Third Image"
    },
    {
      url: "https://images.unsplash.com/photo-1513223848047-2456e15b4f7d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Firset Image"
    },
    {
      url: "https://images.unsplash.com/photo-1571110450378-6cd3578bf03b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Second Image"
    }
  ]
  checkIndexes = (index: number)=>{
    
    // return (( index < this.currentPage+3 && index >= this.currentPage) || index > this.images.length-4) ? true : false;
    return Math.abs(this.currentPage - index) < 5;
  }
}
