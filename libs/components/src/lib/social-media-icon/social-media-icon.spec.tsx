import { render } from "@testing-library/react";

import SocialMediaIcon from "./social-media-icon";

describe("SocialMediaIcon", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<SocialMediaIcon />);
        expect(baseElement).toBeTruthy();
    });
});
