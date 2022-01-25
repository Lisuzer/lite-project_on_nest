import { displayStub } from "../__tests__/stubs/display.stub";

export const DisplaysService = jest.fn().mockReturnValue(
    {
        create: jest.fn().mockReturnValue(displayStub())
    });