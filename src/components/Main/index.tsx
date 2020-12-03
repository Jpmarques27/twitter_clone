import React from 'react'

import ParfilePage from '../ParfilePage' 

import { Conteiner, 
        Header, 
        BackIcon, 
        ProrfileInfo,
        SearchIcon,
        ButonMenu,
        HomeIcon,
        BellIcon,
        EmailIcon,

     } from './style'

const Main: React.FC = () => {
    return(
        <Conteiner>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProrfileInfo>
                    <strong>João Marques</strong>
                    <span>612 tweets</span>
                </ProrfileInfo>
            </Header>
            <ParfilePage /> 
         <ButonMenu>
            <HomeIcon className="active"/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon /> 
        </ButonMenu>
        </Conteiner>

    );
}
export default Main;