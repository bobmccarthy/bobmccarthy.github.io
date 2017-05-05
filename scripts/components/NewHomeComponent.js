
var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<div style={{textAlign: "center", padding: "100px",width:"100%",backgroundColor:"white",fontFamily:"Futura"}}>

					<span style={{fontSize: "80px"}}>Bob McCarthy,<br/>Software Engineer</span>

					<p style={{margin:"50px 0 0 0"}}>
						<a style={{color:"black"}} href="mailto:bobmccarthyatx@gmail.com?Subject=Hello%20Bob" target="_top">bobmccarthyatx@gmail.com</a>
					</p>


					
					<div style={{margin:"500px 0 0 0"}}>
						<p>Preview of my Portfolio. Mouseover to scroll.</p>
						<iframe style={{width:"60%",height:"300px"}} className="description" src="#/projects"></iframe>
						<p><a href="#/projects">Click</a> to View</p>
					</div>

				</div>
				<div style={{textAlign: "center",padding:"10px"}}>
					<p></p>
				</div>
			</div>

		)
	}
});
