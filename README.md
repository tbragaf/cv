# Cv

## How components lib was created

1. Run `yarn nx g @nrwl/react:lib components`
2. Delete content inside libs/components/src/lib

## How header component was created inside components lib

3. Run `yarn nx g @nrwl/react:component header --project=components`

## How to publish to github pages
1. Run yarn build
2. Copy the folder outside
3. Checkout to gh-pages branch and remove everything inside
4. Move new folder's content into the root of the gh-pages
5. For some reason, github is not loading assets properly (need to find out why)
6. Add /cv/ prefix to all "/assets/" references
7. Add /cv/ prefix to assets inside index.html
8. Add /cv/ prefix to elementTargetIds inside main.*.js file