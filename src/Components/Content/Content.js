import React from 'react';
import './Content.css';

class Content extends React.Component {
    render() {
        const contentData = [
            {
                title: 'Add Transactions',
                image: 'placeholder image',
            },
            {
                title: 'Set Goals',
                image: 'placeholder image',
            },
            {
                title: 'Alter Spending',
                image: 'placeholder image',
            },
        ]
        const contentSections = contentData.map((section, index) => {
            return (
                <div className='Content__container__section' key={index}>
                    <h3>{section.title}</h3>
                    <div>{section.image}</div>
                </div>
            );
        });

        return (
            <div className='Content'>
                <h2 className='Content__title'>How It Works</h2>
                <div className='Content__container'>
                    {contentSections}
                </div>
            </div>
        );
    }
}

export default Content;