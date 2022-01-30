import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HTMLComponent implements OnInit {
  
  intro='intro'
  history='history'
  headings='headings'
  paragraphs='paragraphs'
  elements='elements'
  formatting='formatting'
  comments='comments'
  links='links'
  images='images'
  favicon='favicon'
  tables='tables'
  lists='lists'
  inline_block='inline-block'
  classes='classes'
  id_att='id_att'
  head='head'
  layout='layout'
  entities='entities'
  forms='forms'
  form_attr='form_attr'
  form_elements='form_elements'
  form_input_types='form_input_types'
  input_attr='input_attr'

 
  constructor(private router: Router) { }

  // public btnClick(fragment: string): void {
  //   this.router.navigateByUrl('#' + fragment);
  // }


  
  ngOnInit(): void {
    
  }


  
  




 
}
