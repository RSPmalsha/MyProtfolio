import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import imge1 from '../../assest/imge1.jpg';
import imge2 from '../../assest/imge2.jpg';
import imge3 from '../../assest/imge3.jpg';
import imge4 from '../../assest/imge4.jpg'
import './work.css';

const Work = () => {
  const works = [
    {
      image: imge1,
      title: 'Tourism web site using WordPress',
      github: '#github',
      link: 'http://travelwithceylon.com',
    },
    {
      image: imge2,
      title: 'Hair Saloon Web site using Html|Css| js',
      github: 'https://github.com/RSPmalsha/project-2.git',
       
    },
    {
      image: imge3,
      title: 'Travel Web Site using Wordpress|(Local)',
      github: '#github',
      link: 'https://github.com/RSPmalsha',
    },
    {
      image: imge4,
      title: 'Car Rental Web Site using React js',
      github: 'https://github.com/RSPmalsha/CarRentWebsite.git',
      
    },
  ];

  return (
    <div>
      <div className='work_list'>
        <h2 className='work_header'>Explore My Recent Works</h2>
        <div className='work_container'>
          {works.map((work, index) => (
            <div key={index} className='work'>
              <div className='work_content'>
                <h2>{work.title}</h2>
                <div className='work_link'>
                  <a href={work.github}><BsGithub/></a>
                  <a href={work.link}><BiLink/></a>
                </div>
              </div>
              <div className='work_image'>
                <img src={work.image} alt='Work Preview' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
