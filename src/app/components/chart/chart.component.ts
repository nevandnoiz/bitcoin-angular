import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartName: string
  @Input() color: string

  constructor(
    private bitcoinService: BitcoinService) { }

  loaded: boolean = false;
  title: string
  description: string
  type: string = 'Line';
  data: any[]
  options

  ngOnInit() {
    if (this.chartName === "marketPrice") {
      this.bitcoinService.getMarketPrice().subscribe(chart => {
        this.chartInit(chart)
      })
    } else if (this.chartName === "confirmedTransact") {
      this.bitcoinService.getConfirmedTransactions().subscribe(chart => {
        this.chartInit(chart)
      })
    }
  }

  chartInit(chart) {
    this.title = chart.name
    this.options = {
      colors: [this.color],
    }
    this.description = chart.description
    this.data = this.createChartData(chart)
    this.loaded = true
  }

  createChartData(chart) {
    let data = chart.values
    let newData = data.map(value => ['', value.y])
    return newData
  }

}
