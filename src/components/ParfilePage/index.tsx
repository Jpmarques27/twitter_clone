import React from 'react'

import Feed from '../Feed'

import {Container, 
        Banner, 
        Avatar, 
        ProfileData,
        LocationIcon,
        CakeIcon,
        Followage,
        EditButton,
    } from './styles'

const ParfilePage: React.FC = ()  => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner> 

            <ProfileData>
                <EditButton outlined>Editar perfil </EditButton>

                <h1>João Marques</h1>
                <h2>@joao_o_marques</h2>
                <p>
                    Developer student
                </p>
               <ul>
                <li>
                    <LocationIcon />
                    Lisboa, Portugal
                </li> 
                <li>
                    <CakeIcon />
                    Born on 8 of june 2000
                </li> 
               </ul> 
               <Followage>
                   <span>
                       follow <strong>100</strong>
                   </span>
                   <span>
                       <strong>1.2M </strong> followers
                   </span>
               </Followage>
            </ProfileData>
            <Feed /> 
        </Container>

    )

}

export default ParfilePage