import React, { useState } from 'react';

import { ReactComponent as Bubble1 } from "../images/bubble/bubble1.svg";
import { ReactComponent as Bubble2 } from "../images/bubble/bubble2.svg";
import { ReactComponent as Bubble3 } from "../images/bubble/bubble3.svg";
import { ReactComponent as Bubble4 } from "../images/bubble/bubble4.svg";
import { ReactComponent as Bubble5 } from "../images/bubble/bubble5.svg";
import { styled } from 'styled-components';




function SpeechBubble(getIsCreateBubble) {

  const [isCreateBubble, setIsCreateBubble] = useState(false);

  const img = new Image();
  img.src = "bubble/bubble1-squ.png";
  
    return (
      <>
          <input className="inputbox" type="text" placeholder="말풍선 검색"></input>
          
          <div className="bubbleBox">
            <Bubble1 height="5rem" width="8rem" style={{background: 'gray'}}
                    onClick={() => {
                      setIsCreateBubble(!isCreateBubble);
                      {getIsCreateBubble(!isCreateBubble)}}}
            />
            <Bubble2 height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble3 height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble4 height="5rem" width="8rem" style={{background: 'gray'}}/>
            <Bubble5 height="5rem" width="8rem" style={{background: 'gray'}}/>

          </div>


      </>
    );
  }


  
  export default SpeechBubble;
  
  