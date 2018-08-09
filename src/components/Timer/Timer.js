import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class Timer extends React.Component {
  static propTypes = {
    time: PropTypes.number
  };

  render() {
    const { time } = this.props;
    let ss = time % 60;
    let mm = Math.floor(time / 60) % 60;
    let hh = Math.floor(time / 3600);
    ss = ss < 10 ? "0" + ss : ss;
    mm = mm < 10 ? "0" + mm : mm;
    hh = hh < 10 ? "0" + hh : hh;
    return <p className="timer-numbers">{`${hh}:${mm}:${ss}`}</p>;
  }
}

export default Timer;
