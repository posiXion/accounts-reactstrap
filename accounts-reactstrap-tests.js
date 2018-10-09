// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-reactstrap.js.
import { name as packageName } from "meteor/arichter:accounts-reactstrap";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-reactstrap - example', function (test) {
  test.equal(packageName, "accounts-reactstrap");
});
