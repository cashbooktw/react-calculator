let React = require('react');
let Button = require('react-bootstrap').Button;
let CalcuBtn = React.createClass({
  render: function(){
    let btnStyle = {
      margin: 10,
      width: 60,
      height: 40
    };
    return (
      <Button style={btnStyle} bsStyle="info" onClick={this.props.onClick}>{this.props.operator}</Button>
    );
  }
});

module.exports = CalcuBtn;
