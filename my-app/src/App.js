import React from 'react';
import './App.css';
import Chart from 'chart.js';

window.onload = function() {
  var ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Iteracion 1", "Iteracion 2", "Iteracion 3", "Iteracion 4", "Iteracion 5", "Iteracion 6", "Iteracion 7", "Iteracion 8", "Iteracion 9", "Iteracion 10", "Iteracion 11", "Iteracion 12"],
      datasets: [{
        label: "Angulo",
        data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10],
        borderWidth: 1
      }]
    }
  })
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      g: 0, 
      m: 0, 
      l: 0, 
      h0: 0, 
      hf: 0, 
      k: 0,
      resultado: ""
    };
    this.handleChangeGravedad = this.handleChangeGravedad.bind(this);
    this.handleChangeMasa = this.handleChangeMasa.bind(this);
    this.handleChangel = this.handleChangel.bind(this);
    this.handleChangeh0 = this.handleChangeh0.bind(this);
    this.handleChangehf = this.handleChangehf.bind(this);
    this.handleChangek = this.handleChangek.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  handleChangeGravedad(event) {
    this.setState({g: event.target.value});
  }

  handleChangeMasa(event) {
    this.setState({m: event.target.value});
  }

  handleChangel(event) {
    this.setState({l: event.target.value});
  }

  handleChangeh0(event) {
    this.setState({h0: event.target.value});
  }

  handleChangehf(event) {
    this.setState({hf: event.target.value});
  }

  handleChangek(event) {
    this.setState({k: event.target.value});
  }

  onClickReset() {
    this.setState({
      g: 0,
      m: 0,
      l: 0,
      h0: 0,
      hf: 0,
      k: 0,
      resultado: ""
    })
  }

  onClickSubmit() {
    if (this.state.l === 0) {
      if (this.state.hf > this.state.h0) {
        this.setState({resultado:"x=100, angulo=90"});
      } else {
        this.setState({resultado:"x=0, angulo=0"});
      }
    } else {
      let angulo = Math.atan((this.state.hf-this.state.h0)/this.state.l)
      let fAngulo = this.state.h0-this.state.hf+(this.state.l*Math.tan(angulo))-((this.state.m*this.state.g*(this.state.l**2))/(2*this.state.k)) * (1/Math.cos(angulo)**2)
      let fPrimaAngulo = this.state.l*(1/Math.cos(angulo)**2)-(this.state.m*this.state.g*(this.state.l**2)*(1/Math.cos(angulo)**2)*Math.tan(angulo))/this.state.k
      angulo = angulo - (fAngulo/fPrimaAngulo)
      let presenteAngulo = angulo
      let anteriorAngulo = angulo +0.5
      while (Math.abs(presenteAngulo-anteriorAngulo) >= 0.00005) {
        fAngulo= this.state.h0-this.state.hf+(this.state.l*Math.tan(presenteAngulo))-((this.state.m*this.state.g*(this.state.l**2))/(2*this.state.k)) * (1/Math.cos(presenteAngulo)**2)
        fPrimaAngulo = this.state.l*(1/Math.cos(presenteAngulo)**2)-(this.state.m*this.state.g*(this.state.l**2)*(1/Math.cos(presenteAngulo)**2)*Math.tan(presenteAngulo))/this.state.k
        anteriorAngulo = presenteAngulo
        presenteAngulo = presenteAngulo - (fAngulo/fPrimaAngulo)
      }
      this.setState({resultado:"x=100, angulo=" +presenteAngulo});
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
        <h2 className="white-color">Tiro Parabólico</h2>
        </nav>
        <div className="container">
            <div className="row row-cols-2">
              <div className="col align-self-center">
              <br/>
              <br/>
              <form>
  
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Gravedad</label>
                  <input type="" className="form-control" value={this.state.g} onChange={this.handleChangeGravedad}/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Masa</label>
                  <input type="" className="form-control" value={this.state.m} onChange={this.handleChangeMasa}/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">L</label>
                  <input type="" className="form-control" value={this.state.l} onChange={this.handleChangel}/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Altura Inicial</label>
                  <input type="" className="form-control" value={this.state.h0} onChange={this.handleChangeh0}/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Altura Final</label>
                  <input type="" className="form-control" value={this.state.hf} onChange={this.handleChangehf}/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Constante</label>
                  <input type="" className="form-control" value={this.state.k} onChange={this.handleChangek}/>
                </div>
  
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-dark" onClick={this.onClickSubmit}>Submit</button>
                  <button type="button" className="btn btn-dark" onClick={this.onClickReset}>Reset</button>
                </div>
  
                </form>
              </div>
              <div className="col align-self-center text-alignment">
              <p className="text-alignment">{this.state.resultado}</p>
              <div className="chart-size">
                <canvas id="myChart"></canvas>
              </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
      </div>
    );
  }
}

export default App;
