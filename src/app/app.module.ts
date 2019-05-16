import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
  MatButtonModule, MatGridListModule, MatListModule, MatMenuModule,
  MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { PopComponent } from './page/pop/pop.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor} from './class/jwtinterceptor';
import { ErrorInterceptor } from './class/errorinterceptor';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, data : { title: 'Produits JPEG'} },
  { path: 'menu', component: MenuComponent, data : { title: 'Menu JPEG'} },
  { path: 'pop', component: PopComponent, data : { title: 'Pop JPEG'} },
  { path: 'login', component: LoginComponent, data : { title: 'loginPEG'} },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    PopComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
