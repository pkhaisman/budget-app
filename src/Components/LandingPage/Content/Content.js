import React from 'react';
import homePage from '../../../photos/home-page.png'
import './Content.css';

class Content extends React.Component {
    render() {
        const contentData = [
            {
                title: 'Home Page',
                image: <img src={homePage} width='100%' height='auto' alt='' />,
            },
            {
                title: 'To demo the app login with the following credentials',
                image: 'Username: `Demo`, Password: `11AAaa!!`',
            },
            {
                title: '1) Click the `+` to add your budget categories!',
                image: 'After you add a category you will see it on the screen. Next, add a subcategory by clicking the `+` that appears next the category when you hover over it with your mouse',
            },
            {
                title: '2) Click `Add Account` to list your accounts!',
                image: 'Be sure to include the current account balance!',
            },
            {
                title: '3) Click `Add Transaction` to track your spending habits!',
                image: 'Once you`ve added your accounts click on one. There you will see an `Add Transaction` button. Click on it to add transactions. Be sure to select the correct category!',
            },
        ]
        const contentSections = contentData.map((section, index) => {
            return (
                <div className='Content__container__section' key={index}>
                    <h3 className='Content__container__section__title'>{section.title}</h3>
                    <div className='Content__container__section__content'>{section.image}</div>
                </div>
            );
        });

        return (
            <div className='Content'>
                <h2 className='Content__title'>Getting Started</h2>
                <div className='Content__container'>
                    {contentSections}
                </div>
            </div>
        );
    }
}

export default Content;