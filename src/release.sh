npm install

npm run docs:build

mkdir src

mv -n * src/

cp -r .vitepress/dist/* .
rm -rf .vitepress/dist

mv -n .vitepress src/.vitepress