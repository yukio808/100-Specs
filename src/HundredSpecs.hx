import js.Lib;

import js.expect.Expect;
import js.mocha.Mocha;

using js.expect.Expect;
using js.mocha.Mocha;

class HundredSpecs
{
  public function new()
  {
    M.describe("A Spec", function()
    {
      M.it("tests synchronous code", function() {
        true.should().be.ok();
      });
    });
  }

  static public function main()
  {
    Mocha.setup( { ui: Ui.BDD } );
    new HundredSpecs();
    Mocha.run();
  }
}