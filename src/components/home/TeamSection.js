import React from 'react';
import {Link} from 'react-router';

class TeamSection extends React.Component {
  render() {
    return(
      <div>
          <div className="container-fluid padding">
            <div className="row welcome text-center">
              <div className="col-12">
                <h1 className="display-4">Meet our teams</h1>
                </div>
            </div>
          </div>

          <div className="container-fluid padding">
            <div className="row padding">
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src={require('./img/team1.png')}></img>
                      <div className="card-body">
                        <h4 className="card-title">CRM</h4>
                        <p>Sales and Service focused team. Navigates and thrives with every step forward...</p>
                        <a href="#" className="btn btn-outline-secondary">See us in more detail...</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src={require('./img/team2.png')}></img>
                      <div className="card-body">
                        <h4 className="card-title">GCM</h4>
                        <p>Amazing team. Navigates and thrives with every step forward...</p>
                        <a href="#" className="btn btn-outline-secondary">See us in more detail...</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src={require('./img/team3.png')}></img>
                      <div className="card-body">
                        <h4 className="card-title">DE</h4>
                        <p>Lean and strong team. Navigates and thrives with every step forward...</p>
                        <a href="#" className="btn btn-outline-secondary">See us in more detail...</a>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
      </div>
      );
    }
}
export default TeamSection;
