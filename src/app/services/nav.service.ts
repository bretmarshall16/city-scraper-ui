import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private router: Router) { }

  goToMain(): void {
    this.router.navigateByUrl('');
  }

  goToPlayer(id: number): void {
    this.router.navigateByUrl(`player/${id}`);
  }

  goToSchool(id: number): void {
    this.router.navigateByUrl(`school/${id}`);
  }
}
