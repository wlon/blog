---
title: "Linux Shell 相关设置"
date: 2025-05-02T21:53:00+08:00
description: ""
slug: "/blog/2025/git-ignore"
---

# WSL2
``` PowerShell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## Ubuntu
    
### home brew
    Home brew 现在可以在Linux上安装
``` bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

```
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```
### oh my zsh
安装zsh
```sh
sudo apt-get install zsh
```
安装 oh my zsh

``` sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

SSH Key
```sh 
sudo chmod 600 ~/.ssh/id_rsa         
sudo chmod 600 ~/.ssh/id_rsa.pub  
```

安装插件
```sh
git clone git@github.com:zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

```
```
https://github.com/wting/autojump#installation
```
```
vim ~/.zshrc
plugins=(git zsh-autosuggestions autojump zsh-syntax-highlighting)
```

### nvm
```
brew install nvm
```

### nvim
- Plug
```
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

- ripgrep
    
### tmux

