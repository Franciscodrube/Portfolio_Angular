import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/servicios/portfolio-service.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaData:any;

  constructor(private datosPortfolio:PortfolioServiceService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.experienciaData=data.experience;
    })
  }

}
