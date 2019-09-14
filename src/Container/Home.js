import React from "react";
import { connect } from "react-redux";
import { changedName } from "../Redux/action/homeAction";
import { getData } from "../Redux/action/profileAction";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/the-story`
      )
      .then(res => {
        const { items } = res.data;
        this.props.getData(items);
      });
  }

  render() {
    const { data } = this.props.home;
    return (
      <div>
        {data &&
          data.map((cute, index) => (
            <div className="wrapp">
              <div className="gambar">
                <Link to={`/profile/${index + 1}`}>
                  <img
                    onClick={() => this.props.getData(data)}
                    style={{
                      width: "300px",
                      height: "200px"
                    }}
                    src={cute.thumbnail}
                    alt={cute.alt}
                  />
                </Link>
                <div className="title">
                  <h3>{cute.title}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(
  mapStateToProps,
  { changedName, getData }
)(Home);
