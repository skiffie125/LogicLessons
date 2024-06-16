import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_1_1(){
    return(<div className="Unit">
    <h1>And, Or, Not </h1>
    <p>Now that we have the concept of logical statements we can start demonstrating more complicated concepts. That's where the big three operators come in; And, Or and Not. You should have a general idea from the English versions of the word, but because these concepts are essential to the course we will go over them in detail. Operators are a term from computer science but when it comes to this kind of logic, I find it helpful to think of these like +, -, * and /. These are what you use to find what a statement is really expressing.  </p>
    <h3>And </h3>
    <p>Symbols: &,&&, ∧, · </p>
    <p>In an and expression both sides of the operator must be true for the whole to be true. Computer Science generally likes && for comparisons, and & for bit operations (comparisons with very small amounts of data). Philosophy likes ∧ or  · as the and.  </p>
    <p>Throughout this, I will be using & for simplicity's sake. Here is an example of what & looks like when and is used with T for a true statement and F for a false statement.   </p>
    <p>T & T = T </p>
    <p>T & F = F </p>
    <p>F & T = F </p>
    <p>F & F = F </p>
    <h3>Or</h3>
    <p>Symbols: |, ||, v </p>
    <p>In an or expression at least one side of the operator must be true for the whole to be true. Computer Science generally likes || for comparisons, and | for bit operations. Philosophy likes v as the or.  </p>
    <p>T | T = T</p>
    <p>T | F = T</p>
    <p>F | T = T</p>
    <p>F | F = F </p>
    <h3>Not</h3>
    <p>Symbols !, ¬   </p>
    <p>A Not operator switches the truth value of what's inside it. Essentially, you are just reversing whatever content the operator is applies to. 
    </p>
    <p>!T = F</p>
    <p>!F = T</p>
    <h3>Practice</h3>
    <p>Evaluate the following statements given this information: A = True, B = True, C = True, D = False, E = False</p>
    <ol>
        <li>A&D </li>
        <li>!D</li>
        <li>B | E</li>
        <li>!(E | (A&C)) </li>
        <li>(B&E)|(!C)  </li>
    </ol>


    {/* <img src = "../src\assets\code.png" alt = "code with if statements"></img> */}
    
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l112'><button> 1.1.2 Laws Of Logic </button></Link> 
    </div>
    </div>);
}
export default Lesson1_1_1;