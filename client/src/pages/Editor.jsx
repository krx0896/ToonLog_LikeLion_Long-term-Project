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
import spLogo from '../images/splash/splash_logo.gif';

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

    switch (btn) {
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
  };

  // -------------------------- 민혁 파트 -------------------------

  const [ ctxValue, setCtx ] = useState();
  const canvasId = React.useRef(null);

  let locationSet = 650
  var bubbleWidth = [584, 100, 200];
  var bubbleHeight = [382, 100, 200];
  var buubleTrue = [false]

  var bubble1X = 0;
  var bubble1Y = 0;

  var mouseOn_x = 0;
  var mouseOn_y = 0;

  const img = new Image();
  
  img.src = "bubble/bubble.png";

  useEffect(() => {
    
    var canvas = canvasId.current;
    var ctx = canvas.getContext("2d");

    setCtx(ctx);

    const createBubble = (x, y, width, height) => {

      var sidebarWidth = document.querySelector('.sidebar').offsetWidth;
    
      canvas.onmousedown = (event) => {
        mouseOn_x = event.clientX - sidebarWidth- ctx.canvas.offsetLeft;
        mouseOn_y = event.clientY - 65 - ctx.canvas.offsetTop;

        if ((buubleTrue[0] == true)
          && (bubble1X-bubbleWidth[0]/2 <= mouseOn_x  && mouseOn_x <= bubble1X+bubbleWidth[0]/2)
          && (bubble1Y-bubbleHeight[0]/2 <= mouseOn_y  && mouseOn_y <= bubble1X+bubbleHeight[0]/2)) {
            console.log("mouseX : ", mouseOn_x)
            console.log("mouseY : ", mouseOn_y)
            console.log("bubble X : ", bubble1X-bubbleWidth[0]/2)
            console.log("bubble Y : ", bubble1Y-bubbleHeight[0]/2)
            

            ctx.clearRect(bubble1X-bubbleWidth[0]/2, bubble1Y-bubbleHeight[0]/2, bubbleWidth[0], bubbleHeight[0]);

            canvas.onmouseup = (event) => {
              mouseOn_x = event.clientX - sidebarWidth- ctx.canvas.offsetLeft;
              mouseOn_y = event.clientY - 65 - ctx.canvas.offsetTop;
        
              ctx.drawImage(img, mouseOn_x-bubbleWidth[0]/2, mouseOn_y-bubbleHeight[0]/2, bubbleWidth[0], bubbleHeight[0]);
              console.log("draw X : ", mouseOn_x-bubbleWidth[0]/2, "draw Y : ", mouseOn_y-bubbleHeight[0]/2)
              bubble1X=mouseOn_x;
              bubble1Y=mouseOn_y;
            }
        }

      }
    }
    });

  const createBubble = () => {

    // ctx.clearRect(locationSet, locationSet, bubbleWidth[0], bubbleWidth[0]);
    ctxValue.drawImage(img, (locationSet-(bubbleWidth[0]/2)), (locationSet-(bubbleHeight[0]/2)), bubbleWidth[0], bubbleHeight[0]);

    bubble1X = locationSet
    bubble1Y = locationSet
    buubleTrue[0] = true;

    // ctx.beginPath();
    // ctx.arc(x, y, 10, 0, 10*Math.PI);
    // ctx.stroke();
  
  }


  // canvas.onmousedown = function(event){
  //   var canvas = canvasId.current;
  //   var ctx = canvas.getContext('2d');
  //   var x = event.clientX - ctx.canvas.offsetLeft;
  //   var y = event.clientY - ctx.canvas.offsetTop;

  //   if (buubleTrue[0] == true
  //     && (bubble1X-bubbleWidth[0]/2 <= x <=bubble1X+bubbleWidth[0]/2)
  //     && (bubble1Y-bubbleHeight[0]/2 <= y <=bubble1Y+bubbleHeight[0]/2)) {
      
  //     console.log("yes")
  //   }
  // }

  // const canvasOnmousedown = (event) => {
  //   console.log();
  //   var canvas = canvasId.current;
  //   var ctx = canvas.getContext('2d');
  //   var x = event.clientX - ctx.canvas.offsetLeft;
  //   var y = event.clientY - ctx.canvas.offsetTop;

  //   if (buubleTrue[0] == true
  //     && (bubble1X-bubbleWidth[0]/2 <= x <=bubble1X+bubbleWidth[0]/2)
  //     && (bubble1Y-bubbleHeight[0]/2 <= y <=bubble1Y+bubbleHeight[0]/2)) {
      
  //   }


  //   canvas.onmousedown = function(){
  
  //     canvas.onmousemove = function(){
        
  //       // var x = event.clientX - ctx.canvas.offsetLeft;
  //       // var y = event.clientY - ctx.canvas.offsetTop;
        
  //       ctx.clearRect(x, y, width, height);
  //       createBubble(x, y, width, height);
  //       // console.log(x, y);
  //     }
  //   }
  // }

  // const removeBubble = () => {
  //   var canvas = canvasId.current;
  //   var ctx = canvas.getContext('2d');

  //   ctx.clearRect(x, y, 500, 500);
  //   ctx.beginPath();
  // }

  // -------------------------- 민혁 파트 끝 -------------------------

  // -------------------------- 정우 파트 -------------------------
  window.onload = () => {
    let frame1 = document.getElementById("frame1");
    let frame2 = document.getElementById("frame2");

    let canvas = canvasId.current;
    let ctx = canvas.getContext("2d");

    frame1.addEventListener("click", () => {
      // ctx.clearRect(0, 0, 1300, 1920);

      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(1290, 10);
      ctx.lineTo(1290, 480);
      ctx.lineTo(10, 480);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 510);
      ctx.lineTo(200, 510);
      ctx.lineTo(400, 1330);
      ctx.lineTo(10, 1330);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(230, 510);
      ctx.lineTo(930, 510);
      ctx.lineTo(860, 1330);
      ctx.lineTo(430, 1330);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(960, 510);
      ctx.lineTo(1290, 510);
      ctx.lineTo(1290, 1330);
      ctx.lineTo(890, 1330);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 1360);
      ctx.lineTo(530, 1360);
      ctx.lineTo(530, 1910);
      ctx.lineTo(10, 1910);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(560, 1360);
      ctx.lineTo(1290, 1360);
      ctx.lineTo(1290, 1910);
      ctx.lineTo(560, 1910);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();
    });

    frame2.addEventListener("click", () => {
      ctx.clearRect(0, 0, 1300, 1920);

      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(1290, 10);
      ctx.lineTo(1290, 600);
      ctx.lineTo(10, 600);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 630);
      ctx.lineTo(350, 630);
      ctx.lineTo(450, 950);
      ctx.lineTo(10, 950);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(380, 630);
      ctx.lineTo(1290, 630);
      ctx.lineTo(1290, 950);
      ctx.lineTo(480, 950);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 980);
      ctx.lineTo(1290, 980);
      ctx.lineTo(1290, 1100);
      ctx.lineTo(10, 1600);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 1630);
      ctx.lineTo(850, 1300);
      ctx.lineTo(850, 1910);
      ctx.lineTo(10, 1910);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(880, 1290);
      ctx.lineTo(1290, 1130);
      ctx.lineTo(1290, 1910);
      ctx.lineTo(880, 1910);
      ctx.closePath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "black";
      ctx.stroke();
    });
  };

  // -------------------------- 정우 파트 끝 -------------------------

  // -------------------------- 윤 파트 -------------------------

  const [font, setFont] = useState("sans-serif");
  const [size, setSize] = useState(20);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isOkClicked, setIsOkClicked] = useState(false);
  const [isClr, setIsClr] = useState("");

  const getFont = (font) => {
    setFont(font);
  };
  const getSize = (size) => {
    setSize(size);
  };
  const getIsBold = (isBold) => {
    setIsBold(isBold);
  };
  const getIsItalic = (isItalic) => {
    setIsItalic(isItalic);
  };
  const getIsUnderline = (isUnderline) => {
    setIsUnderline(isUnderline);
  };
  const getIsOkClicked = (isOkClicked) => {
    setIsOkClicked(isOkClicked);
  };
  const getIsClr = (isClr) => {
    setIsClr(isClr);
  };

  var hasInput = false;

  const createText = (e) => {
    if (hasInput) return;
    addInput(60, 40);
  };

  if (isOkClicked) {
    createText();
  }

  function addInput(x, y) {
    var textbox = document.createElement("div");
    textbox.id = "textbox";

    var input = document.createElement("textarea");
    input.id = "inputbox";

    textbox.appendChild(input);

    input.style.position = "absolute";

    input.style.left = x - 4 + "%";
    input.style.top = y - 4 + "%";

    input.style.fontFamily = font;
    input.style.fontSize = size + "px";
    input.style.color = isClr;
    input.style.width = "150px";
    input.style.height = "80px";
    input.style.resize = "none";

    input.onkeydown = handleEnter;
    document.body.appendChild(textbox);
    hasInput = true;
  }

  function handleEnter(e) {
    var keyCode = e.keyCode;
    var inputbox = document.getElementById("inputbox");
    let posX = 0;
    let posY = 0;
    inputbox.style.fontFamily = font;
    inputbox.style.fontSize = size + "px";

    if (keyCode === 13) {
      const inputbox = document.getElementById("inputbox");
      const textbox = document.getElementById("textbox");
      var canvas = canvasId.current;
      inputbox.readOnly = true;

      function move(e) {
        // 클릭한 위치로 textarea 이동
        posX = e.clientX;
        posY = e.clientY;
        inputbox.style.left = posX - 75 + "px";
        inputbox.style.top = posY - 40 + "px";
      }

      function fix(e) {
        // (http://www.soen.kr/html5/html3/4-2-4.htm)

        if (posX == 0 && posY == 0) {
          posX = inputbox.getBoundingClientRect().left + 75;
          posY = inputbox.getBoundingClientRect().top + 40;
        }
        const tmp = canvas.getBoundingClientRect();
        const tmpX = (posX - tmp.left) * (canvas.width / tmp.width);
        const tmpY = (posY - tmp.top) * (canvas.height / tmp.height);

        drawText(this.value, tmpX - 220, tmpY - 105);

        document.body.removeChild(textbox);
        hasInput = false;
      }
      canvas.onmousedown = move;
      inputbox.onclick = fix;
    }
  }

  function drawText(txt, x, y) {
    var canvas = canvasId.current;
    var ctx = canvas.getContext("2d");
    var fontStyle = [];

    ctx.textBaseline = "top";
    ctx.textAlign = "left";

    if (isItalic) {
      fontStyle.push("italic ");
    }
    if (isBold) {
      fontStyle.push("bold ");
    }

    fontStyle.push(size * 3 + "px " + font);
    fontStyle = fontStyle.join("");
    ctx.font = fontStyle;
    ctx.fillStyle = isClr;

    if (isUnderline) {
      var dim = ctx.measureText(txt).width;
      ctx.fillRect(x - 4, y - 4 + 45, dim, 2);
    }

    ctx.fillText(txt, x - 4, y - 4);
    setIsOkClicked(false);
  }

  // down
  const down = () => {
    var canvas = document.getElementById('canvas');
    var image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");  

    const $link = document.createElement("a");
    $link.download = `cartoonLog.jpg`;
    $link.href = canvas.toDataURL("image/png");
    $link.click();
  }

  // splash 
  const splash = useRef(null);

  setTimeout(function() {
    splash.current.remove();
  }, 5800);

  // -------------------------- 윤 파트 끝 -------------------------

  return (
    <div id="editor">
      <div id="splash" ref={splash}>
        <img id="spLogo" src={spLogo} />
      </div>
      <header>
        <div className="r_IconBox iconBox">
          <button className="layout" type="button" onClick={() => btnControl("Frame")}>
            {frameBtn ? <img src={layoutIcon} /> : <img src={layoutIcon2} />}
          </button>
          <button className="camera" type="button" onClick={() => btnControl("Picture")}>
            {pictureBtn ? <img src={cameraIcon2} /> : <img src={cameraIcon} />}
          </button>
          <button className="message" type="button" onClick={() => btnControl("Bubble")}>
            {bubbleBtn ? <img src={messageIcon2} /> : <img src={messageIcon} />}
          </button>
          <button
            className="text"
            type="button"
            onClick={() => {
              btnControl("Text");
            }}
          >
            {textBtn ? <img src={textIcon2} /> : <img src={textIcon} />}
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="logo.png" style={{width: '100px', height: '56px'}}/>
        </div>
        <div className="l_IconBox iconBox">
          <button className="save" type="button">
            <img src={saveIcon} alt="save.png" />
          </button>
          <button className="share" type="button"
                  onClick={() => {
                    createBubble();
                  }}
                  >
            <img src={shareIcon} alt="share.png" />
          </button>
          <button
            className="download"
            type="button"
            onClick={() => {
              down();
            }}
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
            {textBtn && (
              <Text
                getFont={getFont}
                getSize={getSize}
                getIsBold={getIsBold}
                getIsItalic={getIsItalic}
                getIsUnderline={getIsUnderline}
                getIsOkClicked={getIsOkClicked}
                isOk={isOkClicked}
                getIsClr={getIsClr}
              />
            )}
          </div>
          <div className="editor">
            <body>
                <canvas
                width="1300px"
                height="1920px"
                ref={canvasId}
                className="canvas"
                id="canvas"
                style={{ width: "434px", height: "640px", backgroundColor: "white" }} // * width:height 비율 꼭 1300:1920 비로 맞춰주세요!
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
