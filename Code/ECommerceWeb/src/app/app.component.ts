import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ImageUploadService } from './services/image-upload.service';
import { LocalStorageService } from './services/local-storage.service';
import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { RestService } from './services/rest.service';
import { UserService } from './services/user.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HttpClientModule],
  providers: [
    AuthService,
    CartService,
    ImageUploadService,
    LocalStorageService,
    LoggerService,
    NotificationService,
    OrderService,
    ProductService,
    RestService,
    UserService
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';
}
