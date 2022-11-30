import React, { useRef } from 'react';

import { ReactComponent as Bubble1 } from "../images/bubble/bubble1.svg";
import { ReactComponent as Bubble2 } from "../images/bubble/bubble2.svg";
import { ReactComponent as Bubble3 } from "../images/bubble/bubble3.svg";
import { ReactComponent as Bubble4 } from "../images/bubble/bubble4.svg";
import { ReactComponent as Bubble5 } from "../images/bubble/bubble5.svg";
import { styled } from 'styled-components';




function SpeechBubble() {

  const bubble2 = React.useRef(null);

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

  // canvas.onmousedown = function(){
  //   var canvas = canvasId.current;
  //   var ctx = canvas.getContext('2d');

  //   canvas.onmousemove = function(event){
      
  //     var x = event.clientX - ctx.canvas.offsetLeft;
  //     var y = event.clientY - ctx.canvas.offsetTop;
      
  //     createBubble(x, y, width, height);
  //   }
  // }
  

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
  
    return (
      <>
          <input className="inputbox" type="text" placeholder="말풍선 검색"></input>
          
          <div className="bubbleBox">
            <Bubble1 height="5rem" width="8rem" style={{background: 'gray'}}
                    onClick={() => {
                      createBubble(x, y, width=500, height=500);
                    }}/>
            <Bubble2 ref={bubble2} height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble3 height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble4 height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble5 height="5rem" width="8rem" style={{background: 'gray'}}/>

          </div>


      </>
    );
  }


  
  export default SpeechBubble;
  
  