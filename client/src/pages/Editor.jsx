import React, { useRef, useState, useEffect } from "react";

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




// css 파일
import "../styles/css/editor.css";

// components 파일
import Frame from "../components/Frame";
import Picture from "../components/Picture";
import SpeechBubble from "../components/SpeechBubble";
import Text from "../components/Text";


const Editor = () => {

  // Icon Button 관리
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

  // Text 기능
  const [font, setFont] = useState("inter");
  const [size, setSize] = useState(12);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const getFont = (font) => {
    setFont(font);
  }
  const getSize = (size) => {
    setSize(size);
  }
  const getIsBold = (isBold) => {
    setIsBold(isBold);
  }
  const getIsItalic = (isItalic) => {
    setIsItalic(isItalic);
  }
  const getIsUnderline = (isUnderline) => {
    setIsUnderline(isUnderline);
  }

  // canvas 기능
  
  // useEffect(() => {
  //   const canvasEle = canvas.current;
  //   canvasEle.width = canvasEle.clientWidth;
  //   canvasEle.height = canvasEle.clientHeight;

  //   ctx = canvasEle.getContext("2d");
  // }, []);

  // const writeText = (info, style = {}) => {
  //   const { text, x, y } = info;
  //   const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
  //   // const { fontSize = size, fontFamily = font, color = 'black', textAlign = 'left', textBaseline = 'top' } = style;

  //   ctx.beginPath();
  //   ctx.font = fontSize + 'px ' + fontFamily;
  //   ctx.textAlign = textAlign;
  //   ctx.textBaseline = textBaseline;
  //   ctx.fillStyle = color;
  //   ctx.fillText(text, x, y);
  //   ctx.stroke();
  // }

//   useEffect(() => {
//     writeText({ text: 'input box', x: 28, y: 70 });
//     writeText({ text: ~~~~value ~~~~, x: 18, y: 70 });
//     }, []);

// -------------------------- 민혁 파트 -------------------------
  
  const canvasId = React.useRef(null);

  var x = 300;
  var y = 300;
  var width;
  var height;
  var canvas;
  var ctx;
  const img = new Image();
  img.src = "bubble/bubble1-squ.png";


  const createBubble = (x, y, width, height) => {
    var canvas = canvasId.current;
    var ctx = canvas.getContext('2d');

    ctx.clearRect(x, y, width, height);
    ctx.beginPath();

    ctx.drawImage(img, x, y, width, height);
    
    return (width, height)
  }

  const canvasOnmousedown = () => {
    var canvas = canvasId.current;
    var ctx = canvas.getContext('2d');


    canvas.onmousedown = function(){
      var canvas = canvasId.current;
      var ctx = canvas.getContext('2d');
  
      canvas.onmousemove = function(event){
        
        var x = event.clientX - ctx.canvas.offsetLeft;
        var y = event.clientY - ctx.canvas.offsetTop;
        
        createBubble(x, y, width, height);
      }
    }
  }

  const removeBubble = () => {
    var canvas = canvasId.current;
    var ctx = canvas.getContext('2d');

    ctx.clearRect(x, y, 500, 500);
    ctx.beginPath();
  }

// -------------------------- 민혁 파트 끝 -------------------------


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
          <button className="save" type="button"
                  onClick={() => {
                    canvasOnmousedown();
                  }}
                  >
            <img src={saveIcon} alt="save.png" />
          </button>
          <button className="share" type="button"
                  onClick={() => {
                    createBubble(x, y, width=500, height=500);
                  }}
                  >
            <img src={shareIcon} alt="share.png" />
          </button>
          <button className="download" type="button"
                                    // onClick={() => {
                                    //   removeBubble();
                                    // }}
                                    >
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
            {textBtn && <Text
                            getFont={getFont}
                            getSize={getSize}
                            getIsBold={getIsBold}
                            getIsItalic={getIsItalic}
                            getIsUnderline={getIsUnderline}
                        />
            }
          </div>
          <div className="editor">
            <body>
                <canvas
                width="1300"
                height="1920"
                ref={canvasId}
                className="canvas"
                id="canvas"
                style={{ width: "440px", height: "580px", backgroundColor: "white" }}
                type="file"
                name="imageFile"
                accept="image/jpeg, image/jp, image/png"
                />
            </body>

          </div>

        </div>
      </section>
    </div>

  );
};


export default Editor;
