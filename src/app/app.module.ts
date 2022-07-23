import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//importamos componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

//importamos clases para linkear, basado en el Approuting 
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

//importamos clases para usar el componente servicios y el httpClient que me brinda el metodo get, usado para el json "data"
import { PortfolioServiceService } from './servicios/portfolio-service.service' 
import {HttpClientModule} from '@angular/common/http'

//importamos clases para firebase
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';

//importamos config de Firebase
import { environment }  from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
    ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
              PortfolioServiceService], 

  bootstrap: [AppComponent] 
})
export class AppModule { }
