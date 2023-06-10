import { Link } from "react-router-dom";
import NoteTopic from "../../components/NoteTopics";
// import React, { useState } from "react";

interface IProps {}

function WriteNewNoteActive(props: IProps) {
  // const [searchText, setSearchText] = useState('');

  // const handleInputChange = (event: any) => {
  //   setSearchText(event.target.value);
  // };

  // const handleSearch = () => {
  //   // Perform search operation with searchText
  //   console.log('Search:', searchText);
  // };

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
           <a href=" " className="note"><img src="/images/vector-3.png" className="task2"  alt=" "/> Remember</a>
           <a href=" " className="note"><img src="/images/vector-4.png" className="task2"  alt=" "/> Favourite</a>
          </div>

          <div className="group">
            <h3 className="name"><img src="/images/Ellipse 2.png" className="kenny" alt=" "/> Kehinde Adepoju</h3>
            <Link className="out" to="/login">Logout</Link>
          </div>

        </div>
      </div>

      <div className="wra">
        
        <div>
            <img src="/images/vector-9.png" alt=" " className="vec"/>
            <input 
            placeholder="Search note"
            type="text"
            // value={searchText}
            // onChange={handleInputChange}
            className="search"
            />
            {/* <button onClick={handleSearch}>Search</button> */}
            <div className="co">
            
            <NoteTopic title="Note Topic One" description="Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt ex omnis  "/>
            <NoteTopic title="Note Topic Two" description="quibusdam aut ratione 
                    enim aut facere accusantium! 33 inventore architecto 33 quia harum"/>
            <NoteTopic title="Note Topic Three" description="n autem officia non voluptas optio aut velit voluptatum eum autem 
                    facilis."/>
              </div>
        

        </div>
      </div>

      <div className="rec">
        <img src="/images/Note image.png" alt=" " className="rec2" />
        <h2>Note Topic One</h2>
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
    </div>
  );
}

export default WriteNewNoteActive;
