import * as Buffer from "buffer";

export const getInputValue = (label: string): Promise<string> => new Promise<string>(resolve => {
    process.stdout.write(`${label} > `);
    const listener = (data: Buffer) => {
        resolve(data.toString());
        process.stdin.removeListener('data', listener);
    }
    process.stdin.on("data", listener);
});



