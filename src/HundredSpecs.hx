import js.Lib;

import js.expect.Expect;
import js.mocha.Mocha;

using js.expect.Expect;
using js.mocha.Mocha;

class HundredSpecs
{
  public function new()
  {
    M.describe("Step 1", step1);
    M.describe("Step 2", step2);
    M.describe("Step 3", step3);
    M.describe("Step 20", step20);
    M.describe("Step 50", step50);
    M.describe("Step 51", step51);
    M.describe("Step 52", step52);
    M.describe("Step 53", step53);
    M.describe("Step 54", step54);
    M.describe("Step 55", step55);
    M.describe("Step 56", step56);
    M.describe("Step 57", step57);
    M.describe("Step 58", step58);
    M.describe("Step 59", step59);
    M.describe("Step 60", step60);
    M.describe("Step 61", step61);
    M.describe("Step 62", step62);
    M.describe("Step 63", step63);
    M.describe("Step 64", step64);
    M.describe("Step 65", step65);
    M.describe("Step 66", step66);
    M.describe("Step 67", step67);
    M.describe("Step 68", step68);
    M.describe("Step 69", step69);
    M.describe("Step 70", step70);
    M.describe("Step 71", step71);
    M.describe("Step 72", step72);
    M.describe("Step 73", step73);
    M.describe("Step 74", step74);
    M.describe("Step 75", step75);
    M.describe("Step 76", step76);
    M.describe("Step 77", step77);
    M.describe("Step 78", step78);
    M.describe("Step 79", step79);
  }

  private inline function step1():Void
  {
    M.it("should declare a variable named 'unicorn' with no value set.", function() {
      if(untyped(unicorn) == null){
        E.expect(true).to.be.ok();
      }else{
        E.expect().fail("unicorn is not set");
      }
      // E.expect(untyped(unicorn)).to.eql(null); // doesn't work
    });
  }

  private inline function step2():Void
  {
    M.it("should declare a variable named 'vgsystem' with a value of 'atari'.", function() {
      E.expect(untyped(vgsystem)).toBe("atari");
    });
  }

  private inline function step3():Void
  {
    M.it("should declare a variable named 'sahara_animal' with a value of 'The Addax'.", function() {
      E.expect(untyped(sahara_animal)).toBe("The Addax");
    });
  }

  private inline function step20():Void
  {
    M.it("should define a function named 'sahara_river'.", function() {
      E.expect(untyped(sahara_river)).to.be.a("function");
    });
    M.it("'sahara_river' should return the string 'Nile River'.", function() {
      E.expect(untyped(sahara_river)()).toBe("Nile River");
    });
  }

  private inline function step50():Void
  {
    M.it("should define a class named 'Animal'.", function() {
      E.expect(untyped(Animal)).to.be.a("function");
    });
    M.it("should have a species property.", function() {
      E.expect(untyped __js__("new Animal('Frog', 'male')")).to.have.property("species");
    });
    M.it("should have a gender property.", function() {
      E.expect(untyped __js__("new Animal('Frog', 'male')")).to.have.property("gender");
    });
  }

  private inline function step51():Void
  {
    M.it("should define a class named 'Vehicle'.", function() {
      E.expect(untyped(Vehicle)).to.be.a("function");
    });
    M.it("should have a make property.", function() {
      E.expect(untyped __js__("new Vehicle('Mazda', 'RX-4')")).to.have.property("make");
    });
    M.it("should have a model property.", function() {
      E.expect(untyped __js__("new Vehicle('Mazda', 'RX-4')")).to.have.property("model");
    });
  }

  private inline function step52():Void
  {
    M.it("should define a class named 'Shape'.", function() {
      E.expect(untyped(Shape)).to.be.a("function");
    });
    M.it("should have a sides property.", function() {
      E.expect(untyped __js__("new Shape(5)")).to.have.property("sides");
    });
  }

  private inline function step53():Void
  {
    M.it("should define a class named 'Box'.", function() {
      E.expect(untyped(Box)).to.be.a("function");
    });
    M.it("should have a contents property.", function() {
      E.expect(untyped __js__("new Box({}, false)")).to.have.property("contents");
    });
    M.it("should have a isOpen property.", function() {
      E.expect(untyped __js__("new Box({}, true)")).to.have.property("isOpen");
    });
  }

  private inline function step54():Void
  {
    M.it("should define a class named 'Door'.", function() {
      E.expect(untyped(Door)).to.be.a("function");
    });
    M.it("should have a isOpen property.", function() {
      E.expect(untyped __js__("new Door(false)")).to.have.property("isOpen");
    });
  }

