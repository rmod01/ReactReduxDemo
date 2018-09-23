import React from 'react';
import {Link} from 'react-router';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';
import MainSection from './MainSection';
import EmojiSection from './EmojiSection';
import TeamSection from './TeamSection';
import DetailsSection from './DetailsSection';
import ConnectSection from './ConnectSection';

class HomePage extends React.Component {
  render() {

    return(
          <div>
              <Carousel/>
              <Jumbotron/>
              <MainSection/>
              <EmojiSection/>
              <TeamSection/>
              <DetailsSection/>
              <ConnectSection/>
          </div>
    );
  }
}

export default HomePage;
