(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
var HundredSpecs = function() {
	js.mocha.M.describe("Unicorn",$bind(this,this.step1));
	js.mocha.M.describe("Videogame System",$bind(this,this.step2));
	js.mocha.M.describe("Sahara Animal",$bind(this,this.step3));
	js.mocha.M.describe("Planets",$bind(this,this.step4));
	js.mocha.M.describe("Galilean Moons",$bind(this,this.step5));
	js.mocha.M.describe("Golden Ratio φ",$bind(this,this.step6));
	js.mocha.M.describe("Water Comprising Earth's Surface",$bind(this,this.step7));
	js.mocha.M.describe("Club Name",$bind(this,this.step8));
	js.mocha.M.describe("Gender",$bind(this,this.step9));
	js.mocha.M.describe("Princess Leia",$bind(this,this.step10));
	js.mocha.M.describe("Domains",$bind(this,this.step11));
	js.mocha.M.describe("Browsers",$bind(this,this.step12));
	js.mocha.M.describe("Rainbow",$bind(this,this.step13));
	js.mocha.M.describe("Step 20",$bind(this,this.step20));
	js.mocha.M.describe("Step 50",$bind(this,this.step50));
	js.mocha.M.describe("Step 51",$bind(this,this.step51));
	js.mocha.M.describe("Step 52",$bind(this,this.step52));
	js.mocha.M.describe("Step 53",$bind(this,this.step53));
	js.mocha.M.describe("Step 54",$bind(this,this.step54));
	js.mocha.M.describe("Step 55",$bind(this,this.step55));
	js.mocha.M.describe("Step 56",$bind(this,this.step56));
	js.mocha.M.describe("Step 57",$bind(this,this.step57));
	js.mocha.M.describe("Step 58",$bind(this,this.step58));
	js.mocha.M.describe("Step 59",$bind(this,this.step59));
	js.mocha.M.describe("Step 60",$bind(this,this.step60));
	js.mocha.M.describe("Step 61",$bind(this,this.step61));
	js.mocha.M.describe("Step 62",$bind(this,this.step62));
	js.mocha.M.describe("Step 63",$bind(this,this.step63));
	js.mocha.M.describe("Step 64",$bind(this,this.step64));
	js.mocha.M.describe("Step 65",$bind(this,this.step65));
	js.mocha.M.describe("Step 66",$bind(this,this.step66));
	js.mocha.M.describe("Step 67",$bind(this,this.step67));
	js.mocha.M.describe("Step 68",$bind(this,this.step68));
	js.mocha.M.describe("Step 69",$bind(this,this.step69));
	js.mocha.M.describe("Step 70",$bind(this,this.step70));
	js.mocha.M.describe("Step 71",$bind(this,this.step71));
	js.mocha.M.describe("Step 72",$bind(this,this.step72));
	js.mocha.M.describe("Step 73",$bind(this,this.step73));
	js.mocha.M.describe("Step 74",$bind(this,this.step74));
	js.mocha.M.describe("Step 75",$bind(this,this.step75));
	js.mocha.M.describe("Step 76",$bind(this,this.step76));
	js.mocha.M.describe("Step 77",$bind(this,this.step77));
	js.mocha.M.describe("Step 78",$bind(this,this.step78));
	js.mocha.M.describe("Step 79",$bind(this,this.step79));
};
HundredSpecs.__name__ = true;
HundredSpecs.main = function() {
	js.mocha.Mocha.setup({ ui : js.mocha.Ui.BDD});
	new HundredSpecs();
	js.mocha.Mocha.run();
};
HundredSpecs.prototype = {
	step1: function() {
		js.mocha.M.it("should declare a variable named 'unicorn' with no value set.",function() {
			if(unicorn == null) js.expect.E.expect(true).to.be.ok(); else js.expect.E.expect().fail("unicorn is not set");
		});
	}
	,step2: function() {
		js.mocha.M.it("should declare a variable named 'videogame_system' with a value of 'Atari'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(videogame_system),"Atari");
		});
	}
	,step3: function() {
		js.mocha.M.it("should declare a variable named 'sahara_animal' with a value of 'The Addax'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(sahara_animal),"The Addax");
		});
	}
	,step4: function() {
		js.mocha.M.it("should declare a variable named 'planets' that is an array.",function() {
			js.expect.E.expect(planets).to.be.an(Array);
		});
		js.mocha.M.it("should have 8 items",function() {
			js.expect.E.expect(planets.length).to.eql(8);
		});
		var lowercase_planets_0 = "mercury";
		var lowercase_planets_1 = "venus";
		var lowercase_planets_2 = "earth";
		var lowercase_planets_3 = "mars";
		var lowercase_planets_4 = "jupiter";
		var lowercase_planets_5 = "saturn";
		var lowercase_planets_6 = "uranus";
		var lowercase_planets_7 = "neptune";
		js.mocha.M.it("should contain the name of each of our solar system's planets",function() {
			js.expect.E.expect(lowercase_planets_0).to.eql(planets[0]);
			js.expect.E.expect(lowercase_planets_1).to.eql(planets[1]);
			js.expect.E.expect(lowercase_planets_2).to.eql(planets[2]);
			js.expect.E.expect(lowercase_planets_3).to.eql(planets[3]);
			js.expect.E.expect(lowercase_planets_4).to.eql(planets[4]);
			js.expect.E.expect(lowercase_planets_5).to.eql(planets[5]);
			js.expect.E.expect(lowercase_planets_6).to.eql(planets[6]);
			js.expect.E.expect(lowercase_planets_7).to.eql(planets[7]);
		});
		js.mocha.M.it("should have each planet listed in order",function() {
			js.expect.E.expect(planets[0].toLowerCase()).to.eql("mercury");
			js.expect.E.expect(planets[1].toLowerCase()).to.eql("venus");
			js.expect.E.expect(planets[2].toLowerCase()).to.eql("earth");
			js.expect.E.expect(planets[3].toLowerCase()).to.eql("mars");
			js.expect.E.expect(planets[4].toLowerCase()).to.eql("jupiter");
			js.expect.E.expect(planets[5].toLowerCase()).to.eql("saturn");
			js.expect.E.expect(planets[6].toLowerCase()).to.eql("uranus");
			js.expect.E.expect(planets[7].toLowerCase()).to.eql("neptune");
		});
	}
	,step5: function() {
		js.mocha.M.it("should declare a variable named 'galilean_moons' that is an array.",function() {
			js.expect.E.expect(galilean_moons).to.be.an(Array);
		});
		js.mocha.M.it("should have 4 items",function() {
			js.expect.E.expect(galilean_moons).to.have.length(4);
		});
		js.mocha.M.it("should contain the name of each galilean moon of Jupiter",function() {
			var lowercase_moons = ["io","europa","ganymede","callisto"];
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[0].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[1].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[2].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[3].toLowerCase());
		});
	}
	,step6: function() {
		js.mocha.M.it("should declare a variable named 'golden_ratio' with a value of '1.61803398874'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(golden_ratio),1.61803398874);
		});
	}
	,step7: function() {
		js.mocha.M.it("should declare a variable named 'earths_water_composition' with a value representing 71%.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(earths_water_composition),0.71);
		});
	}
	,step8: function() {
		js.mocha.M.it("should declare a variable named 'club_name' with a value of 'Fight Club'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(club_name),"Fight Club");
		});
	}
	,step9: function() {
		js.mocha.M.it("should declare a literal object named 'Gender'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(Gender).not,null);
		});
		js.mocha.M.it("should have 3 properties",function() {
			js.expect.E.expect(Reflect.fields(Gender)).to.have.length(3);
		});
		js.mocha.M.it("should define genders female, male, and unknown.",function() {
			js.expect.E.expect(Gender.female).to.eql("female");
			js.expect.E.expect(Gender.male).to.eql("male");
			js.expect.E.expect(Gender.unknown).to.be.an("undefined");
		});
	}
	,step10: function() {
		js.mocha.M.it("should declare a literal object named 'princess_leia'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(princess_leia).not,null);
		});
		js.mocha.M.it("should have 4 properties",function() {
			js.expect.E.expect(Reflect.fields(princess_leia)).to.have.length(4);
		});
		js.mocha.M.it("should define princess_leia's properties: name, money, age, and gender.",function() {
			js.expect.E.expect(princess_leia.name).to.eql("Leia Organa");
			js.expect.E.expect(princess_leia.money).to.eql(890);
			js.expect.E.expect(princess_leia.age).to.eql(20);
			js.expect.E.expect(princess_leia.gender).to.eql("female");
		});
	}
	,step11: function() {
		js.mocha.M.it("should declare a literal object named 'domains'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(domains).not,null);
		});
		js.mocha.M.it("should have 4 properties",function() {
			js.expect.E.expect(Reflect.fields(domains)).to.have.length(4);
		});
		js.mocha.M.it("should define domain names mapped to ip addresses.",function() {
			js.expect.E.expect(domains["ycombinator.com"]).to.eql("198.41.190.47");
			js.expect.E.expect(domains["laughingsquid.com"]).to.eql("162.159.247.97");
			js.expect.E.expect(domains["slumlordhosting.com"]).to.eql("198.61.179.126");
			js.expect.E.expect(domains["jsonformatter.curiousconcept.com"]).to.eql("104.28.5.70");
		});
	}
	,step12: function() {
		js.mocha.M.it("should declare a literal object named 'browsers'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(browsers).not,null);
		});
		js.mocha.M.it("should have 8 properties",function() {
			js.expect.E.expect(Reflect.fields(browsers)).to.have.length(8);
		});
		js.mocha.M.it("should define browsers and their developer.",function() {
			js.expect.E.expect(browsers.Chrome).to.eql("google");
			js.expect.E.expect(browsers.Chromium).to.eql("google");
			js.expect.E.expect(browsers.Safari).to.eql("apple");
			js.expect.E.expect(browsers.Opera).to.eql("opera");
			js.expect.E.expect(browsers.Firefox).to.eql("mozilla");
			js.expect.E.expect(browsers.Sleipnir).to.eql("fenrir");
			js.expect.E.expect(browsers.Konqueror).to.eql("KDE");
			js.expect.E.expect(browsers.Links).to.eql("GPLv2+");
		});
	}
	,step13: function() {
		js.mocha.M.it("should declare a literal object named 'rainbow'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(rainbow).not,null);
		});
		js.mocha.M.it("should have 2 properties",function() {
			js.expect.E.expect(Reflect.fields(rainbow)).to.have.length(2);
		});
		js.mocha.M.it("colors should have 7 properties",function() {
			js.expect.E.expect(Reflect.fields(rainbow.colors)).to.have.length(7);
		});
		js.mocha.M.it("colors should define 7 colors in hexadecimal format",function() {
			js.expect.E.expect(rainbow.colors.red).to.eql("#F0280A");
			js.expect.E.expect(rainbow.colors.orange).to.eql("#FF8800");
			js.expect.E.expect(rainbow.colors.yellow).to.eql("#FFDD00");
			js.expect.E.expect(rainbow.colors.green).to.eql("#51AB0C");
			js.expect.E.expect(rainbow.colors.blue).to.eql("#1593ED");
			js.expect.E.expect(rainbow.colors.indigo).to.eql("#5215ED");
			js.expect.E.expect(rainbow.colors.violet).to.eql("#A915ED");
		});
		js.mocha.M.it("should be a double rainbow",function() {
			js.expect.E.expect(Reflect.fields(rainbow.isDouble)).to.be.ok();
		});
	}
	,step20: function() {
		js.mocha.M.it("should define a function named 'sahara_river'.",function() {
			js.expect.E.expect(sahara_river).to.be.a("function");
		});
		js.mocha.M.it("'sahara_river' should return the string 'Nile River'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(sahara_river()),"Nile River");
		});
	}
	,step50: function() {
		js.mocha.M.it("should define a class named 'Animal'.",function() {
			js.expect.E.expect(Animal).to.be.a("function");
		});
		js.mocha.M.it("should have a species property.",function() {
			js.expect.E.expect(new Animal('Frog', 'male')).to.have.property("species");
		});
		js.mocha.M.it("should have a gender property.",function() {
			js.expect.E.expect(new Animal('Frog', 'male')).to.have.property("gender");
		});
	}
	,step51: function() {
		js.mocha.M.it("should define a class named 'Vehicle'.",function() {
			js.expect.E.expect(Vehicle).to.be.a("function");
		});
		js.mocha.M.it("should have a make property.",function() {
			js.expect.E.expect(new Vehicle('Mazda', 'RX-4')).to.have.property("make");
		});
		js.mocha.M.it("should have a model property.",function() {
			js.expect.E.expect(new Vehicle('Mazda', 'RX-4')).to.have.property("model");
		});
	}
	,step52: function() {
		js.mocha.M.it("should define a class named 'Shape'.",function() {
			js.expect.E.expect(Shape).to.be.a("function");
		});
		js.mocha.M.it("should have a sides property.",function() {
			js.expect.E.expect(new Shape(5)).to.have.property("sides");
		});
	}
	,step53: function() {
		js.mocha.M.it("should define a class named 'Box'.",function() {
			js.expect.E.expect(Box).to.be.a("function");
		});
		js.mocha.M.it("should have a contents property.",function() {
			js.expect.E.expect(new Box({}, false)).to.have.property("contents");
		});
		js.mocha.M.it("should have a isOpen property.",function() {
			js.expect.E.expect(new Box({}, true)).to.have.property("isOpen");
		});
	}
	,step54: function() {
		js.mocha.M.it("should define a class named 'Door'.",function() {
			js.expect.E.expect(Door).to.be.a("function");
		});
		js.mocha.M.it("should have a isOpen property.",function() {
			js.expect.E.expect(new Door(false)).to.have.property("isOpen");
		});
	}
	,step55: function() {
		js.mocha.M.it("should define a class named 'Shoe'.",function() {
			js.expect.E.expect(Shoe).to.be.a("function");
		});
		js.mocha.M.it("should have a size property.",function() {
			js.expect.E.expect(new Shoe(6, 'red')).to.have.property("size");
		});
		js.mocha.M.it("should have a color property.",function() {
			js.expect.E.expect(new Shoe(6, 'red')).to.have.property("color");
		});
	}
	,step56: function() {
		js.mocha.M.it("should define a class named 'House'.",function() {
			js.expect.E.expect(House).to.be.a("function");
		});
		js.mocha.M.it("should have a stories property.",function() {
			js.expect.E.expect(new House(6)).to.have.property("stories");
		});
	}
	,step57: function() {
		js.mocha.M.it("should define a class named 'Lightbulb'.",function() {
			js.expect.E.expect(Lightbulb).to.be.a("function");
		});
		js.mocha.M.it("should have a isOn property.",function() {
			js.expect.E.expect(new Lightbulb(false)).to.have.property("isOn");
		});
	}
	,step58: function() {
		js.mocha.M.it("should define a class named 'Cookie'.",function() {
			js.expect.E.expect(Cookie).to.be.a("function");
		});
		js.mocha.M.it("should have a flavor property.",function() {
			js.expect.E.expect(new Cookie('vanilla')).to.have.property("flavor");
		});
	}
	,step59: function() {
		js.mocha.M.it("should define a class named 'Meal'.",function() {
			js.expect.E.expect(Meal).to.be.a("function");
		});
		js.mocha.M.it("should have a foods property.",function() {
			js.expect.E.expect(new Meal(['sandwich', 'chips', 'cola'])).to.have.property("foods");
		});
	}
	,step60: function() {
		js.mocha.M.it("'george' should be an Animal.",function() {
			js.expect.E.expect(george).to.be.a(Animal);
		});
		js.mocha.M.it("species should be a Monkey.",function() {
			js.expect.E.expect(george.species).to.equal("Monkey");
		});
		js.mocha.M.it("gender should be male.",function() {
			js.expect.E.expect(george.gender).to.equal("male");
		});
	}
	,step61: function() {
		js.mocha.M.it("'nemo' should be an Animal.",function() {
			js.expect.E.expect(nemo).to.be.a(Animal);
		});
		js.mocha.M.it("species should be a Fish.",function() {
			js.expect.E.expect(nemo.species).to.equal("Fish");
		});
		js.mocha.M.it("gender should be male.",function() {
			js.expect.E.expect(nemo.gender).to.equal("male");
		});
	}
	,step62: function() {
		js.mocha.M.it("'civic' should be a Vehicle.",function() {
			js.expect.E.expect(civic).to.be.a(Vehicle);
		});
		js.mocha.M.it("make should be a Honda.",function() {
			js.expect.E.expect(civic.make).to.equal("Honda");
		});
		js.mocha.M.it("model should be Civic.",function() {
			js.expect.E.expect(civic.model).to.equal("Civic");
		});
	}
	,step63: function() {
		js.mocha.M.it("'forte' should be a Vehicle.",function() {
			js.expect.E.expect(forte).to.be.a(Vehicle);
		});
		js.mocha.M.it("make should be a KIA.",function() {
			js.expect.E.expect(forte.make).to.equal("KIA");
		});
		js.mocha.M.it("model should be Forte.",function() {
			js.expect.E.expect(forte.model).to.equal("Forte");
		});
	}
	,step64: function() {
		js.mocha.M.it("'square' should be a Shape.",function() {
			js.expect.E.expect(square).to.be.a(Shape);
		});
		js.mocha.M.it("sides should be a 4.",function() {
			js.expect.E.expect(square.sides).to.equal(4);
		});
	}
	,step65: function() {
		js.mocha.M.it("'hexagon' should be a Shape.",function() {
			js.expect.E.expect(hexagon).to.be.a(Shape);
		});
		js.mocha.M.it("sides should be a 4.",function() {
			js.expect.E.expect(hexagon.sides).to.equal(6);
		});
	}
	,step66: function() {
		js.mocha.M.it("'catBox' should be a Box.",function() {
			js.expect.E.expect(catBox).to.be.a(Box);
		});
		js.mocha.M.it("contents should be a cat.",function() {
			js.expect.E.expect(catBox.contents).to.be.a(Animal);
			js.expect.E.expect(catBox.contents.species).to.equal("Cat");
		});
		js.mocha.M.it("should be open.",function() {
			js.expect.E.expect(catBox.isOpen).to.equal(true);
		});
	}
	,step67: function() {
		js.mocha.M.it("'christmasPresent' should be a Box.",function() {
			js.expect.E.expect(christmasPresent).to.be.a(Box);
		});
		js.mocha.M.it("content should exist.",function() {
			js.expect.E.expect(christmasPresent.contents).to.not.equal(undefined);
		});
		js.mocha.M.it("should be closed.",function() {
			js.expect.E.expect(christmasPresent.isOpen).to.equal(false);
		});
	}
	,step68: function() {
		js.mocha.M.it("'automaticDoor' should be a Door.",function() {
			js.expect.E.expect(automaticDoor).to.be.a(Door);
		});
		js.mocha.M.it("should be open.",function() {
			js.expect.E.expect(automaticDoor.isOpen).to.equal(true);
		});
	}
	,step69: function() {
		js.mocha.M.it("'bankVault' should be a Door.",function() {
			js.expect.E.expect(bankVault).to.be.a(Door);
		});
		js.mocha.M.it("should be closed.",function() {
			js.expect.E.expect(bankVault.isOpen).to.equal(false);
		});
	}
	,step70: function() {
		js.mocha.M.it("'rubySlippers' should be a Shoe.",function() {
			js.expect.E.expect(rubySlippers).to.be.a(Shoe);
		});
		js.mocha.M.it("should be size 7.",function() {
			js.expect.E.expect(rubySlippers.size).to.equal(7);
		});
		js.mocha.M.it("should be red.",function() {
			js.expect.E.expect(rubySlippers.color).to.equal("red");
		});
	}
	,step71: function() {
		js.mocha.M.it("'dressShoes' should be a Shoe.",function() {
			js.expect.E.expect(dressShoes).to.be.a(Shoe);
		});
		js.mocha.M.it("should be size 10.",function() {
			js.expect.E.expect(dressShoes.size).to.equal(10);
		});
		js.mocha.M.it("should be black.",function() {
			js.expect.E.expect(dressShoes.color).to.equal("black");
		});
	}
	,step72: function() {
		js.mocha.M.it("'singleStory' should be a House.",function() {
			js.expect.E.expect(singleStory).to.be.a(House);
		});
		js.mocha.M.it("should have one story.",function() {
			js.expect.E.expect(singleStory.stories).to.equal(1);
		});
	}
	,step73: function() {
		js.mocha.M.it("'twoStory' should be a House.",function() {
			js.expect.E.expect(twoStory).to.be.a(House);
		});
		js.mocha.M.it("should have one story.",function() {
			js.expect.E.expect(twoStory.stories).to.equal(2);
		});
	}
	,step74: function() {
		js.mocha.M.it("'incandescent' should be a Lightbulb.",function() {
			js.expect.E.expect(incandescent).to.be.a(Lightbulb);
		});
		js.mocha.M.it("should be on.",function() {
			js.expect.E.expect(incandescent.isOn).to.equal(true);
		});
	}
	,step75: function() {
		js.mocha.M.it("'halogen' should be a Lightbulb.",function() {
			js.expect.E.expect(halogen).to.be.a(Lightbulb);
		});
		js.mocha.M.it("should be off.",function() {
			js.expect.E.expect(halogen.isOn).to.equal(false);
		});
	}
	,step76: function() {
		js.mocha.M.it("'chocolateChip' should be a Cookie.",function() {
			js.expect.E.expect(chocolateChip).to.be.a(Cookie);
		});
		js.mocha.M.it("should have chocolate flavor.",function() {
			js.expect.E.expect(chocolateChip.flavor).to.equal("chocolate");
		});
	}
	,step77: function() {
		js.mocha.M.it("'gingerbread' should be a Cookie.",function() {
			js.expect.E.expect(gingerbread).to.be.a(Cookie);
		});
		js.mocha.M.it("should have chocolate flavor.",function() {
			js.expect.E.expect(gingerbread.flavor).to.equal("gingerbread");
		});
	}
	,step78: function() {
		js.mocha.M.it("'breakfast' should be a Meal.",function() {
			js.expect.E.expect(breakfast).to.be.a(Meal);
		});
		js.mocha.M.it("should have cereal and milk.",function() {
			js.expect.E.expect(breakfast.foods).to.contain("cereal");
			js.expect.E.expect(breakfast.foods).to.contain("milk");
			js.expect.E.expect(breakfast.foods.length).to.be.above(1);
		});
	}
	,step79: function() {
		js.mocha.M.it("'dinner' should be a Meal.",function() {
			js.expect.E.expect(dinner).to.be.a(Meal);
		});
		js.mocha.M.it("should have fish and vegegtables.",function() {
			js.expect.E.expect(dinner.foods).to.contain("fish");
			js.expect.E.expect(dinner.foods).to.contain("vegetables");
			js.expect.E.expect(dinner.foods.length).to.be.above(1);
		});
	}
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.expect = {};
js.expect.E = function() { };
js.expect.E.__name__ = true;
js.expect.E.expect = function(actual) {
	return js.expect.E._expect(actual);
};
js.expect.E.should = function(actual) {
	return js.expect.E._expect(actual);
};
js.expect.E.get_version = function() {
	return js.expect.E._expect.version;
};
js.expect.ExpectMixins = function() { };
js.expect.ExpectMixins.__name__ = true;
js.expect.ExpectMixins.toBe = function(e,expected) {
	return e.be(expected);
};
js.expect.ExpectMixins.match = function(e,pattern,modifiers) {
	return e.match(new RegExp(pattern,modifiers));
};
js.expect.ExpectMixins.throwExceptionMatch = function(e,pattern,modifiers) {
	return e.throwException(new RegExp(pattern,modifiers));
};
js.mocha = {};
js.mocha.Ui = { __ename__ : true, __constructs__ : ["BDD","EXPORTS","QUNIT","TDD"] };
js.mocha.Ui.BDD = ["BDD",0];
js.mocha.Ui.BDD.toString = $estr;
js.mocha.Ui.BDD.__enum__ = js.mocha.Ui;
js.mocha.Ui.EXPORTS = ["EXPORTS",1];
js.mocha.Ui.EXPORTS.toString = $estr;
js.mocha.Ui.EXPORTS.__enum__ = js.mocha.Ui;
js.mocha.Ui.QUNIT = ["QUNIT",2];
js.mocha.Ui.QUNIT.toString = $estr;
js.mocha.Ui.QUNIT.__enum__ = js.mocha.Ui;
js.mocha.Ui.TDD = ["TDD",3];
js.mocha.Ui.TDD.toString = $estr;
js.mocha.Ui.TDD.__enum__ = js.mocha.Ui;
js.mocha.Reporter = { __ename__ : true, __constructs__ : ["DOC","DOT","HTML","HTMLCOV","JSON","JSONCOV","JSONSTREAM","LANDING","LIST","MIN","NYAN","PROGRESS","SPEC","TAP","TEAMCITY","XUNIT"] };
js.mocha.Reporter.DOC = ["DOC",0];
js.mocha.Reporter.DOC.toString = $estr;
js.mocha.Reporter.DOC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.DOT = ["DOT",1];
js.mocha.Reporter.DOT.toString = $estr;
js.mocha.Reporter.DOT.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTML = ["HTML",2];
js.mocha.Reporter.HTML.toString = $estr;
js.mocha.Reporter.HTML.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTMLCOV = ["HTMLCOV",3];
js.mocha.Reporter.HTMLCOV.toString = $estr;
js.mocha.Reporter.HTMLCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSON = ["JSON",4];
js.mocha.Reporter.JSON.toString = $estr;
js.mocha.Reporter.JSON.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONCOV = ["JSONCOV",5];
js.mocha.Reporter.JSONCOV.toString = $estr;
js.mocha.Reporter.JSONCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONSTREAM = ["JSONSTREAM",6];
js.mocha.Reporter.JSONSTREAM.toString = $estr;
js.mocha.Reporter.JSONSTREAM.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LANDING = ["LANDING",7];
js.mocha.Reporter.LANDING.toString = $estr;
js.mocha.Reporter.LANDING.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LIST = ["LIST",8];
js.mocha.Reporter.LIST.toString = $estr;
js.mocha.Reporter.LIST.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.MIN = ["MIN",9];
js.mocha.Reporter.MIN.toString = $estr;
js.mocha.Reporter.MIN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.NYAN = ["NYAN",10];
js.mocha.Reporter.NYAN.toString = $estr;
js.mocha.Reporter.NYAN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.PROGRESS = ["PROGRESS",11];
js.mocha.Reporter.PROGRESS.toString = $estr;
js.mocha.Reporter.PROGRESS.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.SPEC = ["SPEC",12];
js.mocha.Reporter.SPEC.toString = $estr;
js.mocha.Reporter.SPEC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TAP = ["TAP",13];
js.mocha.Reporter.TAP.toString = $estr;
js.mocha.Reporter.TAP.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TEAMCITY = ["TEAMCITY",14];
js.mocha.Reporter.TEAMCITY.toString = $estr;
js.mocha.Reporter.TEAMCITY.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.XUNIT = ["XUNIT",15];
js.mocha.Reporter.XUNIT.toString = $estr;
js.mocha.Reporter.XUNIT.__enum__ = js.mocha.Reporter;
js.mocha.Mocha = function() { };
js.mocha.Mocha.__name__ = true;
js.mocha.Mocha.setup = function(opts) {
	Reflect.setField(opts,"ui",Std.string(opts.ui).toLowerCase());
	if(Object.prototype.hasOwnProperty.call(opts,"reporter")) Reflect.setField(opts,"reporter",Std.string(opts.reporter).toLowerCase());
	js.mocha.Mocha._mocha.setup(opts);
};
js.mocha.Mocha.run = function() {
	js.mocha.Mocha._mocha.run();
};
js.mocha.Mocha.timeout = function(milliseconds) {
	return js.mocha.Mocha._mocha.timeout(milliseconds);
};
js.mocha.Mocha.reporter = function(reporter) {
	return js.mocha.Mocha._mocha.reporter(reporter);
};
js.mocha.Mocha.bail = function() {
	js.mocha.Mocha._mocha.bail();
};
js.mocha.M = function() { };
js.mocha.M.__name__ = true;
js.mocha.M.describe = function(description,spec) {
	describe(description, spec);
};
js.mocha.M.describeOnly = function(description,spec) {
	describe.only(description, spec);
};
js.mocha.M.describeSkip = function(description,spec) {
	describe.skip(description, spec);
};
js.mocha.M.it = function(description,func) {
	it(description, func);
};
js.mocha.M.itOnly = function(description,func) {
	it.only(description, func);
};
js.mocha.M.itSkip = function(description,func) {
	it.skip(description, func);
};
js.mocha.M.before = function(func) {
	before(func);
};
js.mocha.M.after = function(func) {
	after(func);
};
js.mocha.M.beforeEach = function(func) {
	beforeEach(func);
};
js.mocha.M.afterEach = function(func) {
	afterEach(func);
};
js.mocha.M.suite = function(description,suite) {
	suite(description, suite);
};
js.mocha.M.setup = function(func) {
	setup(func);
};
js.mocha.M.test = function(description,test) {
	test(description, test);
};
js.mocha.M.teardown = function(func) {
	teardown(func);
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
if(typeof expect !== 'undefined') js.expect.E._expect = expect; else if(typeof require !== 'undefined') js.expect.E._expect = require('expect.js'); else throw "make sure to include expect.js";
js.mocha.Mocha._mocha = mocha;
HundredSpecs.main();
})();
