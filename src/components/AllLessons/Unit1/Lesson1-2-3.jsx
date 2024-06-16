import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_2_3(){
    return(<div className="Unit">
    <h1>Proof </h1>
    <p>We've talked about ideas and what makes a clear arguement, let's talk about proofs. </p>
    <p>Firstly, what is a proof?  </p>
    <p>A proof is an explanation of a statement as to why it must be true. We use proofs in our everyday lives as justifications for our own ideas, actions, and decisions. These proofs however aren't always good. They are often hastily constructed and don't always hold up. When talking about computer science and philosophy proofs are more likely than not to be labored over for hours.  </p>
    <p>Definitions from Book of Proof:  </p>
    <p>Proofs often use the following terms:</p>
    <p>A Theorem is a “mathematical statement that is true and can be (and has been) verified as true”.  </p>
    <p>A Definition “is an exact, unambiguous explanation of the meaning of a mathematical word or phrase”.</p>
    <p>A Lemma is “a theorem whose main purpose is to help prove another theorem”. </p>
    <p>A Corollary “is a result that is an immediate consequence of a theorem”. </p>
    <p>Both computer science, math, and philosophy use these, though philosophy tends to have far more theories than theorems.  </p>
    <p>There are a lot of different kinds of proofs and they tend to look different in different disciplines. Some ones to be familiar with are direct, counter-example, contrapositive, and indicative.  </p>
    <p>Direct Proofs are the hardest to construct. This is a valid structure of lemmas that proves whatever point you are making. Counterexamples are generally the easiest type of proof to construct. It's far easier to prove something wrong than to prove something right, as you only need a single example of why it's incorrect. Hence the name, counter-example proof. Contrapositive proofs are say if something other than the expected outcome of what you are trying to prove happens, you can disprove the basis of that proof. Indicative proofs identify some pattern and then prove that pattern. They do this by proving a base case correct, then proving all larger are at their core the same as the base case.  </p>
    <p>If these are not all of the proofs in the world and if you have any more interest in proofs, I would highly recommend reading the Book of Proof. </p>
    
    <h2>Next Up:</h2>
    <div> 
            <Link to='/unit2'><button> Unit 2 Practical Applications </button></Link> 
    </div>
    </div>);
}
export default Lesson1_2_3;