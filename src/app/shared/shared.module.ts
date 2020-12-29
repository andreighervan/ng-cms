import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, BlogItemComponent],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, BlogItemComponent]
})
export class SharedModule { }
