import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson2_4(){
    return(<div className="Unit">
    <h1>Unsolvable </h1>
    <p>I love these both of these fields but I cannot leave you thinking they are everything. There are limits to philosophy and computer science and what they can do. To see that we are going to look at some paradoxes and some unsolvable problems. </p>
    <h3>Philosophy </h3>
    <p>Paradoxes are another common philosophical concepts that are more generally known. We are going to start with a classic written by a Greek philosopher Eubuildes called the Liar. </p>
    <p>The paradox is as follows: A person says the statement, “This statement is a lie”  </p>
    <p>If the statement is true, that would be a contradiction, as the statement says it isn’t. If it was false, there would also be a contradiction, which would no longer be a lie. Essentially, there is no way for the statement to be accurately true or false.  Paradoxes like this that use their own definitions as their source for conflict. There are many more like this.  </p>
    <h3>Computer Science </h3>
    <p>The Halting problem is an example of the limitations of computer science. The Halting problem consists of the following question, is it possible to create a function, that for all inputs, will tell you if a program will halt (hence the name) or run forever?  </p>
    <p>Before I explain this in more detail, give an initial impression of what you think the answer might be if you have never heard of this problem before. </p>
    <p>Now the answer is it's impossible, with a short proof by contradiction. Assume there is a function that can compute if a program will halt, called T(R) where R is some input. It returns true if R halts, and false if not.  </p>
    <p>Then lets make another function called P </p>
    <p>fun P </p>
    <p>	    if T(P) </p>
    <p>         Infinite loop() </p>
    <p>If T(P) = true, it will loop forever, and only terminate if T(P) = false.  </p>
    <p>This has many implications for the development of certain technologies. What else can't computer science do, and can you prove it?  </p>
    <h3>Intersection  </h3>
    <p>In this section, we have discussed examples of computer science and philosophy reaching a certain endpoint. In this course, we have looked at how logic builds and supports these two amazing fields of study. </p>
    <p>What are the limits of philosophy? </p>
    <p>What are the limits of computer science?  </p>
    <p>Does logic play any role in those limits, why or why not?  </p>
    
    <h2>Next Up:</h2>
    <div> 
            <Link to='/unit3'><button> Unit 3 Conclusion </button></Link> 
    </div>
    </div>);
}
export default Lesson2_4;