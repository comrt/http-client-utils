import {listFiles, readAsString} from "./files.js";
import {jest} from "@jest/globals";
import * as child_process from "node:child_process";

const mockEnvironment = jest.fn();

global.execSync = child_process.execSync;

global.request = {
    environment: {
        get : mockEnvironment
    },
};

beforeEach(() => {
    mockEnvironment.mockClear();
    const currentDir = execSync("pwd", { encoding: 'utf-8' }).replace("\n", "");
    mockEnvironment.mockReturnValue(currentDir);
});

test('files.readAsString', () => {
    //act
    const fileContent = readAsString("./test/hello.txt");
    //assert
    expect(mockEnvironment).toHaveBeenCalledWith("workdir");
    expect(fileContent).toBe("Hello");
});

test('files.listFiles', () => {
    //act
    const fileContent = listFiles("./test");
    //assert
    expect(mockEnvironment).toHaveBeenCalledWith("workdir");
    expect(fileContent).toContain("hello.txt")
});