import { Link } from "react-router-dom";

interface IProps {}

function NoteManagementEmpty(props: IProps) {
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
            <Link to="/login" className="out">Logout</Link>
          </div>

        </div>
      </div>

      <div className="wrap">
        <div className="roup">
            <img alt=" " src="/images/vector-6.png"  className="vector"/> 
            <img alt=" " src="/images/vector-5.png" className="vector" /> 
            <h1 className="here">You have nothing here</h1>
         <div className="vec">
            <Link to="/write" className="vector7">
                Start new note
                <img src="/images/vector-7.png" alt=" " />
            </Link>
         </div>
        </div>
      </div>
    </div>
  );
}

export default NoteManagementEmpty;
