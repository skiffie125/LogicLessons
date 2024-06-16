import { Link } from 'react-router-dom';
import './Home.css';

// function HomeCard({card}) {
//   return (
//     <div className='HomeCard'>
//       <Link to={ card.linkto }>
//         <h2> { card.title } </h2>
//         <p> { card.content } </p>
//       </Link>
//     </div>
//   );
// }

function Home() {
//   const cards = [
//     { 
//       linkto: "/arcgismap",
//       title: "Salmon Habitat Restoration Map",
//       content: "See a live view of different salmon restoration projects in in Washington State. View stats such as completion status, cost, and goals."
//     },
//     { 
//       linkto: "/Urgency",
//       title: "Urgency",
//       content: "Curious as to why salmon are an important part of the ecosystem in the PNW? Learn more here!"
//     },
//     { 
//       linkto: "/blog",
//       title: "Blog",
//       content: "Have a project you want to share? Want to share your own project with others? Feel free to browse posts about different salmon projects."
//     },
//     { 
//       linkto: "/getinvolved",
//       title: "Get Involved",
//       content: "Learn how you can contribute yourself to the betterment of the environment and the longevity of salmon in the PNW."
//     },
//     { 
//       linkto: "/salmoninfo",
//       title: "FAQ's About Salmon",
//       content: "Have questions about salmon and there environment? Catch up here and learn more about salmon's local habitat."
//     },
//     { 
//       linkto: "/about",
//       title: "About",
//       content: "Learn more about this project and the people who made it"
//     },
//   ];

  return(
    <div className="Home">
      <h1> Welcome </h1>
      <p>Welcome to Logic Lessons, a site showing the intersection and shared basis of computer science and philosophy.</p>
      <p>Read the introduction to get started then go to the Unit 1 page. </p>
      <h2>Introduction</h2>
      <p>I was sitting in a political philosophy class discussing the rationality of decision-making when the professor started explaining the statistical concept of expected value. Expected value is the average value of something when you consider the probability and value of each outcome. In the math class, the word problems associated with it were often gambling or other games, but here they were talking about concepts like leadership and opportunity. I had taken a statistics class a few quarters before that was a requirement for the computer science major where this topic was covered. I was foolishly surprised when the other students acted like this was an entirely new concept to them. That was not the first time I had seen parallels between my computer science and philosophy classes, but it was what spawned the idea for this project. Throughout my time in these disciplines that most people see as incredibly far apart, I kept finding common threads that connected them. </p>
      <p>The goals of computer science and philosophy as disciplines are different. Computer science seeks to make things, philosophy seeks to understand the world. But at their core, they have a common seed, logic. I would recommend taking this course with other people, not solely on your own. Many of the questions asked are best talked over with another person. However, this could be completed on your own. Regardless, we are going to explore logic, and then the disciplines it has been used to build. To begin, start with Unit 1.  </p>
      {/* <h5> Crafted by students from Western Washington University as part of a Web Scripting class. Our aim is simple, to educate and spark conversations about salmon habitats and restoration initiatives. Through this platform, we invite you to delve into the world of salmon conservation with us. Our project was born from a genuine passion for environmental science and a shared concern for our local wildlife, particularly salmon. This website represents our endeavor to merge our academic pursuits with real-world issues. While our focus remains rooted in educational endeavors, we aspire to foster an environment where learning and dialogue flourish. So, whether you're a fellow student, a curious enthusiast, or a concerned citizen, we invite you to explore, learn, and engage with us on this journey towards understanding and protecting our precious salmon populations. </h5>
      {cards.map(card => {
        return (
          <HomeCard card={card}/>
        );
      })} */}
    </div>
  );
}
 
export default Home;
