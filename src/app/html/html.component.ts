import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HTMLComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public linkClick(fragment: string): void {
    this.router.navigateByUrl('#' + fragment);
  }

}
