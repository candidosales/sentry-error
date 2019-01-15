import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const TestRoutes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TestRoutes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
