import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ecommerce-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
