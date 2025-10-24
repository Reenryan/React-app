import Footer from './Footer';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map((number) => number * 2);
// const isLoggendIn = false;
{/* <ul>
  {doubled.map(num =>{ return <li key = {num} >{num}</li> })}
 </ul> */}

 {/* <Header></Header>
 <h1>Welcome to Cnetflix</h1>
 
 
 { isLoggendIn ? <p>Welcome Back,Uer</p> : <p>PLease Log In</p> }
 <Food/>
 <Cards/>
 <FeedbackProvider>
   <Movie_images/>
 </FeedbackProvider>
 
 <Footer/> */}
 
// use a wrapper element(main or div) || react fragment( <> components </>) || container component : to return multiple components with or without html tags inside
function App() {
return(
  <>
  <Header/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Footer/>
  </>
  
);
}

export default App
