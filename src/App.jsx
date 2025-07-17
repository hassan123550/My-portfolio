// import React, { useState } from 'react';

// const App = () => {
// const [count, setCount] = useState(0);
// return (
//   <div className="flex flex-col h-screen w-screen p-4 justify-center items-center">

//     <h1 className="text-cyan-500 text-3xl font-bold  mb-10">
//       Count: {count}
//     </h1>

//     <div className="flex flex-row-reverse justify-end">
//       <button
//         className="h-12 w-40 text-xl text-white bg-cyan-500 rounded skew-x-[0deg] shadow-[0_0_0px_#00ffff,0_0_0px_#00ffff] hover:shadow-[0_0_3px_#00ffff,0_0_3px_#00ffff] transition-all duration-300 ease-in-out"
//         onClick={() => setCount(count+1)}>
//         Incremnt
//       </button>
//     </div>

//     <div className='mt-5'>
//           <button  className= "h-12 w-40 text-xl text-white bg-cyan-500 skew-x-[0deg] shadow-[0_0_0px_#00ffff,0_0_0px_#00ffff] hover:shadow-[0_0_3px_#00ffff,0_0_3px_#00ffff] transition-all duration-300 ease-in-out font-bold"
//  onClick={()=>setCount(count-1)}>
//          Decrement
//     </button>
//     </div>

//         <div className='mt-5'>
//           <button  className= "h-12 w-40 text-xl text-white bg-cyan-500 skew-x-[0deg] shadow-[0_0_0px_#00ffff,0_0_0px_#00ffff] hover:shadow-[0_0_3px_#00ffff,0_0_3px_#00ffff] transition-all duration-300 ease-in-out font-bold"
//  onClick={()=>setCount(0)}>
//          Reset
//     </button>
//     </div>

//   </div>
// );

// };

// export default App;









// import { useState } from 'react';


// const App = () => {

//   const [username, setUsername] = useState('');

//   const submitHandler = (e) => {
//     console.log(username);
//     setUsername('');
//   };
//   return (
//     <div className='flex flex-col h-screen w-screen justify-center items-center'>


//       <h1 className='text-cyan-500 font-bold mb-10 '>Form Handling</h1>

//       <div className='bg-gray-700 rounded mb-10'>
//         <form onSubmit={submitHandler}>
//           <input
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value)
//             }}
//             type='text'
//             placeholder="Enter your name"
//             className='px-4 py-3 focus:outline-none text-white'

//           />

//         </form>
//       </div>

//       <div className='bg-gray-500 rounded hover:shadow-[0_0_3px,0_0_3px] transition-all duration-300 ease-in-out focus:outline-none'>
//         <button onClick={submitHandler}>
//           Submit
//         </button>
//       </div>

//     </div>
//   );
// };

// export default App;





// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// const App = () => {
//   return (
//       <div className='h-screen w-screen bg-black'>
//    <>
//  <Navbar/>
 
//  <Footer/>
//    </>
//    </div>
//   );
// };

// export default App;





// import React from 'react';
// import Card from './components/Card';
// const App = () => {

//   const users = [
//   {
//     "name": "Hassan Ali",
//     "city": "Lahore",
//     "age": 28,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://ishtailista.wordpress.com/wp-content/uploads/2018/01/jlf-2018-men-potraits-indian-men-jaipur-literature-festivalq-2018-street-style-by-abhimanyu-singh-rathore-jaipur-men-6.jpg?w=1075"
//   },
//   {
//     "name": "Usman",
//     "city": "Karachi",
//     "age": 25,
//     "profession": "Graphic Designer",
//     "profilePhoto": "https://i.pinimg.com/736x/dd/b2/02/ddb20201727b7b4e5178431058a20869.jpg"
//   },
//   {
//     "name": "Talha",
//     "city": "Islamabad",
//     "age": 32,
//     "profession": "Data Analyst",
//     "profilePhoto": "https://thumbs.dreamstime.com/b/portrait-happy-smiling-indian-young-man-looking-camera-resting-relaxation-feel-satisfied-glad-expression-good-news-369943696.jpg"
//   },
//   {
//     "name": "Saad",
//     "city": "Rawalpindi",
//     "age": 29,
//     "profession": "Digital Marketer",
//     "profilePhoto": "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs="
//   },
//   {
//     "name": "Umar Farooq",
//     "city": "Faisalabad",
//     "age": 35,
//     "profession": "Project Manager",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
//   },
  

// ]

//   return (
//     <div>

//     <div className='p-10'>
//       {/* <Card user="Hassan Ali" age="21" city="Rahim Yar Khan"/> */}
//       {users.map((item,index)=>{
//        return <Card key ={index} user={item.name} age={item.age} city={item.city} profile= {item.profilePhoto}/>
//       })}
//     </div>

//     </div>

//   );
// };

// export default App;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const App = () => {

//   const [data, setData] = useState([]);

// const getData = async () => {
//  const response = await axios.get('https://picsum.photos/v2/list');
//  setData(response.data);
//  //console.log(data[0].download_url);
 
// };

//  useEffect (() => {
//    getData();
//  },[]);


//   return (
//     <div className='p-10'>

// <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
// <div className="max-w-2xl mx-auto px-4">
//   {data.map((elem, idx) => (
//     <div
//       key={idx}
//       className="p-5 bg-gray-700 mt-5 rounded shadow-md w-full"
//     >
//       <div className="flex items-center justify-between gap-5">
//         <img
//           src={elem.download_url}
//           alt="Author"
//           className="h-40 w-40 object-cover rounded"
//         />
//         <h1 className="text-white font-semibold text-lg">{elem.author}</h1>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   )
// }

// export default App;




import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';




gsap.registerPlugin(useGSAP,ScrollTrigger);



const App = () => {
  return (
   <ReactLenis root>
    <Header />
    <main>

      <Hero />
      <About />
      <Skill />
      <Work />
      <Review />
      <Contact />
    </main>
   <Footer />
    </ReactLenis>
  );
};

export default App;


