  private inline function step55():Void
  {
    M.it("should define a class named 'Shoe'.", function() {
      E.expect(untyped(Shoe)).to.be.a("function");
    });
    M.it("should have a size property.", function() {
      E.expect(untyped __js__("new Shoe(6, 'red')")).to.have.property("size");
    });
    M.it("should have a color property.", function() {
      E.expect(untyped __js__("new Shoe(6, 'red')")).to.have.property("color");
    });
  }

  private inline function step56():Void
  {
    M.it("should define a class named 'House'.", function() {
      E.expect(untyped(House)).to.be.a("function");
    });
    M.it("should have a stories property.", function() {
      E.expect(untyped __js__("new House(6)")).to.have.property("stories");
    });
  }

  private inline function step57():Void
  {
    M.it("should define a class named 'Lightbulb'.", function() {
      E.expect(untyped(Lightbulb)).to.be.a("function");
    });
    M.it("should have a isOn property.", function() {
      E.expect(untyped __js__("new Lightbulb(false)")).to.have.property("isOn");
    });
  }

  private inline function step58():Void
  {
    M.it("should define a class named 'Cookie'.", function() {
      E.expect(untyped(Cookie)).to.be.a("function");
    });
    M.it("should have a flavor property.", function() {
      E.expect(untyped __js__("new Cookie('vanilla')")).to.have.property("flavor");
    });
  }

  private inline function step59():Void
  {
    M.it("should define a class named 'Meal'.", function() {
      E.expect(untyped(Meal)).to.be.a("function");
    });
    M.it("should have a foods property.", function() {
      E.expect(untyped __js__("new Meal(['sandwich', 'chips', 'cola'])")).to.have.property("foods");
    });
  }

  private inline function step60():Void
  {
    M.it("'george' should be an Animal.", function() {
      E.expect(untyped(george)).to.be.a(untyped(Animal));
    });
    M.it("species should be a Monkey.", function() {
      E.expect(untyped(george.species)).to.equal("Monkey");
    });
    M.it("gender should be male.", function() {
      E.expect(untyped(george.gender)).to.equal("male");
    });
  }

  private inline function step61():Void
  {
    M.it("'nemo' should be an Animal.", function() {
      E.expect(untyped(nemo)).to.be.a(untyped(Animal));
    });
    M.it("species should be a Fish.", function() {
      E.expect(untyped(nemo.species)).to.equal("Fish");
    });
    M.it("gender should be male.", function() {
      E.expect(untyped(nemo.gender)).to.equal("male");
    });
  }

  private inline function step62():Void
  {
    M.it("'civic' should be a Vehicle.", function() {
      E.expect(untyped(civic)).to.be.a(untyped(Vehicle));
    });
    M.it("make should be a Honda.", function() {
      E.expect(untyped(civic.make)).to.equal("Honda");
    });
    M.it("model should be Civic.", function() {
      E.expect(untyped(civic.model)).to.equal("Civic");
    });
  }

  private inline function step63():Void
  {
    M.it("'forte' should be a Vehicle.", function() {
      E.expect(untyped(forte)).to.be.a(untyped(Vehicle));
    });
    M.it("make should be a KIA.", function() {
      E.expect(untyped(forte.make)).to.equal("KIA");
    });
    M.it("model should be Forte.", function() {
      E.expect(untyped(forte.model)).to.equal("Forte");
    });
  }

  private inline function step64():Void
  {
    M.it("'square' should be a Shape.", function() {
      E.expect(untyped(square)).to.be.a(untyped(Shape));
    });
    M.it("sides should be a 4.", function() {
      E.expect(untyped(square.sides)).to.equal(4);
    });
  }

  private inline function step65():Void
  {
    M.it("'hexagon' should be a Shape.", function() {
      E.expect(untyped(hexagon)).to.be.a(untyped(Shape));
    });
    M.it("sides should be a 4.", function() {
      E.expect(untyped(hexagon.sides)).to.equal(6);
    });
  }

  private inline function step66():Void
  {
    M.it("'catBox' should be a Box.", function() {
      E.expect(untyped(catBox)).to.be.a(untyped(Box));
    });
    M.it("contents should be a cat.", function() {
      E.expect(untyped(catBox.contents)).to.be.a(untyped(Animal));
      E.expect(untyped(catBox.contents.species)).to.equal("Cat");
    });
    M.it("should be open.", function() {
      E.expect(untyped(catBox.isOpen)).to.equal(true);
    });
  }

  private inline function step67():Void
  {
    M.it("'christmasPresent' should be a Box.", function() {
      E.expect(untyped(christmasPresent)).to.be.a(untyped(Box));
    });
    M.it("content should exist.", function() {
      E.expect(untyped(christmasPresent.contents)).to.not.equal(untyped __js__("undefined"));
    });
    M.it("should be closed.", function() {
      E.expect(untyped(christmasPresent.isOpen)).to.equal(false);
    });
  }

