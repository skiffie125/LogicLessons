import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson2_2(){
    return(<div className="Unit">
    <h1>Artificiality  </h1>
    <p>Let's begin with some big questions, what is real? What is natural?  </p>
    <p>Artificial has several definitions and connotations, something unnatural, something manmade, or something fake. Computer science and philosophy both have relationships with each of both definitions.  </p>
    <h3>Philosophy </h3>
    <p>Because of the broadness of artificiality let's begin with a thought experiment, the experience machine. </p>
    <p>The experience machine is a philosophical question posed by Robert Nozik in the book Anarchy State and Utopia. Nozik uses it to answer the question of what makes life meaningful, but we will be using it for a slightly different purpose.  </p>
    <p>Here is a summary of the question, If you could be plugged into a machine that gave you your perfect life would you enter? The machine operates for years at a time, so there is no option to try it out for a day. In the experience machine, you would have no knowledge that you are in the machine, and believe your experiences therein to be real, but know they are a result of the machine when you get out.  </p>
    <p>Would you enter, why or why not? </p>
    <p>What does this tell you about what you consider to be real?  </p>
    <h3>Computer Science </h3>
    <p>The conundrum we just looked at is what it means for an experience to be real. Computers don't experience things, but we can look at how they remember them.  </p>
    <p>In modern-day computers, memory is stored in a couple of different places. The most basic is registers. Registers are the very base units of memory and are used when executing instructions. There is a small number of them, and many have designated purposes. When writing code, you don’t assign memory to registers unless you are writing in assembly (the coding language that is only a step up from pure binary).  The next most used form is caches. Caches are places to store memory that is used more often to increase the performance of a computer. This is similar to making a summary sheet for an open-book test, allowing you to access information you know you might need with more efficiency than looking through a great deal of irrelevant information. Modern computers often have multiple sets of caches to make this even more efficient. Next up is the main memory, as the name suggests is the primary place things are stored. Main memory is used by two systems to access what is stored, logical/virtual memory and physical memory. When programs are run, each program assigns memory to its own set of addresses. Those placeholder addresses (the logical/virtual memory) are then assigned a place in the actual memory ( physical memory). This allows programs to manage space more effectively.  The last place memory is stored on a computer is the disk. This is the place where memory that is used very infrequently and can't fit into main memory is stored. There is also cloud storage. This allows some set of data to be stored not on your computer, but on someone else's. With this, you can fetch, edit, and return that data, so that it doesn't take up space on your personal machine.  </p>
    <p>We know that computer memory hardware is man-made, but is it real? The way we perceive memory on the screens we use (web pages, applications) is very different from the tiny electrical signals they actually are. Which is the real version? </p>
    <h3>Intersection  </h3>
    <p>Memory and experience are difficult concepts to categorize even without trying to figure our what is real or not. Think about the following things: </p>
    <p>How is memory in computers and people similar and different? </p>
    <p>Has your opinion of artificiality when it comes to experiences and memory changed? </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l23'><button> Lesson 2.3 Responsibility </button></Link> 
    </div>
    </div>);
}
export default Lesson2_2;