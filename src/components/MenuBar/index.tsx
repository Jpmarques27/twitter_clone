import React from 'react' 

import Button from '../Buttom'

import { Container, 
    Topside , 
    TwitterLogo , 
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    ProfilIcon,
    FavoriteIcon,

     } from './style'

const MenuBar: React.FC = () =>{
    
    return(
        <Container>
            <Topside>
                <TwitterLogo />

                <MenuButton>
                    <HomeIcon />
                    <span>Home Page</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Menssage</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span> Favorites </span>
                </MenuButton>
                
                <MenuButton className="active">
                    <ProfilIcon />
                    <span>Profile</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>

                </Button>

            </Topside>
        </Container>

    )

}
export default MenuBar