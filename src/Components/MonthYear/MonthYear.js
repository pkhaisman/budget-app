import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import BudgetAppContext from '../../BudgetAppContext';
import './MonthYear.css'

class MonthYear extends React.Component {
    static contextType = BudgetAppContext
    
    calculateMonth = (monthNum) => {
        let month
        switch(monthNum) {
            case 1:
                month = 'January'
                break
            case 2:
                month = 'February'
                break
            case 3:
                month = 'March'
                break
            case 4:
                month = 'April'
                break
            case 5:
                month = 'May'
                break
            case 6:
                month = 'June'
                break
            case 7:
                month = 'July'
                break
            case 8:
                month = 'August'
                break
            case 9:
                month = 'September'
                break
            case 10:
                month = 'October'
                break
            case 11:
                month = 'November'
                break
            case 12:
                month = 'December'
                break
            default:
                console.log('error')
        }
        return month
    }

    render() {
        let currentMonth = this.calculateMonth(this.props.month)
        let nextMonth = this.props.month + 1
        let prevMonth = this.props.month - 1
        let currentYear = this.props.year

        return (
            <div className='MonthYear'>
                <li>
                    <FontAwesomeIcon className='MonthYear__chevron' icon={faChevronCircleLeft} color='#56abbd' onClick={() => this.context.goToPreviousMonth(prevMonth)} />
                </li>
                <li className='MonthYear__month-year'>{currentMonth} {currentYear}</li>
                <li>
                    <FontAwesomeIcon className='MonthYear__chevron' icon={faChevronCircleRight} color='#56abbd' onClick={() => this.context.goToNextMonth(nextMonth)} />
                </li>
            </div>
        )
    }
}

export default MonthYear