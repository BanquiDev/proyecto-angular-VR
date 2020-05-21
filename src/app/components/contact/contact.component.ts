import { Component, OnInit, ViewChild } from '@angular/core';
declare var $ :any 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number
  public anchuraToSlider: any 
  public captions: boolean
  public autor: any;
  @ViewChild('texto', {static: true}) textos: any

  constructor(
    
  ) {
    this.captions = false
   }

  ngOnInit(): void {
      console.log(this.textos)
  }
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider
  }
  resetearSlider(){
    this.anchuraToSlider = false
  }
  getAutor(event){
    this.autor = event
  }
}
