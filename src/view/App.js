import "./App.css";
// import logo from "./logo.svg";

function App() {
  const fileHandle = () => {
    var pathName = document.getElementById("browse-file-button").value;
    var spanText = document.getElementById("file-name");
    console.log(pathName);

    if (!formatValidade(pathName)) {
      return false;
    }

    const pathSplit = pathName.split("\\");
    const selectedFileName = pathSplit[pathSplit.length - 1];

    spanText.innerHTML = selectedFileName;
  };

  function formatValidade(file) {
    var fileSplit = file.split(".");
    if (fileSplit[fileSplit.length - 1] !== "txt") {
      alert("Incorrect format, please upload a txt file.");
      return false;
    }
    return true;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-drop-file-box">
          <div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <p>Drag and Drop your txt here</p>
          </div>
        </div>
        <p>Or</p>
        <input type="file" id="browse-file-button" onChange={fileHandle} />
        <label className="App-browse-file-button" htmlFor="browse-file-button">
          Browse File
        </label>
        <span id="file-name">Selected File</span>
      </header>
    </div>
  );
}

export default App;
