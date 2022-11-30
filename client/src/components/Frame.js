import Frame1 from "../images/frame/Frame1.svg"
import Frame2 from "../images/frame/Frame2.svg"

function Frame() {
  return (
    <>
      <section>
        <div className="frame_box">
          <img src={Frame1} alt="Frame1"></img>
          <img src={Frame2} alt="Frame1"></img>
        </div>
      </section>
    </>
  );
}

export default Frame;

