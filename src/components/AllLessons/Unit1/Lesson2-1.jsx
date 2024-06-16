import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson2_1(){
    return(<div className="Unit">
    <h1>Optimization </h1>
    <p>This is one of the first areas that I noticed concurrent ideals within philosophy and computer science. We will start by looking at an ethical framework, and then how programs are made more useful. Through this lesson, we will see how they run in parallel.  </p>
    <h3>Philosophy </h3>
    <p>Utilitarianism going to be the only ethical framework for decision-making I am going to introduce in this course. There are a great deal of ethical frameworks out there, so I will start with one most are probably familiar with.  </p>
    <p>Utilitarianism is a way to detriment the “right” or “good” course of action by asking the question: </p>
    <p>What would do the most good for the greatest amount of people? Many philosophers have proposed more specific definitions, as well as altering it slightly to be more useful or in response to critiques. There are a great deal of critiques of utilitarianism, including the following: </p>
    <ul>
        <li>It has no sense of deserving or justice when it comes to who the good is applied to. </li>
        <li>It relies on a variable definition of what is good. </li>
        <li>There are differing types of goods, and utilitarianism doesn't care about type, only about quantity. </li>
    </ul>
    <p>Question: Do you think utilitarianism is an ethical framework for making everyday life decisions?  </p>
    <h3>Computer Science </h3>
    <p>Often in computer science, it is prudent to optimize a program for one of two things: efficiency or memory usage. In layman's terms, we want the program to go as fast as possible or we want the program to use the smallest amount of the systems resources possible. Optimizing for efficiency typically means executing as few instructions as possible. Whereas, optimizing for memory on the other hand tries to use the least amount of dynamically allocated memory.  </p>
    <p>When optimizing for one specific aspect of a program, oftentimes other aspects may be worsened. An example of this is a type of programming problem called a dynamic programming problem. These problems calculate information based on previously calculated information which gives the programmer a choice. You can save the information, by using memory, or recalculate the information every time you need it, using more time. Either approach solves the problem, but the overall performance of the program is going to depend on what feature you optimized.  </p>
    <h3>Intersection  </h3>
    <p>This is an example of computer science and philosophy using the same underlying logic for vastly different purposes. It is the process of making decisions with a singular goal. In both cases, other important things can slide to the side when you only have one focus.  </p>
    <p>Question: What purpose does optimization serve? Where else is the process of optimization used? </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l22'><button> Lesson 2.2 Artificiality </button></Link> 
    </div>
    </div>);
}
export default Lesson2_1;