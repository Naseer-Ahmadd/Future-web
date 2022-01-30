import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  intro='intro'
  why='why'
  types='types'
  syntax='syntax'
  selectors='selectors'
  colors='colors'
  fonts='fonts'
  backgrounds='backgrounds'
  borders='borders'
  text_transformation='text_transformation'
  outlines='outlines'
  links='links'


  constructor() { }

  ngOnInit(): void {
  }

}
