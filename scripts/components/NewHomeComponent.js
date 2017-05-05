
var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div style={{textAlign: "center", padding: "100px"}}>
				<span style={{fontSize: "80px"}}>Bob McCarthy,<br/>Software Engineer</span>
			</div>
		)
	}
});
