import React, {Component} from "react";
import styled from 'styled-components';

class Day extends Component {

    render() {

        const { number, disabled } = this.props;

        return (
        	<Button
                type='button'
                disabled={ disabled ? 'disabled' : null }>
        		{ number }
        	</Button>
        );

    }

}

const Button = styled.button`
    width: calc(100% * 1/7);
    padding:30px 15px 30px 15px;
`;

export default Day;