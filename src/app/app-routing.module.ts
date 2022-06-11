import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
        {path:'inicio', component:HomeComponent},
        {path:'skills', component:SkillsComponent},
        {path:'experiencia', component:ExperienciaComponent},
        {path:'educacion', component:EducacionComponent},
        {path:'contacto', component:ContactoComponent},
        {path:'portfolio', component:PortfolioComponent},
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  