import React from 'react';
import {Link} from 'react-router';

class EmojiSection extends React.Component {
  render() {
    return(
      <div>
          <button className="fun" data-toggle="collapse" data-target="#emoji">
            Click to know us more and better :)
            </button>
          <div id="emoji" className="collapse">
            <div className="container-fluid padding">
                <div className="row text-center">
                  <div className="col-sm-6 col-md-3">
                    <img className="gif" src={require('./img/gif/Achivements.gif')}></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Achivements
                    </p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <img className="gif" src={require('./img/gif/Christmas.gif')}></img>
                    <br></br>
                    <br></br>
                    <p>Festival Celebrations
                    </p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <img className="gif" src={require('./img/gif/TeamOuting.gif')}></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Team Outtings
                    </p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <img className="gif" src={require('./img/gif/Easter.gif')}></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Easter
                    </p>
                  </div>
                </div>
            </div>
          </div>
    </div>

      );
    }
}
export default EmojiSection;
