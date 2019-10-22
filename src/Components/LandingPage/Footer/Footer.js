import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <p className='Footer__content'>Created by <a target="_blank" rel="noopener noreferrer" href="https://pkhaisman.github.io/portfolio-site/">Philip Khaisman</a></p>
                <a className='Footer__content' target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/money">Money</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
            </div>
        )
    }
}

export default Footer;