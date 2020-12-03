import React from 'react'

import Main from '../Main'

import { Conteiner, Wrapper } from './styles'

const Layout: React.FC = () => {
    return(
        <Conteiner>
            <Wrapper>
                {/* <MenuBar /> */}
                <Main />
                {/* <SideBar /> */}
            </Wrapper>
        </Conteiner>

    )
}
export default Layout;