import { render } from "@testing-library/react";

import { Section } from "./section";

describe("Section", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Section id="section" title="Title" />);
        expect(baseElement).toBeTruthy();
    });
});
