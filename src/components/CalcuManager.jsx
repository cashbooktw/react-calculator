let React = require('react');
let Panel  = require('react-bootstrap').Panel ;
let CalcuBtn = require('./CalcuBtn.jsx');

let CalcuManager = React.createClass({
  getInitialState: function() {
    return ({field: ""});
  },
  onClick: function(val, e){
    let newValue = this.state.field + val;
    this.setState({field: newValue});
  },
  Clear: function() {
    this.setState({field: ""});
  },
  Equal: function() {
    let result = eval(this.state.field);
    this.setState({field: result});
  },
  render: function() {
    let calcuStyle = {
      width: 340,
      height: 330,
      backgroundColor: "grey",
      paddingTop: 10,
      marginTop: 50,
      marginLeft: "auto",
      marginRight: "auto",
    };
    let panelStyle = {
      width: 320,
      height: 60,
      marginLeft: "auto",
      marginRight: "auto"
    };
    let tableStyle = {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: "auto",
      marginRight: "auto"
    };
    return (
      <div style={calcuStyle}>
        <Panel style={panelStyle}>{this.state.field}</Panel>
        <table style={tableStyle}>
          <tbody>
          <tr>
            <td><CalcuBtn operator="7" onClick={this.onClick.bind(this,"7")} /></td>
            <td><CalcuBtn operator="8" onClick={this.onClick.bind(this,"8")} /></td>
            <td><CalcuBtn operator="9" onClick={this.onClick.bind(this,"9")} /></td>
            <td><CalcuBtn operator="/" onClick={this.onClick.bind(this,"/")} /></td>
          </tr>
          <tr>
            <td><CalcuBtn operator="4" onClick={this.onClick.bind(this,"4")} /></td>
            <td><CalcuBtn operator="5" onClick={this.onClick.bind(this,"5")} /></td>
            <td><CalcuBtn operator="6" onClick={this.onClick.bind(this,"6")} /></td>
            <td><CalcuBtn operator="*" onClick={this.onClick.bind(this,"*")} /></td>
          </tr>
          <tr>
            <td><CalcuBtn operator="1" onClick={this.onClick.bind(this,"1")} /></td>
            <td><CalcuBtn operator="2" onClick={this.onClick.bind(this,"2")} /></td>
            <td><CalcuBtn operator="3" onClick={this.onClick.bind(this,"3")} /></td>
            <td><CalcuBtn operator="-" onClick={this.onClick.bind(this,"-")} /></td>
          </tr>
          <tr>
            <td><CalcuBtn operator="0" onClick={this.onClick.bind(this,"0")} /></td>
            <td><CalcuBtn operator="AC" onClick={this.Clear} /></td>
            <td><CalcuBtn operator="=" onClick={this.Equal} /></td>
            <td><CalcuBtn operator="+" onClick={this.onClick.bind(this,"+")} /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CalcuManager;
