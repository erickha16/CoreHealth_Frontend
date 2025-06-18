import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-list.component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css',
})
export class ServicesListComponent {
  searchText: string = '';

  services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.serviceService.getServices().subscribe((data) => {
      this.services = data;
      console.log(data);
    });
  }

  get filteredServices(): Service[] {
    if (!this.searchText) {
      return this.services;
    }
    const lowerSearch = this.searchText.toLowerCase();
    return this.services.filter((s) =>
      s.name.toLowerCase().includes(lowerSearch)
    );
  }
}
