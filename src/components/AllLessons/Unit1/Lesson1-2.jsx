import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_2(){
    return(<div className="Unit">
    <h1>Beyond Binary</h1>
    <p>The world is so much more complicated than, and or and not. This section will be a stepping stone to full discussions about real topics. We will learn about how to apply these tools in more ways and how to adapt and expand them as we encounter things that don’t fit into nice and neat boxes.  </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l121'><button> 1.2.1 What does if x then y look like in the real world   </button></Link> 
    </div>
    </div>);
}
export default Lesson1_2;