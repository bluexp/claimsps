# claim-sps
# 重要声明
> + 本程序用来研究和学习，请勿用于商业用途。
> + 对于因运行本程序而造成的封号及虚拟货币损失或其它一切损失，本程序不承担任何责任。
# 主要功能
+ 运行本程序后会自动登陆splinterlands，自动完成收取SPS并质押的一系列操作。
# 运行环境
+ 完全支持Windows、Mac和Linux系统。
+ 需要安装NodeJS最新版本，或版本高于(version 14.18.0)
+ NodeJS官网 https://nodejs.org/
# 基本设置
+ 首先需编辑生成`.env`文件。
+ 可通过修改`.env-Example`文件内容，然后改名为`.env`获得。
+ 文件内容范例:
```
ACCOUNT=youraccountname
PASSWORD=yourpostingkey
```
>注意，不要使用邮箱和密码的方式，而需要使用`用户名`和`private keys`方式，`private keys`需要安全备份，一定不要与任何人分享。
# 系统运行
>Windows系统启动运行cmd控制台
>Mac和Linux系统运行系统控制台
并输入:
`npm install`
完成安装后，输入
`npm start`
程序即开始运行。
