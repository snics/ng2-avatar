import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarModule} from 'ng2-avatar';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    AvatarModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
