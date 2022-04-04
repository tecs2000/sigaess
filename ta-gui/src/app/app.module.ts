import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas.component';
import { AlunosComponent } from './alunos.component';
import { AlunoService } from './aluno.service';
import { CadeirasComponent } from './cadeiras.component';
import { CadeiraService} from './cadeiras.service';
import { CriarCadeiraComponent } from './criar-cadeira/criar-cadeira.component'

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    AlunosComponent,
    CadeirasComponent,
    CriarCadeiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      },
      {
        path: "cadeiras",
        component: CadeirasComponent
      },
      { 
        path: "criarCadeira",
        component: CriarCadeiraComponent
      }
    ])
  ],
  providers: [AlunoService, CadeiraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
