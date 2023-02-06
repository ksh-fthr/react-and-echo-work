# このアプリについて
JavaScript のライブラリである `React` の理解を深めるためにアレコレすることを目的としたものです。 


# 環境について
以下の環境で実行・確認しております。

| 環境 | バージョン | 備考 |
| ---- | ---------- | ---- |
| [React](https://ja.reactjs.org/)   | v18.2.0 | バージョンは `npm list --depth=0` で確認 |
| [Node.js](https://nodejs.org/ja/) | v18.14.0 | バージョンは `node --version` で確認 |
| [npm](https://www.npmjs.com/)  | v9.3.1 | バージョンは `npm --version` で確認 |

<details>
<summary>React のバージョン確認</summary>

```bash
% npm list --depth=0
app@0.1.0 /Users/ksh-fthr/workspace/react-and-echo-work/webapp/app
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@14.4.3
├── react-dom@18.2.0
├── react-router-dom@6.8.0
├── react-scripts@5.0.1
├── react@18.2.0
├── use-http@1.0.27
└── web-vitals@2.1.4
```
</details>

<details>
<summary>Node.js のバージョン確認</summary>

```bash
% node --version
v18.14.0
```

</details>

<details>
<summary>npm のバージョン確認</summary>

```bash
% npm -v
9.3.1
```

</details>

# 起動
[リポジトリ直下の README](../README.md) を参照

# 補足
依存関係の問題で `npm i` でパッケージをインストールする際に `use-http` で次のエラーが出ています。

```bash
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: use-http@1.0.27
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"18.2.0" from the root project
npm ERR!   peer react@"^18.0.0" from @testing-library/react@13.4.0
npm ERR!   node_modules/@testing-library/react
npm ERR!     @testing-library/react@"13.4.0" from the root project
npm ERR!   4 more (react-dom, react-router, react-router-dom, react-scripts)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.13.1 || ^17.0.0" from use-http@1.0.27
npm ERR! node_modules/use-http
npm ERR!   use-http@"1.0.27" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react@17.0.2
npm ERR! node_modules/react
npm ERR!   peer react@"^16.13.1 || ^17.0.0" from use-http@1.0.27
npm ERR!   node_modules/use-http
npm ERR!     use-http@"1.0.27" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/ksh-fthr/.npm/eresolve-report.txt for a full report.
```

`npm i` を実行する際は `--legacy-peer-deps` オプションを付けて実行してください。

```bash
npm i --legacy-peer-deps
```

参考: https://github.com/ava/use-http/issues/369

