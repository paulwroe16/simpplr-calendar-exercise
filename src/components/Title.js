import React, {Component} from "react";
import styled from 'styled-components';

//  Data
import months from '../data/months';

class Title extends Component {

	constructor() {
		
		super();

		this.months = months;

	}

    render() {

    	const { month, year } = this.props;

        return (<h2>{ this.months[month] }, { year }</h2>);
    }

}

export default Title;