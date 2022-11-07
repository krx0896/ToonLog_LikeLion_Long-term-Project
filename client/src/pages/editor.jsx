import React from "react";

// 이미지 파일
import logo from "../images/logo.png";
import layoutIcon from "../images/icon/layout.png";
import cameraIcon from "../images/icon/camera.png";
import messageIcon from "../images/icon/message.png";
import textIcon from "../images/icon/text.png";
import saveIcon from "../images/icon/save.png";
import shareIcon from "../images/icon/share.png";
import downloadIcon from "../images/icon/download.png";

// css 파일
import "../styles/css/editor.css";

const editor = () => {
  return (
    <div id="editor">
      <header>
        <div class="r_IconBox iconBox">
          <button class="layout" type="button">
            <img src={layoutIcon} alt="layout.png" />
          </button>
          <button class="camera" type="button">
            <img src={cameraIcon} alt="camera.png" />
          </button>
          <button class="message" type="button">
            <img src={messageIcon} alt="message.png" />
          </button>
          <button class="text" type="button">
            <img src={textIcon} alt="text.png" />
          </button>
        </div>
        <div class="logo">
          <img src={logo} alt="logo.png" />
        </div>
        <div class="l_IconBox iconBox">
          <button class="save" type="button">
            <img src={saveIcon} alt="save.png" />
          </button>
          <button class="share" type="button">
            <img src={shareIcon} alt="share.png" />
          </button>
          <button class="download" type="button">
            <img src={downloadIcon} alt="download.png" />
          </button>
        </div>
      </header>
      <section>
        <div class="sectionBox">
          <div class="sidebar">사이드 바</div>
          <div class="editor">에디터 창</div>
        </div>
      </section>
    </div>
  );
};

export default editor;
