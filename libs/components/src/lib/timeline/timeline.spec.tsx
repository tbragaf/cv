import { render } from "@testing-library/react";

import { Timeline } from "./timeline";

describe("Timeline", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Timeline>{null}</Timeline>);
        expect(baseElement).toBeTruthy();
    });
});
