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
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor} from './class/jwtinterceptor';
import { ErrorInterceptor } from './class/errorinterceptor';
import { IsSignedInGuard} from './guard/is-signed-in.guard';
import { TypeComponent } from './page/type/type.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, canActivate: [IsSignedInGuard], data : { title: 'Produits JPEG'} },
  { path: 'menu', component: MenuComponent, canActivate: [IsSignedInGuard], data : { title: 'Menu JPEG'} },
  { path: 'type', component: TypeComponent, canActivate: [IsSignedInGuard], data : { title: 'Type'} },
  { path: 'login', component: LoginComponent, data : { title: 'loginPEG'} },
  { path: '', redirectTo: '/product', canActivate: [IsSignedInGuard], pathMatch: 'full' },
  { path: '**', component: AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    LoginComponent,
    TypeComponent
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
    MatFormFieldModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
