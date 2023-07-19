window.onload = function () {
	document.addEventListener('mouseover', function(e){
	//getting the project image element
  	const element = e.target;
    if(element.classList.contains("project_image")) {
      var pIndex = element.getAttribute("p-index")
      updateText(pIndex);
  	}
	})
}

function updateText(index) {
	const title = document.querySelector(".big_title");
	const summary = document.querySelector(".summary_home");
	const textRight = document.querySelector(".text_right");
  var i = parseInt(index,10);
  
  //update title font to default (large)
  title.style.fontSize = "5.5vw";
  title.style.lineHeight = "5.5vw";
  
  //change sidebar text
  switch (i) {
    case 2: case 6:
    	title.innerHTML = "Convergent Housing";
    	summary.innerHTML = "Integrated Housing Studio / Spring 2023 <br>–––––––––––––––––––––––––––––––––––––––––––––– <br>Baltimore, Maryland <br>Professors Mersiha Veledar, Daisy Ames, Nader Tehrani <br><br>Convergent living proposes a new typology that redefines unit boundaries and linkages between tight communities, within a larger connected complex. The perimeter condition punctured by openings invites public program and events to the block interior. Traditional double-loaded circulatory spines are reimagined into activity spaces by enlarging public areas and creating vertical cuts that allow access to natural light and views.<br><br>A new concept where units are linked by balconies capture multigenerational and modern living arrangements, allowing connection while retaining individuality. A continuous public promenade spirals sectionally through each complex, leading residents to a central public volume.";
	break;
    case 4: case 8:
    	title.innerHTML = "Exquisite Corpse";
    	summary.innerHTML = "Design II / Fall 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Astor Place, New York City<br>Professor Nima Javidi<br><br>This concept for Astor place at the heart of the East Village proposes a volumetric boolean between a public promenade and private short-stay rooms. The promenade seamlessly attaches the subway entrance, Astor Place Plaza, an ascending public staircase, a bathhouse and an exhibition hall into a malleable figure inside a rigid shell, only revealing its hinted peculiarities to an interior seam.<br><br>Beginning with a collage-montage of public voids within the building envelope mass, the design evolved through sculpting the connected voids as a figure absorbing the roles of entrance, circulation, communal space skylight.";
      	break;
    case 1: case 5:
    	title.innerHTML = "Ritual Space";
    	summary.innerHTML = "A space for contemplation and meditation hovers between ground and sky. Openings folded into the roof and soft depressions imprinted into earth serve to redivide program by replacing rigid planimetric walls with sectional compression and expansion. The result is an equilibrium at the intersection of vertical forces and the surrounding horizon.<br><br>Approaching the building begins by a descent from surrounding landscape into a recessed area which serves to narrow the building’s profile. The path then traverses a nonconforming ground condition complemented by the roof’s uniform rigidity, and leads to a sculpted entrance surrounded by vegetation.";
	break;
    case 0:
    	title.innerHTML = "Spatial Morph";
    	summary.innerHTML = "Architectonics / Spring 2021<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Lower East Side Community Center<br>Professor James Lowder<br><br>This project examines the rigidity of ribbon forms transformed to three dimensions, as well as topological organizations regulated by program and accessibility. Walls seem to become floors and then walls again, wrapping and distorting to separate and connect spaces. A surrounding glass envelope is then penetrated by timber members and circulation spines running vertically and horizontally. The effect is a single surface presenting spaces of intrigue and exploration, rationalized by responding to circulatory and service systems. It simultaneously conforms and rebels, connects and disconnects, defines and un-defines space.";
	break;
   	case 3:
    	title.innerHTML = "Quartiere Matteoti";
      	summary.innerHTML = "Housing Analysis Studio / Fall 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Terni, Italy / Giancarlo de Carlo<br>Professor Guido Zuliani<br>Group Project with Tina Chang, Laura Song<br><br> De Carlo’s Quartiere Matteoti tries not to impress nor convince, but to disappear. The project is an early critique of modernist urbanism; through form and a participational design process, De Carlo disrupts uniformity yet respects vernacular context and the modesty demanded by high density housing. Tiered terraces, an extensive network and ambitions for a larger urban outlet are examples of responsible design. While using only three basic unit types, their arrangement, rotation and relation to communal paths result in endless combinations on a macro scale. All work is own unless otherwise noted.";
	break;
    case 13:
    	title.innerHTML = "Hippodromo de la Zarzuela";
      	summary.innerHTML = "Structures / Fall 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Madrid, Spain<br>Professor Thorsten Helbig, Florian Meier<br>Group Project with Arthur Lee, Zelda Liu<br><br>Torroja’s cantilevering roof uses prestressed concrete to achieve remarkable span and thinness. This model displays the compressive forces using numerous transparent cross sectional pieces held together only by a string through holes in each piece, simulating the steel rebar tightened on site. As demonstrated, the model is flexible upward but rigid downward, as the shape of the cable is particular to the stresses of the arched geometry.";
  	title.style.fontSize = "4.5vw";
  	title.style.lineHeight = "4.5vw";
      	break;
    case 9:
    	title.innerHTML = "Tao Pavilion";
      	summary.innerHTML = "Structures / Fall 2021<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Taiwan<br>Professor Elizabeth O’Donnell<br>Group Project with Arthur Lee<br><br>Only touching the ground at four points, the Tao Pavilion uses a set of interlocking laminated timber pieces in a grid pattern to gracefully rise and rest. Funicular elements carry load from the top to the four points through raised intersections, while the four openings cantilever from the edges.";
	break;
    case 14:
    	title.innerHTML = "Kanchanjunga Apartments";
      	summary.innerHTML = "Housing Analysis Studio / Fall 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Mumbai, India / Charles Correa<br>Professor Guido Zuliani<br>Group Project with Tina Chang, Laura Song<br><br>Kanchanjunga Apartments by Charles Correa asserts a radical tower typology and innovative mode of living. A formal cousin to Unité d’habitation by Le Corbusier, Correa’s tower creates sectional variation to break away from repeated “typical plans” of monotony. In doing so the building is organized as interlocking volumes with two stories on one side and one on the other. Yet the real brilliance is in an additional variation with uniform height, created to further break from a contrived ABAB pattern and establish a non-uniform outward expression. Its distinctive balconies add depth, colour and personality to the minimal facade. All work is own unless otherwise noted.";
	title.style.fontSize = "4.5vw";
      	title.style.lineHeight = "4.5vw";
      	break;
    case 11:
    	title.innerHTML = "Artigas Concrete Column";
      	summary.innerHTML = "Building Technology / Fall 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>São Paulo, Brazil<br>Jaú Bus Terminal / Vilanova Artigas<br>Professor Sam Anderson<br>Group Project with Riley Howard, Qrin Park, Zelda Liu, Tina Chang<br><br>Artigas’s concrete column splits into four spokes bounded by a tension ring in the top slab, allowing light to enter from above and spreads out the transfer of horizontal forces. Our 1:8 scale model uses a CNC fabricated foam mold, bent rebar and cast concrete to replicate the structural performance of this architectural moment.";
      	title.style.fontSize = "4.5vw";
      	title.style.lineHeight = "4.5vw";
      	break;
    case 12:
    	title.innerHTML = "Inflatable Chair";
      	summary.innerHTML = "Environmental Technology / Spring 2023<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Professor Tommy Schaperkotter<br>Group Project with Evan Chiang, Zelda Liu<br><br>The inflatable chair concept uses a wooden structural frame with special joints that allow it to unfold and lock in place, and clear vinyl cushions supported by through-holes. The small, lightweight packaging and sustainable materials reduces the chair’s embodied carbon to 3.4 kgCO2e.";
      	break;
    case 7:
    	title.innerHTML = "Floating Pavilion";
      	summary.innerHTML = "Structures / Spring 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Professor Joseph Choma<br><br> These structural concepts appear impossibly floating, demonstrating a surreal lightness and effortless poise. The support mechanism is achieved by using distributed tensile and compressive elements for stability. In the wind, the radio tower and pavilion prototypes move in performance. No glue is used for the tower.";
	break;
    case 10:
    	title.innerHTML = "Descriptive Geometry";
      	summary.innerHTML = "Spring 2021<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Professor James Lowder<br><br>Rotations, intersections, boolean operations, deformations and movement can be captured by descriptive geometry. Critical analyses of architecture, objects, and perception are be produced through hand-drawn, graphic calculation techniques.";
      	break;
    case 15:
    	title.innerHTML = "Modular Habitat";
      	summary.innerHTML = "Environments / Fall 2021<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Professor Lydia Kallipoliti<br>Group Project with Evan Chiang, Arthur Lee";
      	break;
    case 16:
    	title.innerHTML = "IKEA Carbon Form";
      	summary.innerHTML = "Environments / Spring 2022<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Professor Elisa Iturbe<br>Group project with Sofia Mercado, Evan Chiang, Zelda Liu<br><br>The worldwide ready-to-assemble furniture company IKEA has seamlessly integrated itself into mass culture. From the parking lot, showroom, and warehouse, IKEA as a big-box store assembles the three typologies in a choreographed sequence to promote consumption. <br><br>An analysis of its urban context reveals that IKEA acts as a passive carbon form by privileging private transportation.  IKEA plays into the current energy paradigm through its spatial and economic configuration.";
      	break;	  
    case 17:
    	title.innerHTML = "Solar Decathlon";
      	summary.innerHTML = "US Department of Energy Solar Decathlon<br>New York Harbour School Expansion & Renovation<br>––––––––––––––––––––––––––––––––––––––––––––––<br>Advisors Nader Tehrani, Pamela Cabrera, Julian Palacio<br>Team: Ji Yong Chung, Shannagh Crowe, Lionel Gilliar-Schoenenberger, Sophia Zhao, Benny Wu, Larry Zeng, Sarah Coraizaca, Samantha Wu, Mizanul Hoque, Amelia Roopnarine<br><br>Our project to expand the New York Harbour school on Governor’s Island focuses on enhancing its unique location and martime-focused education. The proposal creates new community space, circulation and connection to the campus through sculpted landscapes, public volumes and paths. We reach a net-zero design by integrating photovoltaic panels, mindful reuse of construction material, a green roof, geothermal energy piles, a rainwater capture system and other technologies. We also carefully consider flood levels and climate conditions through design in section, plant selection and structural innovations such as the bathtub style foundation to create a resilient campus. ";
      	break;
    case 100:
    	title.innerHTML = "";
      	summary.innerHTML = "";
      	break;
  }
  
  //change index
  var text_index = i < 10 ? "0" + index : index;
  textRight.innerHTML = text_index;
}
