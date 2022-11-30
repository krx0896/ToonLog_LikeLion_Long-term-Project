import React, { useState } from "react";

// 이미지 파일
import logo from "../images/logo.png";
import layoutIcon from "../images/icon/layout.png";
import cameraIcon from "../images/icon/camera.png";
import messageIcon from "../images/icon/message.png";
import textIcon from "../images/icon/text.png";
import saveIcon from "../images/icon/save.png";
import shareIcon from "../images/icon/share.png";
import downloadIcon from "../images/icon/download.png";
import cameraIcon2 from "../images/icon/camera-2.png";
import layoutIcon2 from "../images/icon/layout-2.png";
import messageIcon2 from "../images/icon/message-2.png";
import textIcon2 from "../images/icon/text-2.png";


// 말풍선 svg 파일
// import { ReactComponent as Bubble1 } from "../images/bubble/bubble1.svg";



// css 파일
import "../styles/css/editor.css";

// components 파일
import Frame from "../components/Frame";
import Picture from "../components/Picture";
import SpeechBubble from "../components/SpeechBubble";
import Text from "../components/Text";

const Editor = () => {

  const [frameBtn, setFrameBtn] = useState(true);
  const [pictureBtn, setPictureBtn] = useState(false);
  const [bubbleBtn, setBubbleBtn] = useState(false);
  const [textBtn, setTextBtn] = useState(false);

  const btnControl = (btn) => {
    setFrameBtn(false);
    setPictureBtn(false);
    setBubbleBtn(false);
    setTextBtn(false);

    switch(btn){
      case "Frame":
        setFrameBtn(true);
        break;
      case "Picture":
        setPictureBtn(true);
        break;
      case "Bubble":
        setBubbleBtn(true);
        break;
      case "Text":
        setTextBtn(true);
        break;
    }
  }

  return (
    <div id="editor">
      <header>
        <div className="r_IconBox iconBox">
          <button className="layout" type="button" onClick={()=>btnControl('Frame')}>
            {frameBtn ? <img src={layoutIcon} /> : <img src={layoutIcon2} />}
          </button>
          <button className="camera" type="button" onClick={()=>btnControl('Picture')} >
            {pictureBtn ? <img src={cameraIcon2} /> : <img src={cameraIcon} />}
          </button>
          <button className="message" type="button" onClick={()=>btnControl('Bubble')} >
            {bubbleBtn ? <img src={messageIcon2} /> : <img src={messageIcon} />}
          </button>
          <button className="text" type="button" onClick={()=>btnControl('Text')}>
            {textBtn ? <img src={textIcon2} /> : <img src={textIcon} />}
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="logo.png" />
        </div>
        <div className="l_IconBox iconBox">
          <button className="save" type="button">
            <img src={saveIcon} alt="save.png" />
          </button>
          <button className="share" type="button">
            <img src={shareIcon} alt="share.png" />
          </button>
          <button className="download" type="button">
            <img src={downloadIcon} alt="download.png" />
          </button>
        </div>
      </header>
      <section>
        <div className="sectionBox">

          <div className="sidebar">
            {frameBtn && <Frame />}
            {pictureBtn && <Picture />}
            {bubbleBtn && <SpeechBubble />}
            {textBtn && <Text />}
          </div>
          <div className="editor">
            <canvas className="canvas" id="canvas" style= {{width: '600px', height: '800px', backgroundColor: 'white' }} type='file' name='imageFile' accept='image/jpeg, image/jp, image/png'></canvas>


          </div>

        </div>
      </section>
    </div>
  );
};

export default Editor;