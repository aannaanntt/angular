import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyContainer } from './mycontainer/mycontainer';
import { TopNavComponent } from './mycontainer/top-nav/top-nav.component';
import { HeaderComponentComponent } from './mycontainer/header-component/header-component.component';
import { Textsec1Component } from './mycontainer/textsec1/textsec1.component';
import { TextSec2Component } from './mycontainer/text-sec2/text-sec2.component';
import { DatabindComponent } from './mycontainer/databind/databind.component';
import { ClassStyleComponent } from './mycontainer/databind/class-style/class-style.component';
import { EventBindComponent } from './mycontainer/event-bind/event-bind.component';
import { TwoWayComponent } from './mycontainer/two-way/two-way.component';
import { NgIfComponent } from './mycontainer/ng-if/ng-if.component';
import { NgForComponent } from './mycontainer/ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import {Routes,RouterModule} from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {LaptopComponent} from './products/laptop/laptop.component';
import { ParentComponent } from './parent/parent.component'
import {ApplicationServiceService} from './application-service.service'
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { Comp4Component } from './home/comp4/comp4.component';
import { TestdirectivesDirective } from './appDirectives/testdirectives.directive'
const appRoutes:Routes =[
{path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LogincomponentComponent},
 {path:'buy-product',component:ParentComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'products',component:ProductsComponent, children:[

{path:'laptop',component:LaptopComponent}
]},

{path:'**',component:PagenotfoundComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    MyContainer,
    TopNavComponent,
    HeaderComponentComponent,
    Textsec1Component,
    TextSec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventBindComponent,
    TwoWayComponent,
    NgIfComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LogincomponentComponent,
    PagenotfoundComponent,
    LaptopComponent,
    ParentComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestdirectivesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
RouterModule.forRoot(appRoutes),
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
