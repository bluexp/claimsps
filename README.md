# claimsps
自动登陆splinterlands收取SPS并质押

REQUIREMENT: You need to install NodeJS from https://nodejs.org/en/download/ (at least the last stable version 14.18.0)

Once NodeJS is installed and you downloaded the bot in a specific folder, you need to set your configuration in the .env file:

you need to create the .env file and include the username and posting key (file with no name, only starting dot to create a hidden file) in the bot folder,

Example:

ACCOUNT=youraccountname
PASSWORD=yourpostingkey


IMPORTANT: the bot needs the username and posting key in order to login. Don't use the email and password. If you don't have the posting key, you need to 'Request Keys' from the top right menu in Splinterlands. You will receive a link to follow where you will get your Hive private keys. Store them safely and don't share them with anyone!

Once the file is created, open cmd (for windows) or terminal (for Mac and Linux) and run:

npm install

and then

npm start
