const expect = require('chai').expect;
const compose = require('../index');
const curry = require('es6-curry');

describe("compose", () => {
  let add, multiply;
  before(() => {
    add = curry((a, b) => a + b);
    multiply = curry((a, b) => a * b);
  });

  it("should be available", () => {
    expect(compose).to.be.defined;
  });

  describe("when functions are passed to compose", () => {
    it("should return callable function", () => {
      expect(compose(add, multiply)).to.be.a.instanceOf(Function);
    });

    it("should pass result of last function to second last function", () => {
      expect(compose(add(3), multiply(4))(5)).to.equal(23);
    });
  });
});