  private inline function step68():Void
  {
    M.it("'automaticDoor' should be a Door.", function() {
      E.expect(untyped(automaticDoor)).to.be.a(untyped(Door));
    });
    M.it("should be open.", function() {
      E.expect(untyped(automaticDoor.isOpen)).to.equal(true);
    });
  }

  private inline function step69():Void
  {
    M.it("'bankVault' should be a Door.", function() {
      E.expect(untyped(bankVault)).to.be.a(untyped(Door));
    });
    M.it("should be closed.", function() {
      E.expect(untyped(bankVault.isOpen)).to.equal(false);
    });
  }

  private inline function step70():Void
  {
    M.it("'rubySlippers' should be a Shoe.", function() {
      E.expect(untyped(rubySlippers)).to.be.a(untyped(Shoe));
    });
    M.it("should be size 7.", function() {
      E.expect(untyped(rubySlippers.size)).to.equal(7);
    });
    M.it("should be red.", function() {
      E.expect(untyped(rubySlippers.color)).to.equal("red");
    });
  }

  private inline function step71():Void
  {
    M.it("'dressShoes' should be a Shoe.", function() {
      E.expect(untyped(dressShoes)).to.be.a(untyped(Shoe));
    });
    M.it("should be size 10.", function() {
      E.expect(untyped(dressShoes.size)).to.equal(10);
    });
    M.it("should be black.", function() {
      E.expect(untyped(dressShoes.color)).to.equal("black");
    });
  }

  private inline function step72():Void
  {
    M.it("'singleStory' should be a House.", function() {
      E.expect(untyped(singleStory)).to.be.a(untyped(House));
    });
    M.it("should have one story.", function() {
      E.expect(untyped(singleStory.stories)).to.equal(1);
    });
  }

  private inline function step73():Void
  {
    M.it("'twoStory' should be a House.", function() {
      E.expect(untyped(twoStory)).to.be.a(untyped(House));
    });
    M.it("should have one story.", function() {
      E.expect(untyped(twoStory.stories)).to.equal(2);
    });
  }

  private inline function step74():Void
  {
    M.it("'incandescent' should be a Lightbulb.", function() {
      E.expect(untyped(incandescent)).to.be.a(untyped(Lightbulb));
    });
    M.it("should be on.", function() {
      E.expect(untyped(incandescent.isOn)).to.equal(true);
    });
  }

  private inline function step75():Void
  {
    M.it("'halogen' should be a Lightbulb.", function() {
      E.expect(untyped(halogen)).to.be.a(untyped(Lightbulb));
    });
    M.it("should be off.", function() {
      E.expect(untyped(halogen.isOn)).to.equal(false);
    });
  }

  private inline function step76():Void
  {
    M.it("'chocolateChip' should be a Cookie.", function() {
      E.expect(untyped(chocolateChip)).to.be.a(untyped(Cookie));
    });
    M.it("should have chocolate flavor.", function() {
      E.expect(untyped(chocolateChip.flavor)).to.equal("chocolate");
    });
  }

  private inline function step77():Void
  {
    M.it("'gingerbread' should be a Cookie.", function() {
      E.expect(untyped(gingerbread)).to.be.a(untyped(Cookie));
    });
    M.it("should have chocolate flavor.", function() {
      E.expect(untyped(gingerbread.flavor)).to.equal("gingerbread");
    });
  }

  private inline function step78():Void
  {
    M.it("'breakfast' should be a Meal.", function() {
      E.expect(untyped(breakfast)).to.be.a(untyped(Meal));
    });
    M.it("should have cereal and milk.", function() {
      E.expect(untyped(breakfast.foods)).to.contain("cereal");
      E.expect(untyped(breakfast.foods)).to.contain("milk");
      E.expect(untyped(breakfast.foods.length)).to.be.above(1);
    });
  }

  private inline function step79():Void
  {
    M.it("'dinner' should be a Meal.", function() {
      E.expect(untyped(dinner)).to.be.a(untyped(Meal));
    });
    M.it("should have fish and vegegtables.", function() {
      E.expect(untyped(dinner.foods)).to.contain("fish");
      E.expect(untyped(dinner.foods)).to.contain("vegetables");
      E.expect(untyped(dinner.foods.length)).to.be.above(1);
    });
  }

  static public function main()
  {
    Mocha.setup( { ui: Ui.BDD } );
    new HundredSpecs();
    Mocha.run();
  }
}
