import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null, content: "" };
  }

  renderButton() {
    if (this.state.file !== null) {
      return (<button onClick={() => {
        var reader = new FileReader();
        reader.readAsText(this.state.file);
        reader.onload = () => {
          this.setState({
            content: reader.result
          });
        }
      }
      }
      >
        Read File
        </button>
      );
    }
  }
  render() {
    return (<div >
      <input type="file" name="myFile" onChange={e => this.setState({ file: e.target.files[0] })} />

      {this.renderButton()}
      {this.state.content}
    </div>
    );
  }
}

export default App;
