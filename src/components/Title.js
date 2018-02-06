import React, {Component} from "react";
import styled from 'styled-components';

//  Data
import months from '../data/months';

class Title extends Component {

	constructor(props) {
		
		super(props);

		this.months = months;

	}

    render() {

    	const { month, year } = this.props;

        return (<h2>{ this.months[month] }, { year }</h2>);
    }

}

export default Title;