import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { LayoutModule } from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HostComponent } from './host/host.component';
import { BoardComponent } from './board/board.component';
import { BoardCreatorDialogComponent } from './board-creator-dialog/board-creator-dialog.component';
import { MysquarezComponent } from './mysquarez/mysquarez.component';
import { OpenBoardzComponent } from './open-boardz/open-boardz.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewBoardComponent } from './view-board/view-board.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HostComponent,
    BoardComponent,
    BoardCreatorDialogComponent,
    MysquarezComponent,
    OpenBoardzComponent,
    ProfileComponent,
    ViewBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
    //LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
