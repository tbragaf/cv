import nx from "@nx/eslint-plugin";

export default [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    ...nx.configs["flat/react"],
    { ignores: ["**/dist", "**/node_modules", "**/vite.config.*.timestamp*"] },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        rules: {
            "@nx/enforce-module-boundaries": ["error", { enforceBuildableLibDependency: true, allow: [], depConstraints: [{ sourceTag: "*", onlyDependOnLibsWithTags: ["*"] }] }]
        }
    }
];
