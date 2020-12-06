import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import Follows from '../Follows'
import News from '../News'
 

import {Container,
        SearchWrapper,
        SearchInput,
        SearchIcon,
        Body,
        } from './style'

const SideBar: React.FC = () => {
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search on Twitter"/>
                <SearchIcon />
            </SearchWrapper>
           <StickyBox>

            <Body>
                <List 
                    title="Trends for you"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />

                <List 
                    title="Who to follow"
                    elements={[
                        <Follows 
                            name="Elon Musk"
                            nickname="@elonmask"
                        />,
                        <Follows 
                            name="Cristiano Ronaldo"
                            nickname="@CRonaldo7"
                         />,
                        <Follows 
                            name="Fc Sporting"
                            nickname="@Sporting"
                        />,
                    ]}
                />
            </Body>
           </StickyBox>
        </Container>
    );
}

export default SideBar
