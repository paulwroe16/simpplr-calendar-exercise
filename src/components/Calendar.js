import React, {Component} from "react";

//	Components
import Header from './Header';
import Grid from './Grid';
import Controls from './Controls';
import Title from './Title';

class Calendar extends Component {

	constructor() {
		
		super();
            
        this.state = {
            month: new Date().getMonth(), 
            year: new Date().getFullYear(),
        };

	}

	_handleNextMonth() {

       	let nextMonth;

        if (this.state.month == 11) {
        	
            nextMonth = 0;
        
        } else {

        	nextMonth = this.state.month + 1;

        }

        this.setState({
        	month: nextMonth
        });

    }

    _handlePreviousMonth() {
       	
       	let previousMonth;

        if (this.state.month === 0) {

        	previousMonth = 11;

        } else {

        	previousMonth = this.state.month - 1;

        }

        this.setState({
        	month: previousMonth
        });

    }

    _handleYearChange(event) {

        this.setState({
            year: event.target.value
        });

    }

    _handleMonthChange(event) {

        this.setState({
            month: event.target.value
        });

    }

    render() {

        const { year, month } = this.state;

        return (
        	<div className='container'>
        		
                <Title
                    month={ month }
        			year={ year } />

                <Controls
                    year={ year }
                    month={ month }
                    handleMonthChange={ this._handleMonthChange.bind(this) }
                    handleYearChange={ this._handleYearChange.bind(this) }
        			handleNextMonth={ this._handleNextMonth.bind(this) }
        			handlePreviousMonth={ this._handlePreviousMonth.bind(this) } />

                <Header />

        		<Grid
                    month={ month }
                    year={ year } />

        	</div>
        );
    }

}

export default Calendar;