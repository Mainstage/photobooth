import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uploading: false,
    };
    this.upload = this.upload.bind(this);
  }

  upload(file) {
    this.setState({ uploading: true });
    axios.post('/photo', file, {
      headers: {
        'Content-Type': file.type
      }})
      .then((res) => {
        this.setState({
          uploading: false,
        });
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          uploading: false,
        })
      });
  }

  render() {
    const { loading } = this.state;
    const btn = (load) => {
      if (load) {
        return (<img
          className="loading"
          src="assets/loading.gif"
          alt=""
        />);
      }
      return (<label className="cameraInput">
        <input
          name="camera"
          id="camera"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={(e) => {
            this.upload(e.target.files[0])
          }}
        />
        <img
          src="assets/ic_camera.svg"
          alt=""
        />
      </label>);
    };
    return (
      <div>
        <div className="BG" />
        <h1 className="header">Take a Picture!</h1>
        {btn(loading)}
      </div>
    );
  }
}

export default App;
