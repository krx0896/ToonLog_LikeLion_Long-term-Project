import { useState } from 'react';

// svg 파일
import { ReactComponent as ColorIcon } from "../images/icon/background-color.svg";
import { ReactComponent as BoldIcon } from "../images/icon/text-bold.svg";
import { ReactComponent as ItalicIcon } from "../images/icon/text-italic.svg";
import { ReactComponent as UnderlineIcon } from "../images/icon/text-underline.svg";

// css 파일
import "../styles/css/text.css";

function Text({getFont, getSize, getIsBold, getIsItalic, getIsUnderline}) {

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <>
      <div className="firstLine">
        <form method="post">
          <select name='font' className="font" onChange={(e) => getFont(e.target.value)}>
            <option value='inter'>Inter</option>
            <option value='font2'>font2</option>
            <option value='font3'>font3</option>
          </select>
          <select name='size' className="size" onChange={(e) => getSize(e.target.value)}>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12' selected>12</option>
            <option value='14'>14</option>
            <option value='18'>18</option>
            <option value='24'>24</option>
            <option value='36'>36</option>
            <option value='48'>48</option>
          </select>
        </form>
      </div>
      <div className="secondLine">
        <div className="firstPiece">
          <button 
          className="b" 
          onClick={() => {setIsBold(!isBold); {getIsBold(isBold);}}} 
          style={{backgroundColor: isBold ? "orange" : "transparent"}}>
            <BoldIcon/>
          </button>
          <button 
          className="i" 
          onClick={() => {setIsItalic(!isItalic); {getIsItalic(isItalic);}}} 
          style={{backgroundColor: isItalic ? "orange" : "transparent"}}>
            <ItalicIcon/>
          </button>
          <button 
          className="u" 
          onClick={() => {setIsUnderline(!isUnderline); {getIsUnderline(isUnderline);}}} 
          style={{backgroundColor: isUnderline ? "orange" : "transparent"}}>
            <UnderlineIcon />
          </button>
        </div>
        <div className="secondPiece">
          <button>
            <div className='colorIcon'><ColorIcon/></div>
            <div className='rect'></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Text;