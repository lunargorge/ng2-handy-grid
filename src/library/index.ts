import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandyGridUtilsFactory } from './shared/handy-grid-utils.factory';
import { HandyGridSortFactory } from './shared/sort/handy-grid-sort-factory.service';

export * from './component';
export * from './decorators';
export * from './enum';
export * from './interfaces';
export * from './model';
export * from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ HandyGridUtilsFactory, HandyGridSortFactory ],
  declarations: [],
  exports: [],
})

export class Ng2HandyGridModule {

}
