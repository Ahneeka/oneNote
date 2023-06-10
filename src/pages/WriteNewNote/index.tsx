import { Link } from "react-router-dom";
import { useState } from "react";
// import modal from "react o-modal";

interface IProps {}

function WriteNewNote(props: IProps) {
  // const [modal, setModel] =useState(false);
  return (
    <div className="wrapper">
      <div className="div">
        <img src="/images/logo.svg" className="note" alt="" />

        <div className="wor">
          <button className="but">
            <img src="/images/vector.png" className="image" alt="" /> 
            All note
          </button>

          <div className="task">
           <a href=" " className="note"><img src="/images/vector-2.png" className="task2" alt=" " /> Task</a>
           <a href=" "className="note"><img src="/images/vector-3.png" className="task2"  alt=" "/> Remember</a>
           <a href=" " className="note"><img src="/images/vector-4.png" className="task2"  alt=" "/> Favourite</a>
          </div>

          <div className="group">
            <h3 className="name"><img src="/images/Ellipse 2.png" className="kenny" alt=" "/> Kehinde Adepoju</h3>
            <Link className="out" to="/login">Logout</Link>
          </div>

        </div>
      </div>

      <div className="wrapp">
        <div className="roup">
            <div>
              <Link to="/note" className="arrow">
                <img src="/images/vector-8.png" alt=" "/>
              </Link>

              <div className="frame">
                <img src="/images/Frame 4.png" alt=" "/>
              </div>

              <div className="enter">
                <input
                type="text"
                placeholder="Enter your topic"
                />
                <input
                type="text"
                placeholder="Write something......."
                className="enter2"
                />
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default WriteNewNote;
