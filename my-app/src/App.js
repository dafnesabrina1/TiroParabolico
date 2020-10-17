import React from 'react';
import './App.css';
import Chart from 'chart.js';

window.onload = function() {
  var ctx = document.getElementById("myChart");
  var lineChart = new Chart(ctx, {
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
      k: 0 
    };
    this.handleChangeGravedad = this.handleChangeGravedad.bind(this);
    this.handleChangeMasa = this.handleChangeMasa.bind(this);
    this.handleChangel = this.handleChangel.bind(this);
    this.handleChangeh0 = this.handleChangeh0.bind(this);
    this.handleChangehf = this.handleChangehf.bind(this);
    this.handleChangek = this.handleChangek.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
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

  onClickReset(){
    this.setState({
      g: 0,
      m: 0,
      l: 0,
      h0: 0,
      hf: 0,
      k: 0
    })
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
        <h2 class="white-color">Tiro Parabólico</h2>
        </nav>
        <div class="container">
            <div class="row row-cols-2">
              <div class="col align-self-center">
              <br/>
              <br/>
              <form>
  
                <div class="form-group">
                  <label for="exampleInputEmail1">Gravedad</label>
                  <input type="" class="form-control" value={this.state.g} onChange={this.handleChangeGravedad}/>
                </div>
  
                <div class="form-group">
                  <label for="exampleInputPassword1">Masa</label>
                  <input type="" class="form-control" value={this.state.m} onChange={this.handleChangeMasa}/>
                </div>
  
                <div class="form-group">
                  <label for="exampleInputPassword1">L</label>
                  <input type="" class="form-control" value={this.state.l} onChange={this.handleChangel}/>
                </div>
  
                <div class="form-group">
                  <label for="exampleInputPassword1">Altura Inicial</label>
                  <input type="" class="form-control" value={this.state.h0} onChange={this.handleChangeh0}/>
                </div>
  
                <div class="form-group">
                  <label for="exampleInputPassword1">Altura Final</label>
                  <input type="" class="form-control" value={this.state.hf} onChange={this.handleChangehf}/>
                </div>
  
                <div class="form-group">
                  <label for="exampleInputPassword1">Constante</label>
                  <input type="" class="form-control" value={this.state.k} onChange={this.handleChangek}/>
                </div>
  
                <div class="d-flex justify-content-between">
                  <button type="submit" class="btn btn-dark">Submit</button>
                  <button class="btn btn-dark" onClick={this.onClickReset}>Reset</button>
                </div>
  
                </form>
              </div>
              <div class="col align-self-center text-alignment">
                <img alt="gatito" src="https://cf.ltkcdn.net/gatos/images/orig/236641-1600x1030-etapas-desarrollo-gatitos.jpg" class="rounded-circle small-size"/>
                <h1>Tiro Parabólico</h1>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div class="chart-size">
            <canvas id="myChart"></canvas>
          </div>
      </div>
    );
  }
}

export default App;
