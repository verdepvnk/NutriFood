import React, { Component } from "react";
import review from "../../requisicao/reviewReq";
import ReactApexChart from "react-apexcharts";

const objeto = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
};

review().then((Object) => {
  for (const element of Object) {
    if (element.saborDaRefeicao == 1) {
      objeto.a++;
    }
    if (element.saborDaRefeicao == 2) {
      objeto.b++;
    }
    if (element.saborDaRefeicao == 3) {
      objeto.c++;
    }
    if (element.saborDaRefeicao == 4) {
      objeto.d++;
    }
    if (element.saborDaRefeicao == 5) {
      objeto.e++;
    }
  }
});

class GraficoSaborDaRefeicao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [objeto.a, objeto.b, objeto.c, objeto.d, objeto.e],
      options: {
        chart: {
          type: "pie",
        },
        labels: [1, 2, 3, 4, 5],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
        />
      </div>
    );
  }
}
export default GraficoSaborDaRefeicao;
