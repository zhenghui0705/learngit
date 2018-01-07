## git 常用的命令
1. git init 初始化一个本地仓库
1. git add 把文件添加到仓库(把所有修改放到暂存区Stage)
1. git commit -m 提交文件，并注释说明（把暂存区Stage的所有内容提交到分支）
1. git status 查看仓库状态
1. git diff 显示改动内容
1. git diff --cached 暂存区Stage和分支master的比较
1. git log 查看提交日志
1. git reset --hard 版本号  回退版本。
1. git log --pretty=oneline 查看版本号，减少不必要的信息--pretty=oneline参数
1. git reflog 查看记录命令
1. git reset HEAD file 撤销暂存区
1. git checkout -- readme.txt 丢弃工作区
1. git remote add origin git@github.com:zhenghui0705/learngit.git 远程仓库与本地仓库关联。
1. git push 当前分支master推送到远程
1. git checkout -b dev 创建切换分支
1. git checkout dev 创建分支dev
1. git branch -d dev 删除分支dev
1. git branch 查看分区。前面带*的为当前分区
1. git merge dev 合并指定分支到当前分支

> 2018-1-7 13:09:01
Creating a new branch is quick and simple.
