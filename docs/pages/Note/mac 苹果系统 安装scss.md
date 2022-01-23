---

sidebar: auto
title: CSS
desc: mac 苹果系统 安装scss/sass 
keyword: mac 苹果系统 安装scss/sass 
date: 2012-01-13 14:56:23

---

# mac 苹果系统 安装scss/sass 

<font color=red>打开终端，命令在终端中执行</font>

## 1. 安装brew（输入密码后耐心等待）


```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

brew官网：<https://brew.sh/>


## 2. 安装rbenv

<font color=red>会多次输入密码，一直输入就对了，耐心等待</font>


```
brew install rbenv
```


## 3.安装Ruby版本：

### （1）列出所有本地版本

```
rbenv install -l
```

### （2）安装Ruby版本

```
rbenv install -L
```

### （3）完成安装并开始使用命令

```
rbenv install 2.0.0-p247
```


## 4.安装Ruby gem

### （1）注意：不需要sudo来安装gems。通常，Ruby版本将由您的用户安装并可写。安装gem不需要额外的特权。

```
gem install bundler
```

### （2）检查安装位置

```
gem env home
```

## 5.验证Ruby是否安装成功

```
ruby -v
```

## 6.安装sass 

<font color=red>此处需要 sudo 来安装，不然报错：没有权限访问目标文</font>

```
 sudo gem install sass
```

`如果遇到问题为：
ERROR: While executing gem ... (Errno::EPERM)
Operation not permitted - /usr/bin/sass`

**解决办法：**

```
sudo gem install -n /usr/local/bin sass
```

## 7.检测是否成功安装sass

```
sass -v
```


## 8.配置webstrom


### （1）找到scss路径（回车后复制路径）

```
which scss
```

### （1）找到scss路径（回车后复制路径）

```
which scss
```

### （2）到webstrom 中找到 file watcher 项目

![RUNOOB 图标](https://s4.ax1x.com/2022/01/13/7lm6mR.png)

### （3）把scss 路径粘贴进去

![RUNOOB 图标](https://s4.ax1x.com/2022/01/13/7lmRk6.png)


## 教程：

<https://newsn.net/say/webstorm-sass-scss-less.html>

