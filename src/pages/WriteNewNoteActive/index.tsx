import { Link } from "react-router-dom";

interface IProps {}

function WriteNewNoteActive(props: IProps) {
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
              <Link to=" " className="arrow">
                <img src="/images/vector-8.png" alt=" "/>
              </Link>

              <div className="frame">
                <img src="/images/Note image.png" alt=" "/>
              </div>

              <div className="enterr">
                <h3>My new Note</h3>
                <h4>Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt ex omnis quibusdam aut ratione 
                    enim aut facere accusantium! 33 inventore architecto 33 quia harum et quisquam dolorem ad quae 
                    culpa eos quis modi. In autem officia non voluptas optio aut velit voluptatum eum autem 
                    facilis. Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt ex omnis quibusdam 
                    aut ratione enim aut facere accusantium! 33 inventore architecto 33 quia harum et quisquam 
                    dolorem ad quae culpa eos quis modi. In autem officia non voluptas optio aut velit voluptatum 
                    eum autem facilis. Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt ex omnis quibusdam 
                    aut ratione enim aut facere accusantium! 33 inventore architecto 33 quia harum et quisquam dolorem ad quae culpa eos quis modi. 
                    In autem officia non voluptas optio aut velit voluptatum eum autem facilis. </h4>
              </div>

              <div className="can">
                <button className="cancel">Cancel</button>
                <button className="save">Save note</button>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default WriteNewNoteActive;
