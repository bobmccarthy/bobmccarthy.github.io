//This is the navigation component. The router has been passed in as a property.

// <div className="col-xs-12">
// 	<div className="myTitle">
// 		<div>About THE Bob McCarthy</div>
// 	</div>
// </div>


var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<div id="hero">
					<div className="heroText">
						<h1>Bob McCarthy</h1>
						<div className="lineBreak"></div>
						<h4>Software Engineer</h4>
					</div>
				</div>
				<div className="container-fluid">






					<div className="row aboutMe">
						<div className="col-xs-12 col-md-4">
							<h3>About This Site</h3>
							<p>I used ReactJS to build this site as a single page application. It is fully responsive thanks to Bootstrap. </p>
							<p>As you explore my portfolio, click as many buttons as you can. This site is a representation of some of the things I learned over the Front-end Engineering course I took. Have fun and enjoy!</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<h3>Education</h3>
							<p>Proud alumni of The University of Texas, I earned a BA in Sociology with a minor in Philosophy. </p>
							<p>Graduate of The Iron Yard, Austin. Voted "Javascript Warloard". As you explore my portfolio, click as many buttons as you can. This site is a representation of some of the things I learned over the Front-end Engineering course I took. Have fun and enjoy!</p>
						</div>
						<div className="col-xs-12 col-md-4">
							<h3>What About Bob?</h3>
							<p>Since graduating, I became gainfully employed as a Software Engineer/ Intern Manager at Accio Data, a background screening software company in the wonderful town of Dripping Springs, Tx. </p>
							<p>When I'm not behind my screens, you'll often see me with an instrument in my hand. I have a bad, or good depending on how you look at it, habit of trying to learn every instrument I can get my hands on. The outdoors intrigue me. Plus, I am the only person I know who <i>likes</i> whiteboarding.</p>
							<a href="https://www.linkedin.com/in/bobmccarthyatx"><button className="linkedIn">View My LinkedIn</button></a>
						</div>
					</div>
					<div className="row BlogRow">
						<div className="col-xs-12 col-sm-4 rightFloated">
							<div id="carousel-example-generic2" className="carousel slide" data-ride="carousel" data-interval="11000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic2" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/FFL1.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/FFL2.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/FFL3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>


								<a className="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="http://www.friendshipsforlife.org"><h3>FriendshipsForLife.org!</h3></a>
							<p>This is my first contracted project as a web developer. I made this site for a local non-profit that helps adults with special needs connect with the community. It was the first time I created a blog with the ability to select photos from your computer or device so I learned how to use FileStack (previously FilePicker). As the blog is being created, the staff can choose if they want the newest post on the home page. This is a way that the staff can update the page without having to write the code.</p>
							<a href="http://www.friendshipsforlife.org"><button className="exploreBtn">Explore</button></a>
							<a href="https://github.com/bobmccarthy/FFL-site"><button className="codePage">See the Code</button></a>
						</div>
					</div>
					<div className="row GistRow">
						<div className="col-xs-12 col-sm-4">
							<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="10000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/macbook1.jpg"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/gist_iphone6Big.jpg"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/prefs3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>


								<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="#Gist"><h2>You Get the Gist!</h2></a>
							<p>Introducing my next greatest idea, Gist! I was working the Guest Service desk at Whole Foods recently and someone’s really nice grandmother came up to me and said: "My doctor told me I have to eat Gluten Free." Me: "Yes ma’am, how can I help?" Her: "I am so hungry!" This sparked my idea for an app that would allow people to see what groceries are available for their unique diet at the store of their choice. Also built in is a way to make quick grocery lists and save them for future use.</p>
							<a href="#Gist"><button className="exploreBtn">Explore</button></a>
							<a href="https://github.com/bobmccarthy/final-project"><button className="codePage">See the Code</button></a>
						</div>
					</div>
					<div className="row BlogRow">
						<div className="col-xs-12 col-sm-4 rightFloated">
							<div id="carousel-example-generic2" className="carousel slide" data-ride="carousel" data-interval="11000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic2" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic2" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/IronQuizzes1.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/IronQuizzes2.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/IronQuizzes3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>


								<a className="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="#IQ"><h2>Iron Quizzes!</h2></a>
							<p>A group project with over 800 commits to GitHub. We acted as if we got a real user story to make an app that would allow teachers create quizzes that in turn helped track progress and attendence for individuals, classes, and cohorts. </p>
							<a href="#IQ"><button className="exploreBtn">Explore</button></a>
							<a href="https://github.com/TIY-Austin-Front-End-Engineering/Iron-Quizzes"><button className="codePage">See the Code</button></a>
						</div>
					</div>
					<div className="row TicRow">
						<div className="col-xs-12 col-sm-4">
							<div id="carousel-example-generic4" className="carousel slide" data-ride="carousel" data-interval="10000">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic4" data-slide-to="0" className="active"></li>
									<li data-target="#carousel-example-generic4" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic4" data-slide-to="2"></li>
								</ol>

								<div className="carousel-inner">
									<div className="item active">
										<img className="computer1" src="../../images/tic1.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img className="adjust" src="../../images/tic2.png"/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
									<div className="item">
										<img src="../../images/tic3.png" alt="..."/>
										<div className="carousel-caption">
											<h3></h3>
										</div>
									</div>
								</div>


								<a className="left carousel-control" href="#carousel-example-generic4" role="button" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a className="right carousel-control" href="#carousel-example-generic4" role="button" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<a href="#ttt"><h2>Lets Play!</h2></a>
							<p>Take a look at my 24hr code challenge. Built with HTML, CSS, JavaScript, and React.</p>
							<a href="#ttt"><button className="exploreBtn">Explore</button></a>
							<a href="https://github.com/bobmccarthy/tic-tac-bob"><button className="codePage">See the Code</button></a>
						</div>
					</div>
				</div>
				<div className="container-fluid footerP">
					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<h4>Email:</h4>
							<p>bobmccarthyatx@gmail.com</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<h4>Tumblr:</h4>
							<p>bobatx.tumblr.com</p>
						</div>
						<div className="col-xs-12 col-sm-4">
							<h4>Twitter:</h4>
							<p>@bobdevatx</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
