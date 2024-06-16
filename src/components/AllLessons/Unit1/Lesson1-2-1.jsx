import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_2_1(){
    return(<div className="Unit">
    <h1>What does if x, then y look like in the real world </h1>
    <p>Facts are hard to come by. Start by trying to come up with 3 statements that are completely true. Now try to disprove those statements.</p>
    <p>If you had a true statement you probably had to provide context. If you said something on your desk was 11 inches long, then you might need to clarify that you meant at the time of measurement, or from a certain time interval, because things are made and it wasn't always 11 inches and there is a future where you break it, and it stops being 11 inches. There is a potential future where the definition of an inch changes and you need to further clarify. True statements often need things around them to give context. </p>
    <p>But there is something regarding the construction of an argument that is independent of the truth, validity. Validity is not concerned with the content of an argument , it is concerned with its structure. When multiple statements use the same facts, the larger arguments construction can introduce conflicts.  </p>
    <p>Example: Assume all of the following statements equate to true.  </p>
    <p>A & B </p>
    <p>! B | C </p>
    <p>! C </p>
    <p>This is an example of an invalid argument structure where, regardless of the facts, the whole together doesn’t make sense. For the statement A & B to be true, both A and B must be true. For ! C to be true, C must be false. But then ! B | C would be false.  </p>
    <p>Given an abstract structure like this, you can track the truth of the components to see if the general structure works. This is an important skill because if an argument is not valid, it is an immediate sign to disregard the argument in its entirety.  </p>
    <p>This skill of determining validity is often used in philosophical debate, and in programing to determine blocks of code that might be redundant, as well as determining ranges of inputs and outputs.  </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l122'><button> 1.2.2 How To Critique Ideas </button></Link> 
    </div>
    </div>);
}
export default Lesson1_2_1;