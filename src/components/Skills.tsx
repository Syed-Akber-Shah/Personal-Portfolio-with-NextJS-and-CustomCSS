import React from 'react'
import "../app/styles/skills.css" //Import the custom css file

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className='skills-left'>
            <h2 className='skills-heading'>Technologies I work with</h2>
            <p className='skills-text'>
                I&apos;m a front-end developer with a strong foundation in Typescript, React, and Node.js. I&apos;m proficient in various programming languages, including Python. I also have experience with front-end libraries and frameworks like React and Next.js.
            </p>
        </div>
        <div>
          {/* Second Column: Skills */}
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                  <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                    <h2 data-aos="zoom-in-up">Vanilla CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
