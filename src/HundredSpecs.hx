import js.Lib;

import js.expect.Expect;
import js.mocha.Mocha;

using js.expect.Expect;
using js.mocha.Mocha;

class HundredSpecs
{
  public function new()
  {
    M.describe("Unicorn", step1);
    M.describe("Videogame System", step2);
    M.describe("Sahara Animal", step3);
    M.describe("Planets", step4);
    M.describe("Galilean Moons", step5);
    M.describe("Golden Ratio φ", step6);
    M.describe("Step 20", step20);
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
    M.it("should declare a variable named 'videogame_system' with a value of 'Atari'.", function() {
      E.expect(untyped(videogame_system)).toBe("Atari");
    });
  }

  private inline function step3():Void
  {
    M.it("should declare a variable named 'sahara_animal' with a value of 'The Addax'.", function() {
      E.expect(untyped(sahara_animal)).toBe("The Addax");
    });
  }

  private inline function step4():Void
  {
    M.it("should declare a variable named 'planets' that is an array.", function() {
      E.expect(untyped(planets)).to.be.an(Array);
    });
    M.it("should have 8 items", function() {
      E.expect(untyped(planets).length).to.eql(8);
    });
    M.it("should contain the name of each of our solar system's planets", function() {
      E.expect( untyped(planets).toLowerCase() ).to.contain("mercury");
      E.expect( untyped(planets).toLowerCase() ).to.contain("venus");
      E.expect( untyped(planets).toLowerCase() ).to.contain("earth");
      E.expect( untyped(planets).toLowerCase() ).to.contain("mars");
      E.expect( untyped(planets).toLowerCase() ).to.contain("jupiter");
      E.expect( untyped(planets).toLowerCase() ).to.contain("saturn");
      E.expect( untyped(planets).toLowerCase() ).to.contain("uranus");
      E.expect( untyped(planets).toLowerCase() ).to.contain("neptune");
    });
    M.it("should have each planet listed in order", function() {
      E.expect( untyped(planets)[0].toLowerCase() ).to.eql("mercury");
      E.expect( untyped(planets)[1].toLowerCase() ).to.eql("venus");
      E.expect( untyped(planets)[2].toLowerCase() ).to.eql("earth");
      E.expect( untyped(planets)[3].toLowerCase() ).to.eql("mars");
      E.expect( untyped(planets)[4].toLowerCase() ).to.eql("jupiter");
      E.expect( untyped(planets)[5].toLowerCase() ).to.eql("saturn");
      E.expect( untyped(planets)[6].toLowerCase() ).to.eql("uranus");
      E.expect( untyped(planets)[7].toLowerCase() ).to.eql("neptune");
    });
  }

  private inline function step5():Void
  {
    M.it("should declare a variable named 'galilean_moons' that is an array.", function() {
      E.expect(untyped(galilean_moons)).to.be.an(Array);
    });
    M.it("should have 4 items", function() {
      E.expect(untyped(galilean_moons)).to.have.length(4);
    });
    M.it("should contain the name of each galilean moon of Jupiter", function() {
      var lowercase_moons = ["io","europa","ganymede","callisto"];
      E.expect( lowercase_moons ).to.contain(untyped(galilean_moons)[0].toLowerCase());
      E.expect( lowercase_moons ).to.contain(untyped(galilean_moons)[1].toLowerCase());
      E.expect( lowercase_moons ).to.contain(untyped(galilean_moons)[2].toLowerCase());
      E.expect( lowercase_moons ).to.contain(untyped(galilean_moons)[3].toLowerCase());
    });
  }

  private inline function step6():Void
  {
    M.it("should declare a variable named 'golden_ratio' with a value of '1.61803398874'.", function() {
      E.expect(untyped(golden_ratio)).toBe(1.61803398874);
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

  static public function main()
  {
    Mocha.setup( { ui: Ui.BDD } );
    new HundredSpecs();
    Mocha.run();
  }
}