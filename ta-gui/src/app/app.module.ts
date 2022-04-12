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
import { ProfComponent } from './prof.component';
import { CadastroComponent } from './cadastro.component';
import { ProfService } from './prof.service';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    ProfComponent,
    AlunosComponent,
    CadastroComponent,
    CadeirasComponent,
    CriarCadeiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'professores',
        component: ProfComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'metas',
        component: MetasComponent
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
  providers: [AlunoService, ProfService, CadeiraService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
