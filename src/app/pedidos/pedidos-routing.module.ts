import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosPage } from './pedidos.page';

const routes: Routes = [
	{
		path: '',
		component: PedidosPage,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PedidosPageRoutingModule { }
