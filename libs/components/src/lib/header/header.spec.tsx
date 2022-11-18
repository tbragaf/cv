import { render } from "@testing-library/react";

import { Header } from "./header";

describe("Header", () => {
    it("should render successfull", () => {
        const { baseElement } = render(<Header name="Header" navigationItems={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
