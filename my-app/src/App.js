import React from 'react';
import './App.css';

function App() {
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
                <input type="" class="form-control" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Masa</label>
                <input type="" class="form-control" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">L</label>
                <input type="" class="form-control" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Altura Inicial</label>
                <input type="" class="form-control" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Altura Final</label>
                <input type="" class="form-control" />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Constante</label>
                <input type="" class="form-control" />
              </div>

              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-dark">Submit</button>
                <button class="btn btn-dark">Reset</button>
              </div>

              </form>
            </div>
            <div class="col align-self-center text-alignment">
              <img alt="gatito" src="https://cf.ltkcdn.net/gatos/images/orig/236641-1600x1030-etapas-desarrollo-gatitos.jpg" class="rounded-circle small-size"/>
              <h1>Tiro Parabólico</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
