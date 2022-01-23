#!/usr/bin/env sh
# 设置字体颜色函数
function blue(){
    echo -e "\033[34m\033[01m $1 \033[0m"
}

# 确保脚本抛出遇到的错误
set -e

# 备份项目到仓库中
git add .
git commit -m "`date` "
git config --global user.name "Linena"
git config --global user.email "2776217800@qq.com"
git remote add origin git@github.com:Linena/linena.github.io.git
git push origin master

blue "========================================="
blue "==============  备份成功！  ==============="
blue "========================================="

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名地
# echo 'doc.orangbus.cn' > CNAME

git init
git add -A
git commit -m "`date` "

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:orangbus/orangbus.github.io.git master

#git push -f https://github.com/Linena/linena.github.io.git master

git config --global user.name "Linena"
git config --global user.email "2776217800@qq.com"
git remote add origin git@github.com:Linena/linena.github.io.git
git push -f origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

blue "========================================="
blue "==============  发布成功！  ==============="
blue "========= http://doc.orangbus.cn ========"
blue "============= By Orangbus ==============="
