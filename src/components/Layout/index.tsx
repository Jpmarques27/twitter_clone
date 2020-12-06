import React from 'react'
import MenuBar from '../MenuBar'
import Main from '../Main'
import SideBar from '../SideBar'

import { Conteiner, Wrapper } from './styles'

const Layout: React.FC = () => {
    return(
        <Conteiner>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Conteiner>

    )
}
export default Layout;