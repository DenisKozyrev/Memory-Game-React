import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { getScore } from 'actions';
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    score: state.score
  }
}

class Score extends React.Component {
  static propTypes = {
    score: PropTypes.array
  }

  componentDidMount() {
    this.props.dispatch(getScore());
  }

  renderRows(score) {
    return score.sort((a, b) => {
      return parseFloat(a.score) - parseFloat(b.score);
    }).map(item => {
      return (
        <tr key={item._id}>
          <td>
            { item.username }
          </td>
          <td>
            { item.score }
          </td>
        </tr>
      );
    })
  }

  render() {
    const { score } = this.props;
    console.log(this.props);
    const rows = this.renderRows(score);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}
export default connect(mapStateToProps)(Score);
