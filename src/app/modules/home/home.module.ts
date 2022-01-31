import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
