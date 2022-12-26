import React from 'react';

import Frame1 from "../images/frame/Frame1.svg"
import Frame2 from "../images/frame/Frame2.svg"

// css 파일
import "../styles/css/frame.css";

function Frame() {
  return (
    <>
      <section>
        <div className="frame_box">
          <button id='frame1' type="button"><img src={Frame1} alt="Frame1"></img></button>
          <button id="frame2" type="button"><img src={Frame2} alt="Frame1"></img></button>
        </div>
      </section>
    </>
  );
}

export default Frame;