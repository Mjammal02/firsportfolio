import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss';

import { useEffect, useState, useRef  } from 'react';
import AnimatedLetters from '../AnimatedLetters';




const Home =() =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const letterClassRef = useRef(null);
    const [isMounted, setIsMounted] = useState(true);


    const nameArray = ['m', 'a', 'h', 'm', 'o', 'u', 'd']
    const jobArray = [ 'B', '.', 'S', 'c', ' ', 'C', 'o', 'm', 'p', 'u', 't',  'e',  'r',
        ' ', 'S', 'c', 'i',  'e',  'n',  'c',  'e',  ' ',
        'a', 'n', 'd', ' ',  'E',  'n',  'g', 'i', 'n', 'e',  'e',  'r',  'i',
        'n', 'g', ' ', 's', 't', 'u', 'd', 'e', 'n', 't',
      ]

      useEffect(() => {
        // Set a flag to track whether the component is still mounted
        let isMounted = true;
    
        const timeoutId = setTimeout(() => {
          // Check if the component is still mounted before updating state
          if (isMounted) {
            setLetterClass('text-animate-hover');
          }
        }, 4000);
    
        // Store the timeout ID in the ref
        letterClassRef.current = timeoutId;
    
        // Return a cleanup function to clear the timeout and update isMounted
        return () => {
          isMounted = false;
          clearTimeout(letterClassRef.current);
        };
      }, []);
     
     

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>  <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>                </h1>
                <h2>Developer / JavaScript / HTML / CSS</h2>
                <Link to="/contact" className='flat-button'>Contact Me
                </Link>
            </div>
        </div>
    )
}

export default Home;