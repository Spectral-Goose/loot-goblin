## Challenges Overcome ##

### Web App Development ###
I enjoy backend programming, and I had never really done any full stack development, so this project was out of my comfort zone with some lofty goals.
- The first step I took in web app development was to complete the [simple-todos tutorial](https://react-tutorial.meteor.com/) that Meteor provides.
This tutorial took me a few attempts before I was able to complete it. When working on a project in Meteor, if you make a mistake that does not result 
in an outright error, the app just crashes with no feedback on why. I know now that sifting through logs is the way to find the error, but at the 
time, I had not figured that out. Completing the tutorial was very easy since I could just type the code they provided and read the explanations given.
But I would get in the zone, and eventually, I would stop checking the live version of the app with every change. This would result in the app crashing
after hours of changes with "no way" for me to find the reason why without meticulously checking every block of code provided in the tutorial. I sank
countless hours into attempting to complete this tutorial before finding the ability to check logs.
- For example, during defense, I accidentally committed and pushed an extra character at the end of one of my ui files. Because of this, the entire
app was crashing, and I could not figure out why for a few hours.

### Technical Difficulties ###
With technology, there will always be technical difficulties. This project has spanned multiple virutal machines as well as Github repositories.
- During construction, the virtual machine I had been using bricked, and due to bad Github habits, I lost a good portion of my project at that point.
- During defense, I had another virtual machine stop working. I spent a few hours in a rescue shell attempting to save my files while my roommate
worked to find a way to restore the virtual machine. Eventually, he found a way to save it, and while I lost the day to work on the project, I did not
lose my uncommitted changes. Additionally, my original Github repository corrupted. Thankfully, I had just pushed changes to Github, so I could easily
scrap the old repo and clone into a new one.

### Deployment ###
Deploying a web app for free takes a bit of know how.
- My first foray into attempting to deploy this application used Heroku. With Heroku, I could deploy the app, but it always crashed. Looking around
online, I found that I would need to add a mongo cluster to prevent the app from crashing. From what I could tell, there used to be a very nice and
easy way to do this with Meteor using MongoLab, but MongoLab was absorbed by MongoDB Atlas a few years ago, so that option was gone. I tried to use
MongoDB Atlas with Heroku, but I could not find where to link my cluster. I tried to move on and find another way to deploy.
- I then remembered that Meteor has its own deployment method that they really attempt to guide developers towards using. The deployment was much simpler
than Heroku, but the app was still crashing. Thankfully, Meteor's deployment option, which uses servers through Galaxy, has logs you can watch online in
real time as the app boots up. But I did not realize this at first. I spent a day "deploying" the app, but in reality, it was attempting to deploy, failing,
and trying again over and over. I waiting about six hours just thinking that it was taking "a while," but then I found the logs and realized there was another
problem. I was still missing a mongo cluster. So I logged back into MongoDB Atlas, created a free account and a free cluster, and attempting to find the
way to attach it to Loot Goblin. After a few hours of searching around and trying various things, I was finally able to get the app to deploy in working order.
