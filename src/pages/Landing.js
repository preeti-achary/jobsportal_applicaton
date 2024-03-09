import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import React from 'react'

const Landing = () => {
  return (
    <Wrapper>
       <nav>
          <Logo />  
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
             <h1>
              job <span>tracking</span> app
             </h1>
             <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis commodi aspernatur ab suscipit eum! Soluta libero, porro ipsa, nulla enim magni ut quidem error nostrum praesentium obcaecati voluptatum cumque!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae nihil sit, dolores doloribus provident. Nulla aliquam aspernatur dolorem corrupti facilis! Voluptatibus placeat amet deleniti neque animi alias quasi suscipit?
              
             </p>
             <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='jon hunt' className='img main-img' />
        </div>
        
    </Wrapper>
  );
};


export default Landing;

