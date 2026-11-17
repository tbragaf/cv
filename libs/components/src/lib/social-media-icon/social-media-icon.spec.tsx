import { render } from "@testing-library/react";

import { SocialMediaIcon } from "./social-media-icon";

describe("SocialMediaIcon", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<SocialMediaIcon icon="/icon.png" href="/" />);
        expect(baseElement).toBeTruthy();
    });
});
