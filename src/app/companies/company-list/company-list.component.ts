import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from 'src/app/shared/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }
}
