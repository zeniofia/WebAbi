// tests/web3abi.test.js
/**
 * Tests for Web3Abi module
 */

const { Web3Abi } = require('../src/web3abi');

describe('Web3Abi', () => {
    let instance;

    beforeEach(() => {
        instance = new Web3Abi({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
