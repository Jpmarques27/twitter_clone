import React from 'react'

import { Conteiner,
        Body, 
        Content, 
        Header, 
        Description, 
        Icon, 
        Status,
        Dot,
        Avatar,
        ImageContent,
        CommentIcon,
        RetweetIcon,
        LikeIcon

    } from './Tweet/style'

const Tweet: React.FC = () =>{

    return(
        <Conteiner>
            
        
            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>João Marques</strong>
                        <span>@joao_27_marques</span>
                        <Dot />
                        <time>4 Dez</time>
                    </Header>
                    <Description>Vamos no dale</Description>
                    <ImageContent />

                    <Icon>
                        <Status id="com">
                            <CommentIcon />
                            200k

                        </Status>
                        <Status id="re">
                            <RetweetIcon />
                            124k

                        </Status>
                        <Status id="like">
                            <LikeIcon />
                            500K

                        </Status>
                    </Icon>   

                </Content>
            </Body>
        </Conteiner>
    )

}
export default Tweet