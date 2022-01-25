import { displayStub } from "../__tests__/stubs/display.stub";

export const DisplaysService = jest.fn().mockReturnValue(
    {
        create: jest.fn().mockReturnValue(displayStub()),
        getAll: jest.fn().mockReturnValue(displayStub()),
        getOne: jest.fn().mockReturnValue(displayStub()),
        update: jest.fn().mockReturnValue(displayStub()),
        remove: jest.fn().mockReturnValue(displayStub())
    });