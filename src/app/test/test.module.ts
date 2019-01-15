import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TestRoutingModule, CommonModule],
  declarations: [TestComponent],
  providers: []
})
export class TestModule {}
