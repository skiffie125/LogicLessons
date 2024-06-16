import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_1(){
    return(<div className="Unit">
    <h1>True and False</h1>
    <p>To understand logic, we need a place to start. Logic is built on the assumption that there are true things in the world. These true facts are the building blocks of logical statements.  </p>
    <p>Logical statements take the form of If, Then statements. If then statements in normal text look like “If ___, Then ___.” It can also take the form of “____, so ____” In natural language. In computer science, it is one of the most common and powerful tools used in programming. An example of an if statement in C is in this program.  </p>
    <img src = "../src\assets\code.png" alt = "code with if statements"></img>
    <p>It can be helpful to think of them as the = in a math equation to start but be careful, it is not entirely true. If/then statements are not equivalent, because if they were if a then b would also mean if b then a. That is not always true.  </p>
    <p>These statements are considered binary logic, as statements are either true or false. In the following sections, we will be using binary logic as our jumping off point. </p>
    <h3>Examples </h3>
    <p>If I am alive, then I must have been born</p>
    <p>f the + symbol means we add the two values on either side, then 1 + 1 is equivalent to 2</p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l111'><button> 1.1.1 And, Or, Not   </button></Link> 
    </div>
    </div>);
}
export default Lesson1_1;