import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContainerBoxMainViewComponent } from './components/containers/container-box-main-view/container-box-main-view.component';
import { TableExamsComponent } from './components/table-exams/table-exams.component';
import { TableOrderComponent } from './components/table-order/table-order.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoPatientsComponent } from './components/info-patients/info-patients.component';
import { ModalIndicationsComponent } from './components/modal-indications/modal-indications.component';
import { ModalScheduledComponent } from './components/modal-scheduled/modal-scheduled.component';
import { ModalPromotionsComponent } from './components/modal-promotions/modal-promotions.component';
import { ModalLandscapeComponent } from './components/modal-landscape/modal-landscape.component';
import { PopoverComponent } from './components/popover/popover.component';
import { TabModule } from 'angular-tabs-component';

//Modulos externos
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ContainerBoxMainViewComponent,
    TableExamsComponent,
    TableOrderComponent,
    HeaderComponent,
    SidebarComponent,
    InfoPatientsComponent,
    ModalIndicationsComponent,
    ModalScheduledComponent,
    ModalPromotionsComponent,
    ModalLandscapeComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
