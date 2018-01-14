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
1. git stash 把当前工作现场“储藏”起来，等以后恢复现场后继续工作。
1. git stash list 查看工作现场
1. git stash pop 恢复工作现场 并删除
1. git branch -D <name> 强行删除一个没有被合并的分区
1. git remote -v 查看远程库信息
1. git push origin branch-name 从本地推送分支
1. git checkout -b branch-name origin/branch-name 在本地创建与远程分支对应的分支
1. git pull 从远程抓取分支
1. git branch --set-upstream branch-name origin/branch-name 本地分支与远程分支关联
1. git tag name 打标签
1. git tag v0.9 26d88 给commit id为26d88打上标签v0.9      
1. git tag 查看所有标签
1. git tag -d v0.9 删除v0.9这个标签

> 2018年1月14日13:47:36
Not equipped with sword, go out is the arena!
