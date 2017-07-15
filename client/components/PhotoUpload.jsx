import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const chain = (array, func, cb) => {
  let fin = 0;
  const finCheck = () => {
    fin++;
    if (fin === array.length) {
      if (cb) {
        cb();
      }
    } else {
      func(array[fin], finCheck);
    };
  };
  func(array[fin], finCheck);
};

class PhotoUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      uploading: false,
    };
    this.upload = this.upload.bind(this);
  }

  uploadMult(files) {
    chain(files, this.upload)
  }

  upload(file, cb) {
    this.setState({ uploading: true });
    axios.post('/photo', file, {
      headers: {
        'Content-Type': file.type,
      }})
      .then((res) => {
        this.setState({
          uploading: false,
        }, () => {
          if (cb) {
            cb();
          }
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
      return (<div className="upload-btns">
        <label className="cameraInput">
          <input
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
        </label>
        <label className="cameraInput">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              this.uploadMult(e.target.files);
            }}
          />
          <img
            src="assets/file_upload.svg"
            alt=""
          />
        </label>
      </div>);
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
