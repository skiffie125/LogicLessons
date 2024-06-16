import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_2_2(){
    return(<div className="Unit">
    <h1>How to critique ideas </h1>
    <p>In philosophy and computer science, one of the things we are always trying to do is come up with the right answer. To do that, we need to look at things critically.  </p>
    <p>In a discussion, definitions are something that can be easily misconstrued. If you are presenting a logical argument, make clear what important terms mean in this context. This can easily be seen in a variety of plots in movies and TV where someone says something, and with other context or prior knowledge the meaning of the statement changes, (Shakespeare loved it!).  </p>
    <p>If you are critiquing a definition, it can come in several forms:  </p>
    <ul>
        <li>Finding something to add to the definition </li>
        <li>Finding something that fits the general structure but is missing from the definition </li>
        <li>Finding something that is excluded from a definition  </li>
    </ul>
    <p>These are tangential to another important concept: oversimplification. Oversimplification includes when a definition is too broad.  </p>
    <p>A car will not run without gas. </p>
    <p>My car has no gas in it. </p>
    <p>My car will not run.  </p>
    <p>Removing the oversimplifications looks like this:  </p>
    <p>My car will not run without gas. </p>
    <p>My car currently has no gas in it. </p>
    <p>My car will not currently run.  </p>
    <p>Adding the time and specifying which car in all lines we removed ambiguity from the argument. </p>
    <p>Another common flaw in arguments is seeing correlation as causation. Correlation is when two affects have proportional changes over the same timeframe, whereas causation is the proof that those proportional changes are connected.  </p>
    <p>Here is a common example of correlation not equaling causation:  </p>
    <p>Ice cream sales rise in the summer. </p>
    <p>Crime rates increase in the summer. </p>
    <p>Therefore, ice cream sales cause increased crime rates. </p>
    <p>Make sure you know the relationship of your facts if you are presenting them in an argument and investigate them in others.  </p>
    <p>The last way to critique ideas is identifying underlying assumptions. To operate in this world efficiently, we need to make assumptions. Assumptions are not bad, but they need to be recognized for what they are. When you are presenting a logical augment, explain what you based that on. This might be an ethical or economic framework or another theory. This is a common mistake in programming, as library functions can require a different state than you assumed. Take a second and try to remember the last time you found an assumption you made incorrect.  </p>

    
    
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l123'><button> 1.2.3 Proof </button></Link> 
    </div>
    </div>);
}
export default Lesson1_2_2;