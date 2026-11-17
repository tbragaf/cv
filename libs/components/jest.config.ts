/* eslint-disable */
export default {
    displayName: "components",
    preset: "../../jest.preset.js",
    transform: {
        "^.+\\.[tj]sx?$": ["babel-jest", { rootMode: "upward" }]
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageDirectory: "../../coverage/libs/components"
};
