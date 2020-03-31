import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
    {
    "name": "UK",
    "value": 6200000
  }
];

@Component({
  selector: 'app-skill-monitoring',
  templateUrl: './skill-monitoring.component.html',
  styleUrls: ['./skill-monitoring.component.css']
})
export class SkillMonitoringComponent implements OnInit {

  skills:any[]
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  skillsChart = [
    {
      "name": "Customer Relations",
      "value": 10
    },
    {
      "name": "SEO",
      "value": 4
    },
    {
      "name": "Aggressive Marketing",
      "value": 7
    },
      {
      "name": "HSE",
      "value": 3
    }
  ];

  showTable=true;

  constructor() {
    // Object.assign(this, { single });
   }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(){
    this.skills = [
      {
        employeeName:'Adigun Ibrahim',
        skills:5,
        certifiedSkills:3
      },
      {
        employeeName:'Adigun Adedotun',
        skills:4,
        certifiedSkills:2
      },
      {
        employeeName:'Adigun Akanni',
        skills:10,
        certifiedSkills:7
      },
      {
        employeeName:'Adigun Omotojola',
        skills:2,
        certifiedSkills:1
      },
      
    ]
  }



  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
