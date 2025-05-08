npm install

npm run docs:build

rm -rf src
mkdir src

mv -n * src/

cp -r .vitepress/dist/* .
rm -rf .vitepress/dist

mv -n .vitepress src/.vitepress