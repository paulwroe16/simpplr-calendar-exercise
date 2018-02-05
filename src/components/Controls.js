import React, {Component} from "react";
import styled from 'styled-components';

//  Data
import years from '../data/years';
import months from '../data/months';

class Controls extends Component {

    constructor() {

        super();

        this.years = years;

        this.months = months;

    }

    render() {

        const {
            handlePreviousMonth,
            handleNextMonth,
            handleYearChange,
            handleMonthChange,
            year,
            month
        } = this.props;

        return (
            <Container>
                
                <Button onClick={ handlePreviousMonth }>&lt;</Button>
                
                <Select defaultValue={ year } onChange={ handleYearChange }>
                    {this.years.map((year, i) => {
                        return (<option key={ i } value={ year }>{ year }</option>);
                    })}
                </Select>

                <Select defaultValue={ month } onChange={ handleMonthChange }>
                    {this.months.map((month, i) => {
                        return (<option key={ i } value={ i }>{ month }</option>);
                    })}
                </Select>
                
                <Button onClick={ handleNextMonth }>&gt;</Button>

            </Container>
        );
    }

}

const Container = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
`;

const Select = styled.select`
    flex: 1;
    border: none;
    background: transparent;
    text-align-last: center;
`;

const Button = styled.button`
    flex: 1;
    text-align: center;
    background: #fff;
    color: #333;
    border: none;
    cursor: pointer;
`;

export default Controls;