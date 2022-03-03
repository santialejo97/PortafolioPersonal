import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const list = document.querySelectorAll('.list');
    list.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        list.forEach((after) => {
          if (after.classList.contains('active'))
            after.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  }
}
