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

  return (
    <div id="editor">
      <header>
        <div className="r_IconBox iconBox">
          <button className="layout" type="button">
            <img src={layoutIcon} alt="layout.png" />
          </button>
          <button className="camera" type="button">
            <img src={cameraIcon} alt="camera.png" />
          </button>
          <button className="message" type="button">
            <img src={messageIcon} alt="message.png" />
          </button>
          <button className="text" type="button">
            <img src={textIcon} alt="text.png" />
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
            <Frame />
            <Picture />
            <SpeechBubble />
            <Text />
          </div>
          <div className="editor">에디터 창</div>

        </div>
      </section>
    </div>
  );
};