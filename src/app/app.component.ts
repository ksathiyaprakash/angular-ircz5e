import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
        <kendo-tilelayout [columns]="4" [rowHeight]="255" [resizable]="true" [reorderable]="true">
            <kendo-tilelayout-item title="Page Views" [col]="1" [colSpan]="3">
                <kendo-tilelayout-item-body>
                    <page-views-chart></page-views-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item  [col]="4">
                <kendo-tilelayout-item-body>
                    <h3>9%</h3>
                    <div>Visitor to Customer</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Most Visited Pages" [col]="1" [colSpan]="2">
                <kendo-tilelayout-item-body>
                    <most-visited-chart></most-visited-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Currently" [col]="3">
                <kendo-tilelayout-item-body>
                    <h3>2399</h3>
                    <div>Active users right now</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Visitors" [col]="4" [rowSpan]="2">
                <kendo-tilelayout-item-body>
                    <visitors-chart></visitors-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Users By Channel" [col]="1" [colSpan]="2" [rowSpan]="2">
                <kendo-tilelayout-item-body>
                    <users-grid></users-grid>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Bounce Rate" [col]="3">
                <kendo-tilelayout-item-body>
                    <h3>55%</h3>
                    <div>The percentage of all sessions on your site in which users viewed only a single page.</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Conversion This Month" [col]="3" [colSpan]="2">
                <kendo-tilelayout-item-body>
                    <conversion-chart></conversion-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>
        </kendo-tilelayout>
    `
})
export class AppComponent { }
