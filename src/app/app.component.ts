import { Compiler, Component, ComponentFactory, Injector, NgModuleFactory, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  componentFactories: ComponentFactory<any>[];

  constructor(private compiler: Compiler, private injector: Injector) { }

  async loadComponent() {
    this.componentFactories = [];
    const { LazyModule, LazyComponent } = await import('./lazy');
    const moduleFactory = LazyModule instanceof NgModuleFactory ? LazyModule
      : (await this.compiler.compileModuleAsync(LazyModule));
    const moduleRef = moduleFactory.create(this.injector);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(LazyComponent);
    this.anchor.clear();
    this.anchor.createComponent(componentFactory);
  }

  async loadModule1() {
    this.loadModule(await import('./module1/m1.module').then(m => m.Module1));
  }

  async loadModule2() {
    this.loadModule(await import('./module2/m2.module').then(m => m.Module2));
  }

  createComponent(factory: ComponentFactory<any>) {
    this.anchor.clear();
    this.anchor.createComponent(factory);
  }

  private loadModule(moduleType: Type<any>) {
    this.anchor.clear();
    const moduleFactories = this.compiler.compileModuleAndAllComponentsSync(moduleType);
    this.componentFactories = moduleFactories.componentFactories;
  }
}
