import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartService } from './service/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nursery-app';

  searchText = '';
  
  cartCount = 0;

  constructor(public cartService:CartService, public router:Router){}

  ngOnInit(){
    this.cartCount = this.cartService.getCartCount();
  }


searchPlant(){
  if(this.searchText.trim()){
    this.router.navigate(['/plants'], {
      queryParams: { search: this.searchText }
    });
  }
}
}