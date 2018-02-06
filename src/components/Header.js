import React, {Component} from "react";
import styled from 'styled-components';

//  Data
import letters from '../data/letters';

class Header extends Component {

    constructor(props) {
        
        super(props);

        this.letters = letters;

    }

    render() {

        return (
            <Container>
                {this.letters.map((letter, i) => <Letter key={ i }>{ letter }</Letter>)}
            </Container>
        );

    }

}

const Container = styled.div`
    flex-grow: 88;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Letter = styled.div`
    width: calc(100% * 1/7);
    text-align: center;
    background: #333;
    color: #fff;
    padding:10px 0;
`;

export default Header;