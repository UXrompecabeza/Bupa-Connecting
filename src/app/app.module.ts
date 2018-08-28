import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContainerBoxMainViewComponent } from './components/containers/container-box-main-view/container-box-main-view.component';
import { TableExamsComponent } from './components/table-exams/table-exams.component';
import { TableOrderComponent } from './components/table-order/table-order.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoPatientsComponent } from './components/info-patients/info-patients.component';
import { ModalIndicationsComponent } from './components/modales/modal-indications/modal-indications.component';
import { ModalScheduledComponent } from './components/modales/modal-scheduled/modal-scheduled.component';
import { ModalPromotionsComponent } from './components/modales/modal-promotions/modal-promotions.component';
import { ModalLandscapeComponent } from './components/modales/modal-landscape/modal-landscape.component';
import { PopoverComponent } from './components/popover/popover.component';
import { TabModule } from 'angular-tabs-component';
import { ModalNuevaReservaComponent } from './components/modales/modal-nueva-reserva/modal-nueva-reserva.component';

//Modulos externos
import { OrderModule } from 'ngx-order-pipe';
import { MenuInicialComponent } from './views/menu-inicial/menu-inicial.component';
import { IngresoRutComponent } from './components/ingreso-rut/ingreso-rut.component';
import { PacienteEncontradoComponent } from './components/paciente-encontrado/paciente-encontrado.component';
import { BotoneraAccionesReservaComponent } from './components/botonera-acciones-reserva/botonera-acciones-reserva.component';
import { CarruselPacientesComponent } from './components/carrusel-pacientes/carrusel-pacientes.component';
import { ApartadoBxmedicoComponent } from './components/apartado-bxmedico/apartado-bxmedico.component';
import { ResumenMedicoComponent } from './components/resumen-medico/resumen-medico.component';
import { ModalScheduledFailComponent } from './components/modales/modal-scheduled-fail/modal-scheduled-fail.component';
import { ApartadoBxespecialidadComponent } from './components/apartado-bxespecialidad/apartado-bxespecialidad.component';
import { ResumenExamenComponent } from './components/resumen-examen/resumen-examen.component';
import { ReservaHoraprecioComponent } from './components/modales/reserva-horaprecio/reserva-horaprecio.component';
import { BotoneraAccionesMenuComponent } from './components/botonera-acciones-menu/botonera-acciones-menu.component';
import { InfoPacienteEncontradoComponent } from './components/info-paciente-encontrado/info-paciente-encontrado.component';
import { CalendarioExtendidoComponent } from './components/calendario-extendido/calendario-extendido.component';
import { ModalIndicationsBack2newComponent } from './components/modales/modal-indications-back2new/modal-indications-back2new.component';
import { ModalCvDoctorComponent } from './components/modales/modal-cv-doctor/modal-cv-doctor.component';
import { ModalCvDoctorHComponent } from './components/modales/modal-cv-doctor-h/modal-cv-doctor-h.component';
import { CarruselMesComponent } from './components/carrusel-mes/carrusel-mes.component';
import { ModalReservaAbiertaComponent } from './components/modales/modal-reserva-abierta/modal-reserva-abierta.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { PacienteNoEncontradoComponent } from './components/paciente-no-encontrado/paciente-no-encontrado.component';
import { EditarPacienteComponent } from './components/modales/editar-paciente/editar-paciente.component';
import { AgendarPacienteComponent } from './views/agendar-paciente/agendar-paciente.component';
import { CrearPacienteComponent } from './components/modales/crear-paciente/crear-paciente.component';
import { TableAgendadoComponent } from './components/table-agendado/table-agendado.component';
import { MenuAsignadosComponent } from './views/menu-asignados/menu-asignados.component';
import { TableAsignadosComponent } from './components/table-asignados/table-asignados.component';
import { FiltroCalendarioComponent } from './components/modales/filtro-calendario/filtro-calendario.component';
import { FiltroEmbudoComponent } from './components/modales/filtro-embudo/filtro-embudo.component';
import { ColumnaPromocionesComponent } from './components/columna-promociones/columna-promociones.component';
import { MenuPromocionesComponent } from './views/menu-promociones/menu-promociones.component';
import { ResumenGestionesComponent } from './components/resumen-gestiones/resumen-gestiones.component';
import { ConfirmacionComponent } from './components/modales/confirmacion/confirmacion.component';


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
    PopoverComponent,
    ModalNuevaReservaComponent,
    MenuInicialComponent,
    IngresoRutComponent,
    PacienteEncontradoComponent,
    BotoneraAccionesReservaComponent,
    CarruselPacientesComponent,
    ApartadoBxmedicoComponent,
    ResumenMedicoComponent,
    ModalScheduledFailComponent,
    ApartadoBxespecialidadComponent,
    ResumenExamenComponent,
    ReservaHoraprecioComponent,
    BotoneraAccionesMenuComponent,
    InfoPacienteEncontradoComponent,
    CalendarioExtendidoComponent,
    ModalIndicationsBack2newComponent,
    ModalCvDoctorComponent,
    ModalCvDoctorHComponent,
    CarruselMesComponent,
    ModalReservaAbiertaComponent,
    LoginComponent,
    PacienteNoEncontradoComponent,
    EditarPacienteComponent,
    AgendarPacienteComponent,
    CrearPacienteComponent,
    TableAgendadoComponent,
    MenuAsignadosComponent,
    TableAsignadosComponent,
    FiltroCalendarioComponent,
    FiltroEmbudoComponent,
    ColumnaPromocionesComponent,
    MenuPromocionesComponent,
    ResumenGestionesComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    TabModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
