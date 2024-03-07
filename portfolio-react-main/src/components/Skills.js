import React, { useRef, useState } from 'react' 
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'PHP & Laravel',
    des: 'Laravel is a PHP web framework known for its elegant syntax and developer-friendly features, facilitating rapid application development. It offers robust tools for routing, authentication, database management, and more, making it popular among developers for building scalable and maintainable web applications. Laravel follows the MVC (Model-View-Controller) architectural pattern, promoting separation of concerns and code organization..',
    // icon: faHtml5
  },
  {
    name: 'Mern Stack',
    des: 'MERN stack is a popular JavaScript-based technology stack for building full-stack web applications, comprising MongoDB, Express.js, React.js, and Node.js. It allows for seamless integration of front-end and back-end development using JavaScript throughout the entire development process..',
    // icon: faCss3
  },
  {
    name: 'React Native',
    des: 'React Native is a JavaScript framework for building mobile applications, developed by Facebook. It allows developers to use React along with native platform capabilities to create cross-platform apps for iOS and Android. With React Native, developers can write code once and deploy it across multiple platforms, reducing development time and resources..',
    // icon: faJs},
  },
  {
    name: 'Flutter',
    des: 'Flutter is an open-source UI software development kit created by Google, enabling the development of natively compiled applications for mobile, web, and desktop from a single codebase. It utilizes the Dart programming language and provides a rich set of pre-built widgets for building expressive and customizable user interfaces. ',
    // icon: faReact
  },
  {
    name: 'AI ChatBot',
    des: 'An AI chatbot is a software program that uses artificial intelligence techniques, including natural language processing, to engage in human-like conversations with users. These bots can perform various tasks, such as answering questions, providing assistance, or simulating human interaction in customer service or other applications.',
    // icon: faVuejs
  },
  {
    name: 'Graphic Designing',
    des: 'Graphic designing involves creating visual content to communicate messages through typography, imagery, and layout techniques, often used in branding, marketing, and digital media. Graphic designers utilize software tools like Adobe Photoshop, Illustrator, and InDesign to design graphics for print or digital platforms..',
    // icon: faLaravel
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              {/* <FontAwesomeIcon icon={value.icon} /> */}
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

