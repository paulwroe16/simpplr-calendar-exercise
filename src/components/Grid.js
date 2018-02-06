import React, {Component} from "react";
import styled from 'styled-components';

//	Components
import Day from './Day';

class Grid extends Component {

    constructor(props) {

        super(props);

        this.keyCount = 0;

        this._getKey = this._getKey.bind(this);

    }

    _getKey() {

        return this.keyCount++;

    }

    _draw(month, year) {

        let days = [];

        let startDayOfMonth = new Date(year, month, 1);

        let daysInMonth = new Date(year, month + 1, 0).getDate();

        if (startDayOfMonth.getDay() > 0) {

            const numberOfLeadingDays = startDayOfMonth.getDay();

            const lastDayOfPreviousMonth = new Date(year, month, 0).getDate();

            for (let i = 1; i <= numberOfLeadingDays; i++) {

                let dayNumber = (lastDayOfPreviousMonth - numberOfLeadingDays) + i;

                days.push(<Day key={ this._getKey() } number={ dayNumber } disabled />);

            }

        }

        for (let i = 1; i <= daysInMonth; i++) {

            days.push(<Day key={ this._getKey() } number={ i } />);

        }

        let numberOfTrailingDays = 0;

        if (days.length > 28) {

            numberOfTrailingDays = (42 - days.length);

        }

        for (let i = 0; i < numberOfTrailingDays; i++) {

            days.push(<Day key={ this._getKey() } number={ (i + 1) } disabled />);

        }

        if (days.slice(-7)[0].props.disabled) {

            days.splice(-7, 7);

        }

        return days;  

    }

    render() {

        const { month, year } = this.props;

        return (
            <Container>
                <Days>{ this._draw(month, year) }</Days>
            </Container>
        );

    }

}

const Days = styled.div`
    flex-grow: 88;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Container = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background: #f00;
`;

export default Grid;