// <div className="row ImageRow">
// 	<div className="col-xs-12 col-sm-4 rightFloated">
// 		<div id="carousel-example-generic3" className="carousel slide" data-ride="carousel" data-interval="12000">
// 			<ol className="carousel-indicators">
// 				<li data-target="#carousel-example-generic3" data-slide-to="0" className="active"></li>
// 				<li data-target="#carousel-example-generic3" data-slide-to="1"></li>
// 				<li data-target="#carousel-example-generic3" data-slide-to="2"></li>
// 			</ol>

// 			<div className="carousel-inner">
// 				<div className="item active">
// 					<img className="computer1" src="../../images/ImageBoard.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img className="adjust" src="../../images/ImageBoard.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img src="../../images/ImageBoard.png" alt="..."/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 			</div>


// 			<a className="left carousel-control" href="#carousel-example-generic3" role="button" data-slide="prev">
// 				<span className="glyphicon glyphicon-chevron-left"></span>
// 			</a>
// 			<a className="right carousel-control" href="#carousel-example-generic3" role="button" data-slide="next">
// 				<span className="glyphicon glyphicon-chevron-right"></span>
// 			</a>
// 		</div> 
// 	</div>
// 	<div className="col-xs-12 col-sm-8">
// 		<a href="#BL"><h2>Ajax Image Board!!</h2></a>
// 		<p>Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board Ajax Image Board</p>
// 		<a href="#IB"><button className="exploreBtn">Explore</button></a>
// 	</div>
// </div>
// <div className="row ProductsRow">
// 	<div className="col-xs-12 col-sm-4 rightFloated">
// 		<div id="carousel-example-generic4" className="carousel slide" data-ride="carousel" data-interval="12000">
// 			<ol className="carousel-indicators">
// 				<li data-target="#carousel-example-generic4" data-slide-to="0" className="active"></li>
// 				<li data-target="#carousel-example-generic4" data-slide-to="1"></li>
// 				<li data-target="#carousel-example-generic4" data-slide-to="2"></li>
// 			</ol>

// 			<div className="carousel-inner">
// 				<div className="item active">
// 					<img className="computer1" src="../../images/parse-products.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img className="adjust" src="../../images/parse-products.png"/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 				<div className="item">
// 					<img src="../../images/parse-products.png" alt="..."/>
// 					<div className="carousel-caption">
// 						<h3></h3>
// 					</div>
// 				</div>
// 			</div>


// 			<a className="left carousel-control" href="#carousel-example-generic4" role="button" data-slide="prev">
// 				<span className="glyphicon glyphicon-chevron-left"></span>
// 			</a>
// 			<a className="right carousel-control" href="#carousel-example-generic4" role="button" data-slide="next">
// 				<span className="glyphicon glyphicon-chevron-right"></span>
// 			</a>
// 		</div> 
// 	</div>
// 	<div className="col-xs-12 col-sm-8">
// 		<a href="#BL"><h2>Parse-Products!!</h2></a>
// 		<p>Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project Parse Products Project </p>
// 		<a href="#PP"><button className="exploreBtn">Explore</button></a>
// 	</div>
// </div>
// <div className="homeImg">
// 					<img src="../../images/comp2.jpg"/>
// 					<img src="../../images/phone.png"/>
// 				</div>
