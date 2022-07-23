import { Component, OnInit} from '@angular/core';
import { PortfolioServiceService } from 'src/app/servicios/portfolio-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inicioData:any;

  constructor(private datosPortfolio:PortfolioServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
       this.inicioData = data;});
    
  }
}