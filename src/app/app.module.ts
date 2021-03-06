import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ListComponent} from './list/list.component';
import {DragulaModule} from 'ng2-dragula';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {AuthphoneComponent} from './authphone/authphone.component';
import {WindowService} from './services/window.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AuthphoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [AuthService, WindowService],
  bootstrap: [AppComponent],
})
export class AppModule { }
