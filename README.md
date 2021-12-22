# claim-sps
# 主要功能
运行本成后会自动登陆splinterlands，自动完成收取SPS并质押的一系列操作。
>本程序只用来研究和学习，请勿用于其他用途。
>对于有可能发生的封号及虚拟货币的损失，本程序不承担任何责任。
# 运行环境
+ 可在Windows、Mac和Linux下运行。
+ 需要安装NodeJS最新版本，或版本需高于(version 14.18.0)，如果没有安装过 点击这里的官网地址下载https://nodejs.org/en/download/
# 基本设置
首先编辑生成`.env`文件(修改`.env-Example`后改名即可)
文件内容在=后面输入用户名及密码即可:
```
ACCOUNT=youraccountname
PASSWORD=yourpostingkey
```
>注意，不要使用邮箱和密码的方式，而需要使用`用户名`和`private keys`方式，`private keys`需要安全备份，不要与任何人分享。
# 系统运行
>Windows系统启动运行cmd控制台
>Mac和Linux系统运行系统控制台
并输入:
`npm install`
完成安装后，输入
`npm start`
程序即开始运行。
