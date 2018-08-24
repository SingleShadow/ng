import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

const routes: Routes = [
	{
		path: '',
		component: HeaderComponent,
		outlet: 'app-header'
	},
	{
		path: '',
		component: FeatureListComponent,
		outlet: 'feature-list'
	},
	{
		path: '',
		component: FooterComponent,
		outlet: 'app-footer'
	}
];

@NgModule({
	declarations:[],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})



export class AppRoutesModule { }
