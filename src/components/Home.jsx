import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
	return (
		<div className="home">
						
						<div className="wrapper">
								<div className="typing-demo">
													<h1 style={{ fontWeight: 200 }}><strong>
														"ASSETTO" is Simply A DECENTRALISED ASSET MANAGEMENT Platform. <br />
														<><br />
														Build on the NERVOUS NETWORK BLOCKCHAIN Protocol.
														</><br/>
														<><br />
														It is a SECURE FORM Of STORING IMPORTANT documents on the Blockchain.
														</><br/>
														<><br />
													 As Nervous Network Provides LUCID DEPLOYMENT Enviornment to achieve it Easily.
														</>
												  </strong>
														
														</h1> 
								</div>
							</div>

							<div className="main_lo">
							<img src="/main_logo_home.png" alt="assetto logo" />
							</div>
							
							<div className="info">

								<div className="links">
									<Link role="button" to="/create">
										Upload
									</Link>
									<Link role="button" to="/verify">
										Verify
									</Link>
									<Link role="button" to="/actions">
										Retrieve
									</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
