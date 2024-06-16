import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";

function Unit2(){
    return(<>
    <div className="Unit">
        <h1>Unit 2</h1>
        <h2>Practical Applications  </h2>
        <p>We have looked at how logic functions and practiced using it in simple examples. Let's take a bigger leap and look at the real world. We will be introducing a philosophical concept, a technology, and then looking at the intersection of the two. Throughout there will be questions asked that you should mull over. Consider them your practice problems. </p>
        <div>
            
            <Link to='/l21'><p> Lesson 2.1 </p></Link> 
            <Link to='/l22'> <p>Lesson 2.2 </p></Link> 
            <Link to='/l23'><p>Lesson 2.3</p></Link> 
            <Link to='/l24'> <p>Lesson 2.4 </p></Link> 
           
        </div>
        <h2>Next Up:</h2>
        <div> 
            <Link to='/l21'><button> 2.1 Optimization </button></Link> 
        </div>
    </div>
    </>);
}
export default Unit2;