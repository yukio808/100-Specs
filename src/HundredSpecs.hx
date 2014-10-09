import js.Lib;

import js.expect.Expect;
import js.mocha.Mocha;

using js.expect.Expect;
using js.mocha.Mocha;

class HundredSpecs
{
  public function new()
  {
    M.describe("Step 1", function()
    {
      M.it("should define a variable named unicorn with no value set.", function() {
        if(untyped(unicorn) == null){
          E.expect(true).to.be.ok();
        }else{
          E.expect().fail("unicorn is not set");
        }
        // E.expect(untyped(unicorn)).to.eql(null); // doesn't work
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