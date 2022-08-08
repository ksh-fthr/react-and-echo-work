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
% exec $SHELL
```

### 4. go のインストール

```zsh
% goenv install 1.19.0  # 本 PJ で使用するバージョンを指定してインストール
% goenv global 1.19.0   # global に対しても使用するバージョンを指定する
% goenv rehash          # 指定したバージョンを適用させる
% go version            # バージョン確認, 目的のバージョンがインストール & 適用されていることがわかる
go version go1.19 darwin/amd64
```

## 5. プラグインのインストール

```zsh
% cd ${REPOSITORY_ROOT}/restapi/api
% go install github.com/motemen/gore/cmd/gore
% go install github.com/motemen/gore/cmd/gore@latest
% go install github.com/x-motemen/gore/cmd/gore@latest
% go install github.com/mdempsky/gocode@latest
% go install github.com/k0kubun/pp@latest
% go install golang.org/x/tools/cmd/goimports
% go install golang.org/x/tools/cmd/goimports@latest
% go install golang.org/x/lint/golint@latest
% go install golang.org/x/tools/cmd/godoc
% go install golang.org/x/tools/cmd/godoc@latest
% go install golang.org/x/tools/cmd/gorename@latest
% go install golang.org/x/tools/cmd/guru@latest
% go install golang.org/x/tools/cmd/gopls
% go install golang.org/x/tools/cmd/gopls@latest
% go install github.com/mdempsky/gocode@latest
% go install github.com/rogpeppe/godef@latest
```

## 6. air のインストール

```zsh
% cd ${REPOSITORY_ROOT}/restapi/api
% go get -u github.com/cosmtrek/air
```

