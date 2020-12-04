import React from "react"

import  Tweet from '../Tweet'

import { Conteiner, Tab, Tweets ,} from "./style"

const Feed: React.FC = () =>{
    return(
        <Conteiner>
            <Tab>Twetts</Tab>
                <Tweets>
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </Tweets>
        </Conteiner>    
    )

}

export default Feed