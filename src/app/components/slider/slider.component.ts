import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $ :any 
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number
  @Input('etiquetas') captions: boolean
  @Output() conseguirAutor = new EventEmitter()

  public autor: any

  constructor() { 
    this.autor = {
      nombre:"Esteban Gulias",
      website:"estebangulias.com",
      youtube:"youtube/banqui"

    }
  }

  ngOnInit(): void {
    $("#logo").click(function(e){
        e.preventDefault()
      $("header").css("background", "green")
                .css("height", "91px") 
    })     
    $(".galeria").bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    })

    this.conseguirAutor.emit(this.autor)
  }
  lanzar(event){
    console.log(event)
    this.conseguirAutor.emit(this.autor)
  }

}
