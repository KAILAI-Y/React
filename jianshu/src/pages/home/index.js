import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src=""/>
                    <Topic />
                    <List />
                    <Recommend />
                    <Writer />
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;