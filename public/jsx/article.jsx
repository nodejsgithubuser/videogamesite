const React = require('react');
const ReactDOM = require('react-dom');
const Tooltip = require('./tooltip.jsx');

class Article extends React.Component {
  render() {
    return (
      <div>
        <Tooltip title={this.props.title} text={this.props.tooltipText}>
          <img src={this.props.imageUrl} onClick={() => {this.props.displayVideoHandler(this.props.videoUrl)}}/>
        </Tooltip>
        <span className="header"> {this.props.title} </span>
        <span className="footer"> {this.props.company} </span>
      </div>
    );
  }
}

module.exports = Article;
