# Rachel's Website

# Required knowledge for the stuff below
### 1. Using the terminal
1. Hold Command (⌘) and press space to open the spotlight search
2. Type in 'Terminal' and press enter
3. You should see a black box which you can type into and enter commands into by pressing 'enter'

# Things you will need to download
## 1. Git
1. Enter the command `git` into your terminal. If you don't have git, it should start installing (a lot of text should start raining down). If you do, you should just see a pretty long message and you will be able to continue entering commands

## 2. A text editor
1. You may have used one of these back in your tumblr days. If you don't have one, I personally use and reccomend [Sublime Text 3](https://www.sublimetext.com/3)

# Getting a copy of the website source code onto your computer
1. Open a terminal
2. Enter the command `cd desktop`, this will change the directory on the terminal to your desktop
3. Enter the command `git clone https://github.com/Luke-Tan/luke-tan.github.io.git`. This will download a copy of the website source code onto your desktop

# Editing the website
## 1. Setup
1. Open Sublime Text
2. Drag the folder that contains the website code into sublime text. You should then see a sidebar which contains the folder that you can access all the files from.
3. Open `index.html`. This is the file that you will be editing.

## 2. Adding to the Accolades section
## 3. Adding to the Experience section

# Publishing your changes
1. Open a terminal
2. Enter the command `cd desktop/luke-tan.github.io`. This will change the directory on the terminal to the website folder
3. Enter the command `git pull`. This ensures that the code on your computer is up to date with the code on github.
4. Enter the command `git add .`
5. Enter the command `git commit -m "<Your message here>"`, where <Your message here> is any message you want to type that details the changes you have made e.g. "Added a publication to the accolades section"
6. Enter the command `git push`. This will push all your changes to the github repository. Enter your username and password if prompted
7. Check `rachelkayin.com`. The changes should be published! If not, wait a few minutes and try again. Contact me if it hasn't updated after a while
