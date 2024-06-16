import React from "react";
import { Link } from "react-router-dom";
import "./Unit.css";
function Lesson1_1_3(){
    return(<div className="Unit">
    <h1>Set Logic</h1>
    <p>Set Logic is going to be our bridge to larger concepts. So far we have stayed within the binary logic but the world is far broader than binary logic. Sets allow us to organize groups of things.  </p>
    <p>First a definition of sets: A set is a collection of things. Most often in mathematics, a set is a collection of numbers, though it doesn't have to be. The set is made up of a number of elements. A good way to think about sets is they are some kind of container.  </p>
    <p>For example:  </p>
    <p>Set S = (1,2,3,4,5) is a set of numbers, a family with a mom, son and grandmother is a set of people. 5 is an element of the set of numbers, the mom is an element of the family. We can describe this with symbols 5 ∈ S, or the mom ∈ the family.  </p>
    <p>Practice: Come up with a set of at least 5 numbers, and a set of something other than numbers with at least 5 elements. We will use these throughout the lesson.  </p>
    <p>Sets can also have super sets and subsets. Subsets are sets that have some elements from an existing set. An example of this would be considering a silverware drawer a set, with subsets being what is contained within the dividers. An example with numbers would be given the set T = (10, 30, 50, 70, 90), a subset could be (10, 30). Supersets are sets that contain all the elements of a given set. Following our current examples, the entire kitchen would be a superset of the silverware drawer and (10,20,30,40,50,60,70,80,90) would be a superset of (10, 30, 50, 70, 90). We can draw this with symbols, for example, (10, 30) ⊆ (10, 30, 50, 70, 90) ⊆ (10,20,30,40,50,60,70,80,90).  </p>
    <p>While the examples given for these supersets and subsets had patterns to them, they don't necessarily need to. As long as they fit the definitions, it counts.  </p>
    <p>Practice: Find a superset and subset for each of the examples you came up with in your last practice. </p>
    <p>When we want to compare sets, we use operators. They are similar to, but not the same as the logical operators we have talked about previously. To help visualize these concepts I'll be referring to this: </p>
    <img src = "../src\assets\venDiagram.png" alt = "code with if statements"></img>
    <h3>Intersection: ∩ </h3>
    <p>The intersection is finding the overlap in two sets: In the diagram above, the intersection is the middle of the Ven diagram. This is similar to the “and” operator that we have looked at, where we are looking for two things to be the same.  </p>
    <h3>Union: ∪ </h3>
    <p>Union is about combining two sets. The union is the entirety of the Ven diagram. It is similar to the “or” operator, where we are looking for something to be in at least one to be a part of the union.  </p>
    <h3>Difference: -  </h3>
    <p>The difference would be one side of the diagram. This is similar to the not-operator, where Before we are done with sets we have two more terms to introduce. These will help us fully make the jump out into the real world.  </p>
    <h3>There exists: ∃ </h3>
    <p>There exists, ∃ is a term for when some attribute is true in at least one element of a set. For example, in the set of words contained in this website, there exists some analogies. This is a common way we attach attributes to sets. Let's return to one of the mathematical examples we looked at earlier: T = (10, 30, 50, 70, 90). We can say there exists some elements under the number 20.  </p>
    <h3>For all: ∀ </h3>
    <p>For all is a term for when some attribute is true for every element in the set. For example in the set of words contained in this website, for all words there is a definition. This is another common way we attach attributes to sets. Let's return to one of the mathematical examples we looked at earlier: T = (10, 30, 50, 70, 90). We can say for all elements, they are some odd number multiplied by 10.   </p>
    <p>Practice: For the sets you made at the beginning of this lesson can you define an attribute using the there exists and for all operators? </p>
    <h2>Next Up:</h2>
    <div> 
            <Link to='/l12'><button> 1.2 Beyond Binary  </button></Link> 
    </div>
    </div>);
}
export default Lesson1_1_3;