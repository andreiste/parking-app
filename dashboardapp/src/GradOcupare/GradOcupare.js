import React, {Component} from 'react';
import Chart from 'react-apexcharts';
import './GradOcupare.css';
import CrestereProcentuala from '../CrestereProcentuala/CrestereProcentuala';

class GradOcupare extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {
            chart: {
                height: 280,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#dcdcdc"
                  },
                  track:{
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      blur: 4,
                      opacity: 0.15
                    }
                  },
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      color: "#000",
                      fontSize: "15px",
                      fontWeight: "bold"
                    },
                    value: {
                      color: "#000",
                      fontSize: "30px",
                      fontWeight: "bold",
                      show: true
                    }
                  }
                }
              },
              fill: {
                type: "solid",
                colors: [function({ value, seriesIndex, w }) {
                    if(value < 20) {
                        return "#0B6623";
                    } else if (value >= 20 && value < 40) {
                        return "#3BB143";
                    } else if (value >= 40 && value < 60) {
                        return '#FFF200';
                    } else if (value >= 60 && value < 80){
                        return '#ED9121';
                    } else {
                        return '#C62121';
                    }
                  }]
              },
              stroke: {
                lineCap: "round"
              },
              labels: ["Grad de Ocupare"]
            }
            
        }
    }
    
    render() {
      return (
        <div className="grad-ocup">
          <Chart options={this.state.options} series={[this.props.ocupData.procentOcupare]} type="radialBar"/>
          <CrestereProcentuala data={this.props.ocupData.crestereProcentuala}/>
        </div>
      );
    
    }

}
    

export default GradOcupare;