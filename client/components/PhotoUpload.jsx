import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class PhotoUpload extends React.Component {
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
        'Content-Type': file.type,
      }})
      .then((res) => {
        this.setState({
          uploading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          uploading: false,
        });
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
            this.upload(e.target.files[0]);
          }}
        />
        <img
          src="assets/ic_camera.svg"
          alt=""
        />
      </label>);
    };
    return (
      <div className="photo-container">
        <h1 className="header">Take a Picture!</h1>
        { btn(loading) }
        <Link
          to="/gallery"
        >
          <div className="link-to">
            <p>Gallery</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default PhotoUpload;
