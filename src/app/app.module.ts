import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { PageViewsChartComponent } from './page-views-chart.component';
import { MostVisitedChartComponent } from './most-visited-chart.component';
import { ConversionChartComponent } from './conversion-chart.component';
import { VisitorsChartComponent } from './visitors-chart.component';
import { UsersGridComponent } from './users-grid.component';

import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ChartsModule,
        GridModule
    ],
    declarations: [
        AppComponent,
        PageViewsChartComponent,
        MostVisitedChartComponent,
        ConversionChartComponent,
        VisitorsChartComponent,
        UsersGridComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
