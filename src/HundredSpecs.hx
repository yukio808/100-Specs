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

  static public function main()
  {
    Mocha.setup( { ui: Ui.BDD } );
    new HundredSpecs();
    Mocha.run();
  }
}