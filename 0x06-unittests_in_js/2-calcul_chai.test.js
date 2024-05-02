const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 5.3, 3.2)).to.equal(8);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.1, 1.8)).to.equal(4);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -4.7, -2.3)).to.equal(-7);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -3.5, -1.2)).to.equal(-5);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -2.4, 3.7)).to.equal(1);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 7.6, -2.5)).to.equal(5.1);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 8.5, 3.5)).to.equal(5);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 6.7, 1.8)).to.equal(4.9);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -5.5, -3.5)).to.equal(-2);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.4, 2.2)).to.equal(-5.6);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 10.5, -3.2)).to.equal(13.7);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -4.0, -2.0)).to.equal(2);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 2.0)).to.equal(1.5);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
