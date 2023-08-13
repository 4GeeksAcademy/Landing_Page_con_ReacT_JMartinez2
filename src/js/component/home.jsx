import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nami from "./NavBar";
import Jumboa from "./Junbotron";
import Cards from "./Cards";
import Foo from "./Footer";

//create your first component
const Home = () => {
	return (
		<div classNamj="text-center">
			<Nami/>
			<div class="mx-4">
				<Jumboa/>
				<div class="row row-cols-1 row-cols-md-4 g-4 " >	
					<Cards/>
					<Cards/>
					<Cards/>
					<Cards/> 
				</div>
			</div>

			<Foo/>
		</div>
	);
};

export default Home;
