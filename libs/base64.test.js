import {decode, decodeFromUrlSafe, encode, encodeUrlSafe} from "./base64";
import {jest} from '@jest/globals';

const mockBtoa = jest.fn();
const mockAtob = jest.fn();

global.Window = {
    btoa: mockBtoa,
    atob: mockAtob
};

beforeEach(() => {
    mockBtoa.mockClear();
    mockBtoa.mockReturnValue('SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ==');
    mockAtob.mockClear();
    //TODO - https://youtrack.jetbrains.com/issue/IJPL-208638
    const string = "Hello World with Padding!";
    const asciiKeys = [];
    for (var i = 0; i < string.length; i ++)
        asciiKeys.push(string[i].charCodeAt(0));
    mockAtob.mockReturnValue(asciiKeys);
});

test('base64.encode', () => {
    //act
    const result = encode("Hello World with Padding!");
    //assert
    expect(mockBtoa).toHaveBeenCalledWith("Hello World with Padding!");
    expect(result).toBe('SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ==');
});

test('base64.decode', () => {
    //act
    const result = decode("SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ==");
    //assert
    expect(mockAtob).toHaveBeenCalledWith("SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ==");
    expect(result).toBe('Hello World with Padding!');
});

test('base64.encodeUrlSafe', () => {
    //act
    const result = encodeUrlSafe("Hello World with Padding!");
    //assert
    expect(mockBtoa).toHaveBeenCalledWith("Hello World with Padding!");
    expect(result).toBe("SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ");
});

test('base64.decodeFromUrlSafe', () => {
    //act
    const result = decodeFromUrlSafe("SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ");
    //assert
    expect(mockAtob).toHaveBeenCalledWith("SGVsbG8gV29ybGQgd2l0aCBQYWRkaW5nIQ==");
    expect(result).toBe("Hello World with Padding!");
});