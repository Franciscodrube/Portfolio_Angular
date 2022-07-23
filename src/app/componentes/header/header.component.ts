import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/servicios/portfolio-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioServiceService) { }

  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.miPortfolio = data;
  });
  }

}
