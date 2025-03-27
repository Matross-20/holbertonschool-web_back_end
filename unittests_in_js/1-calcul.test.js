// 1-calcul.test.js  

const assert = require('assert');  
const calculateNumber = require('./1-calcul.js');  

describe('Calculate Number', () => {  

    it('should return 6 for SUM(1.4, 4.5)', () => {  
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);  
    });  

    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {  
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);  
    });  

    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {  
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);  
    });  

    it('should return "Error" for DIVIDE(1.4, 0)', () => {  
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');  
    });  

    it('should throw an error for invalid type', () => {  
        assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);  
    });  

    // Edge cases  
    it('should return 0 for SUM(0.2, -0.5)', () => {  
        assert.strictEqual(calculateNumber('SUM', 0.2, -0.5), 0);  
    });  

    it('should return 0 for SUBTRACT(1.1, 1.1)', () => {  
        assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 1.1), 0);  
    });  

    it('should return "Error" for DIVIDE(1.1, 0)', () => {  
        assert.strictEqual(calculateNumber('DIVIDE', 1.1, 0), 'Error');  
    });  
});  
