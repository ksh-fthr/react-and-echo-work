# go 言語-環境構築作業メモ
## GO インストール
**goenv** を使使用する。
下記のインストール手順に沿ってインストールしていく。

- [syndbg/goenv](https://github.com/syndbg/goenv/blob/master/INSTALL.md)


## 実際の手順
### 1. goenv のインストール

```zsh
% git clone https://github.com/syndbg/goenv.git ~/.goenv
```

### 2. .zshrc を編集

```zsh
export GOENV_ROOT="$HOME/.goenv"
export PATH="$GOENV_ROOT/bin:$PATH"
eval "$(goenv init -)"
export PATH="$GOROOT/bin:$PATH"
export PATH="$PATH:$GOPATH/bin"
```

### 3. シェルの再起動

```zsh
% exec $SHELL -l
```

### 4. go のインストール

```zsh
% goenv install 1.22.1  # 本 PJ で使用するバージョンを指定してインストール
% goenv global 1.22.1   # global に対しても使用するバージョンを指定する
% goenv rehash          # 指定したバージョンを適用させる
% go version            # バージョン確認, 目的のバージョンがインストール & 適用されていることがわかる
go version go1.22.1 darwin/amd64
```

## 5. プラグインのインストール

```zsh
% cd ${REPOSITORY_ROOT}/restapi/api
% go get -u . # go.mod をベースにプラグインがインストールされる
```

## 6. air のインストール

```zsh
% cd ${REPOSITORY_ROOT}/restapi/api
% go install github.com/cosmtrek/air@latest
```

## 7. shell の再起動(2回目)

( これをやらないと `air` が PATH に読み込まれない )

```zsh
% exec $SHELL -l
```

