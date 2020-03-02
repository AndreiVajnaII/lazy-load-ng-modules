import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyService } from './lazy.service';

@NgModule({
    declarations: [LazyComponent],
    imports: [CommonModule],
    providers: [LazyService]
})
export class LazyModule { }
