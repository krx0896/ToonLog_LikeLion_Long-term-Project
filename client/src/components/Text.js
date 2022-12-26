import { useState, useRef, useEffect, useCallback } from 'react';
import { ChromePicker } from 'react-color';

// svg 파일
import { ReactComponent as ColorIcon } from "../images/icon/background-color.svg";
import { ReactComponent as BoldIcon } from "../images/icon/text-bold.svg";
import { ReactComponent as ItalicIcon } from "../images/icon/text-italic.svg";
import { ReactComponent as UnderlineIcon } from "../images/icon/text-underline.svg";

// css 파일
import "../styles/css/text.css";

function Text({getFont, getSize, getIsBold, getIsItalic, getIsUnderline, getIsOkClicked, isOk, getIsClr}) {

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isOkClicked, setIsOkClicked] = useState(false);

  const optionInfo = useRef([]);
  const colorInfo = useRef();

  const [color, setColor] = useState('black');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const setRect = () => {
      colorInfo.current.style.backgroundColor = color.hex;
  }

  return (
    <>
      <div className="firstLine">
        <form method="post">
          <select name='font' className="font" onChange={(e) => getFont(e.target.value)} ref={el => (optionInfo.current[0] = el)}>
            <option value='sans-serif'>sans-serif</option>
            <option value='Gulim'>굴림</option>
          </select>
          <select name='size' className="size" value="20" onChange={(e) => getSize(e.target.value)} ref={el => (optionInfo.current[1] = el)}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
          </select>
        </form>
      </div>
      <div className="secondLine">
        <div className="firstPiece">
          {isOk ? <button className="b" style={{opacity: 0.6}}><BoldIcon/></button> :
          <button 
          className="b" 
          onClick={() => {
            setIsBold(!isBold); 
            {getIsBold(!isBold);}}} 
          style={{backgroundColor: isBold ? "orange" : "transparent"}}
          ref={el => (optionInfo.current[2] = el)}>
            <BoldIcon/>
          </button> }
          {isOk ? <button className="i" style={{opacity: 0.6}}><ItalicIcon/></button> :
          <button
          className="i" 
          onClick={() => {setIsItalic(!isItalic); {getIsItalic(!isItalic);}}} 
          style={{backgroundColor: isItalic ? "orange" : "transparent"}}
          ref={el => (optionInfo.current[3] = el)}>
            <ItalicIcon/>
          </button> }
          {isOk ? <button className="u" style={{opacity: 0.6}}><UnderlineIcon/></button> :
          <button 
          className="u" 
          onClick={() => {setIsUnderline(!isUnderline); {getIsUnderline(!isUnderline);}}} 
          style={{backgroundColor: isUnderline ? "orange" : "transparent"}}
          ref={el => (optionInfo.current[4] = el)}>
            <UnderlineIcon />
          </button>}
        </div>
        <div className="secondPiece">
          <button 
          ref={el => (optionInfo.current[5] = el)}
          onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
            <div className='colorIcon'><ColorIcon/></div>
            <div className='rect' style={{backgroundColor: 'black'}} ref={colorInfo}/> 
          </button>
          {showColorPicker && (
            <div className='colorPicker'>
            <ChromePicker
            color={color}
            onChange={updatedColor => {setColor(updatedColor); {getIsClr(color.hex);} {setRect();}}}
            /></div>
          )}
        </div>
      </div>
      <div className="lastLine">
        {isOk ? <button className='okBtn'><div className='createBox'>OK</div></button> :
        <button 
        className='okBtn'
        onClick={() => {setIsOkClicked(true); {getIsOkClicked(true);}}}>
          <div className='createBox'>OK</div>
        </button>}
      </div> 
    </>
  );
}

export default Text;