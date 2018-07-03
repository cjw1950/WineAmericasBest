import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    //  RouterModule.forRoot([
    //  {path:'battery',component:BatteryComponent },
    //  {path:'computer',component: ComputerComponent },
    //  {path:'glasses',component: GlassesComponent },
    //  {path:'restaurant',component: RestaurantsComponent},
    //  {path:'sports',component: SportsComponent },
    //  {path:'wines',component: WinesComponent},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
