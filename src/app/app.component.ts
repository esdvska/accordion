import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DxAccordionModule,
  DxListComponent,
  DxListModule,
} from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxAccordionModule, DxListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(DxListComponent, { static: false }) assignList!: DxListComponent;

  @ViewChild(DxListComponent, { static: false })
  documentStatusesList!: DxListComponent;

  title = 'accordion';

  documentAssignedFilters = [
    { id: 0, text: 'Assigned to to me' },
    { id: 1, text: 'Assigned' },
    { id: 2, text: 'Unassigned' },
  ];
  documentStatuses = [
    { id: 0, text: 'Status 0' },
    { id: 1, text: 'Status 1' },
    { id: 2, text: 'Status 2' },
  ];
  selectedAssignedKeys = [{ id: 1, text: 'Assigned' }];
  selectedStatusKeys = [{ id: 0, text: 'Status 0' }];

  ngAfterViewInit() {
    this.assignList.instance.selectItem(this.selectedAssignedKeys[0].id);
    this.documentStatusesList.instance.selectItem(
      this.selectedStatusKeys[0].id
    );
  }
}
