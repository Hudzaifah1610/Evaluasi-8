import React from "react";
import { connect } from "react-redux";
import {Jumbotron, Button } from "react-bootstrap";
import "../style.css";

class Profile extends React.Component {
  state = {};
  render() {
    console.log(this.props.Profile);
    const { data } = this.props.profile;
    const { id } = this.props.match.params;

    return (
      <div className="wrapping">
        <div dangerouslySetInnerHTML={{ __html: data[id - 1].description }} />
        <Jumbotron className="jumbotron">
          <h1>You read a lot. We like that.</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Upgrade</Button>
          </p>
        </Jumbotron>
        <div className="button">
          <button>Brexit</button>
          <button>Borish Johnson</button>
          <button>Britain</button>
          <button>Succed</button>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    profile: state.home
  };
};

export default connect(mapStateToprops)(Profile);
