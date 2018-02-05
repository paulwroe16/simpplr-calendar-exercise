import React, {Component} from "react";

//	Components
import Header from './Header';
import Grid from './Grid';
import Controls from './Controls';
import Title from './Title';

class Calendar extends Component {

	constructor(props) {
		
		super(props);

        if( this.props.location.hash) {

            this.year = this.props.location.hash.split('/')[1];

            this.month = this.props.location.hash.split('/')[2];

        } else {

            this.year =  new Date().getFullYear();

            this.month = new Date().getMonth();

        }

	}

	_handleNextMonth() {

        if (this.month == 11) {
        	
            this.month = 0;
        
        } else {

            this.month += 1;

        }

        this.props.history.replace(`/#/${this.year}/${this.month}`);

    }

    _handlePreviousMonth() {

        if (this.month === 0) {

        	this.month = 11;

        } else {

        	this.month -= 1;

        }

        this.props.history.replace(`/#/${this.year}/${this.month}`);

    }

    _handleYearChange(event) {

        this.year = event.target.value;

        this.props.history.replace(`/#/${this.year}/${this.month}`);

    }

    _handleMonthChange(event) {

        this.month = event.target.value;

        this.props.history.replace(`/#/${this.year}/${this.month}`);

    }

    render() {

        return (
        	<div className='container'>

                <Title
                    month={ this.month }
        			year={ this.year } />

                <Controls
                    year={ this.year }
                    month={ this.month }
                    handleMonthChange={ this._handleMonthChange.bind(this) }
                    handleYearChange={ this._handleYearChange.bind(this) }
        			handleNextMonth={ this._handleNextMonth.bind(this) }
        			handlePreviousMonth={ this._handlePreviousMonth.bind(this) } />

                <Header />

        		<Grid
                    month={ this.month }
                    year={ this.year } />

        	</div>
        );
    }

}

export default Calendar;