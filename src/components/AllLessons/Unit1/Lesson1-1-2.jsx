import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_1_2(){
    return(<div className="Unit">
    <h1>Laws of Logic </h1>
    <p>So far we have two building blocks, the logical statement (if_, then __), and the operators(and, or, not). Let's start building. </p>
    <p>There are several common laws that extend those operators, and we are going to look at two of them, double negation and De Morgans.  </p>
    <h3>Double negation  </h3>
    <p>Let's start with the simplest and the one you are most likely to have used in your life. Have you ever said that you have not not done something? Well, that is essentially what double negation is.  </p>
    <p>If A = True </p>
    <p>!A = False </p>
    <p>!!A = True </p>
    <h3>De Morgan's Law</h3>
    <p>De Morgan's law can require more mental juggling, but you have probably also heard it in conversation, “You can't be doing under water basket weaving and sky knitting”. It comes into play when a not operator is applied to the outside of an & or | statement.  </p>
    <p>Let's remind ourselves of the And (&) and Or (|) operators.  </p>
    <p>For an expression with &, both sides must be true for the whole to be true, whereas for |, only one must be true. The law has two versions, Not And, and Not Or.  </p>
    <p>In formal logic they look like:</p>
    <p>!(A & B) = (! A) | (! B) </p>
    <p>!(A | B) = (! A) & (! B) </p> 
    <p>Let's start with Not And. It says saying that if both A and B are true, the result is false. If they are anything other than that, the result will be true. In the symbolic version that looks like !(A & B). From this we can logically deduce that !(A & B) is equivalent to  (! A) | (! B). How you may ask?  </p>
    <p>Given that !(A & B) = (! A) | (! B), we can test all cases of A and B.  </p>  
    <p>If A and B are both true, !(A & B) = false, and (! A) | (! B) = false.  </p>
    <p>If A and B are both false, !(A & B) = true, and (! A) | (! B) = true.  </p> 
    <p>If A is true and B is false, !(A & B) = true, and (! A) | (! B) = true.  </p>
    <p>If A is false and B is true, !(A & B) = true, and (! A) | (! B) = true.  </p>
    <p>Each time, they give an equivalent result.  </p>
    <p>An example of this in language might be the I cant take 2 classes at the same time. That is the same thing as saying I have to not take one class or not take the other class. It feels awkward to say it like that, but they are equivalent statements.  

Conversely, there is the other side of De Morgans law. !(A | B)  = (! A) & (! B).  </p>
    <p>Given that !(A | B)  = (! A) & (! B), we can test all cases of A and B.  </p>
    <p>If A and B are both true, !(A | B) = false, and (! A) & (! B) = false.</p>
    <p>If A and B are both false, !(A | B) = true, and (! A) & (! B) = true.  </p>
    <p>If A is true and B is false, !(A | B) = false, and (! A) & (! B) = false.  </p>
    <p>If A is false and B is true, !(A | B) = false, and (! A) & (! B) = false.  </p>
    <p>Each time, they give an equivalent result. </p>
    <p>To practice, assign an arbitrary true or false to A or B and see if, using the logical rules you have previously learned, you can boil each of the sides down to true or false. </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l113'><button> 1.1.3 Set Logic </button></Link> 
    </div>
    </div>);
}
export default Lesson1_1_2;