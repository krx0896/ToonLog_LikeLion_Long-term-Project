import React, { useState } from 'react';

import "../styles/css/picture.css";

const Picture = () => {

    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState('');
    const [enters, setEnters] = useState([]);

    // 파일 저장
    const saveFileImage = e => {
      setEnters(enters => [...enters, URL.createObjectURL(e.target.files[0])]);
      setFileImage(URL.createObjectURL(e.target.files[0]));
      console.log(enters);
      console.log(fileImage);
    };
  
    // 파일 삭제
    // const deleteFileImage = () => {
    //   URL.revokeObjectURL(fileImage);
    //   setFileImage("");
    // };

    return (
      <>
        <div className="imgFile-container">
          <input name="imgUpload" type="file" accept="image/*"
            onChange={saveFileImage}
          />
                {/* 
                <button
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    width: "55px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteFileImage()}
                >
                  삭제
                </button> */}

            <div className="imgFile-content-container">
                {fileImage && (
                  enters.map(ent => (<img src={ent} alt="imgFile" className="imgFile-content"/>))
                )}
                {/* {fileImage && (
                <img
                  alt="img"
                  src={fileImage}
                  style={{height:"50px"}}
                />
              )} */}
            </div>
        </div>
      </>
    );
}

export default Picture;