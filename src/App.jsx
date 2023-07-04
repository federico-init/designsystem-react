import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
        <div className="col-1">col1</div>
      </div>
      <div className="row">
        <div className="col-2">col2</div>
        <div className="col-2">col2</div>
        <div className="col-2">col2</div>
        <div className="col-2">col2</div>
        <div className="col-2">col2</div>
        <div className="col-2">col2</div>
      </div>
      <div className="row">
        <div className="col-3">col3</div>
        <div className="col-3">col3</div>
        <div className="col-3">col3</div>
        <div className="col-3">col3</div>
      </div>
      <div className="row">
        <div className="col-4">col4</div>
        <div className="col-4">col4</div>
        <div className="col-4">col4</div>
      </div>
      <div className="row">
        <div className="col-5">col5</div>
        <div className="col-7">col7</div>
      </div>
      <div className="row">
        <div className="col-12">col12</div>
      </div>

      <hr />
      <hr />

      <div className="row">
        <div className="col-xs-6 col-sm-2 col-md-4">A</div>
        <div className="col-xs-6 col-sm-6 col-md-4">B</div>
        <div className="col-xs-12 col-sm-4 col-md-4">C</div>
      </div>

      <hr />
      <hr />

      <div className="row-g">
        <div className="col-g-1">A</div>
        <div className="col-g-1">B</div>
      </div>
    </div>
  );
}

export default App;
