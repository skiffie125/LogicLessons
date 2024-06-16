import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";

function Unit1(){
    return(<>
    <div className="Unit">
        <h1>Unit 1</h1>
        <h2> Foundations </h2>
        <p>To understand or use something, we need to know how to define it. What is logic? The Merriam Webster dictionary defines it as “a science that deals with the principles and criteria of validity of inference and demonstration: the science of the formal principles of reasoning.”  With this definition the common core of these two disciplines seems less far-fetched. Reasoning and inference are both commonly used skills in the construction of programs and theories. But dictionary definitions are not always the ones we carry in our heads. I would have said how I try to understand the world. Logic is a set of tools that gives us reproducible results when applied according to logic's rules.  </p>
        <p>Over this course we are going to be learning more about the tools logic can provide and how to use them in a variety of contexts. The contexts we will focus on are two fields that put logic on a pedestal, philosophy, and computer science. Philosophy uses it to construct arguments and theories of how the world is or should be. Computer science uses it to build programs to accomplish a variety of tasks. </p>
        <p>The following two questions are to get you thinking about logic in your life. Answer them to the best of your ability. Throughout this course I am going to pose more questions in this format. There are no correct answers to these questions, they are to spark your thinking about this material.  </p>
        <p>Where did you first encounter logic? </p>
        <p>When did you first use logic? </p>
        <div>
            
            <Link to='/l11'><p> Lesson 1.1 </p></Link> 
            <Link to='/l111'> <p>Lesson 1.1.1 </p></Link> 
            <Link to='/l112'><p>Lesson 1.1.2</p></Link> 
            <Link to='/l113'> <p>Lesson 1.1.3</p></Link> 
            <Link to='/l12'> <p>Lesson 1.2 </p></Link>
            <Link to='/l121'> <p>Lesson 1.2.1</p></Link>  
            <Link to='/l122'><p> Lesson 1.2.2</p> </Link>  
            <Link to='/l123'><p> Lesson 1.2.3 </p></Link>  
        </div>
        <h2>Next Up:</h2>
        <div> 
            <Link to='/l11'><button> 1.1 True/False </button></Link> 
        </div>
    </div>
    </>);
}
export default Unit1;