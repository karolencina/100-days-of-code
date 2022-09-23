# #100DaysOfCode Log
The log of my #100DaysOfCode challenge. Started on 29 July 2022.

### Day 1 | 29/07/22
Created a simple counter. I'm shocked to see how much JavaScript
I forgot while working in back-end. Reminded myself how to use
the `mv` command and found out what the .idea directory is
all about.

### Day 2 | 30/07/22
Problem solving: GitHub was not showing up on my contributions graph. I found out that it was because my Git email address was different.

### Day 3 | 31/07/22
Added a new functionality to Counter that differentiates
between positive and negative numbers.

### Day 4 | 01/08/22
Started exploring Bootstrap. Found out what the shortcut for comments
is in WebStorm (finally!).

### Day 5 | 02/08/22
Decided to not use Bootstrap at the moment (I'm trying to get better at HTML, CSS and JS - that's my priority). I styled the reviews card and created a random data array to use in the script of Reviews.

I decided to try and write the logic of the code on my own (without looking at the solution) and ended up breaking my browser... still not sure why.

### Day 6 | 03/08/22
I did not manage to write any code, was really busy! :(

### Day 7 | 04/08/22
I didn't get anything done yet again, I was still busy.

### Day 8 | 05/08/22
Learned more about `git rebase`. I wrote an incorrect commit message but only realised two commits later, so I could not amend the commit in the usual way (`git commit --amend`). I looked the issue up on Stack Overflow and the solution I found worked for me. I added a random review functionality to my script almost on my own. I still don't clearly understand the logic behind generating random numbers between two specific values, so I'm currently looking into it.

### Day 9 | 06/08/22
The only thing I did was fix the functionality of displaying a random review and by that I mean I deleted an empty `if` statement.

### Day 10 | 07/08/22
I'm trying to find out how to implement external icons in my project. I really don't want to keep a Fontawesome folder with thousands of icons only to use 2 of them.

### Day 11 | 08/08/22
Looked for an alternative way to add icons to my projects (I don't want to have to download a large set of icons only to use 2 of them). I looked into Material Design icons on Google Fonts which are meant to replace icon glyphs but it didn't work as expected.

### Day 12 | 09/08/22
I did not manage to get anything done.

### Day 13 | 10/08/22
I created an HTML + CSS setup for the Navbar project. This was quite simple and I learned how the logic will work (it is yet to be implemented).

### Day 14 | 11/08/22
I did _nothing_.

### Day 15 | 12/08/22
I did not get anything done as I arrived home late.

### Day 16 | 13/08/22
The individual project files' CSS was partly duplicated for each project (especially the global variables), so I created a global.css file and linked it to each project as an additional stylesheet. I created a links toggle functionality when user clicks on the hamburger menu - I paused my YT tutorial and did this almost completely on my own.

### Day 17 | 14/08/22
This day was mostly just optimisation. I shortened what was too long, deleted what
was unnecessary and slightly changed the styles for _Navbar_.

### Day 18 | 15/08/22
I didn't do any JavaScript today, but I had a portfolio idea which I started to explore: I would like my development portfolio to look like System 1 (old Mac GUI) with most of the functionality. Today I looked for the fonts, colours, demo videos, etc. to get a better idea of how to implement it later on.

### Day 19 | 16/08/22
I created a basic setup for my portfolio (custom fonts, navbar, logo) and created a few designs in Figma.

### Day 20 | 17/08/22
I didn't do anything. 

### Day 21 | 18/08/22
It was my first day of work after vacation, I didn't manage to do much.

### Day 22 | 19/08/22
BBQ at work - came home late and didn't get anything done.

### Day 23 | 20/08/22
I started and completed the *Sidebar* project today and setup *Modal*. I learned how to stage everything except specific files in Git, `invert()` in CSS and struggled with `transform-origin` and rotating svg elements around their centre. And here I thought that it would be possible to focus only on Vanilla JS.

### Day 24 | 21/08/22
I wrote a script for modal. I did it on my own, no Stack Overflow, no Google, no YT. I'm happy.

### Day 25 | 22/08/22
I started the questions project. I did barely anything today -  I just created a basic setup (HTML + CSS) for my next project *Questions*.

### Day 26 | 23/08/22
I continued with *Questions* project. I added text to questions and adjusted the CSS (to focus on JavaScript, I've been using John Smilga's CSS and changing it to fit my code). I'm getting used to the WebStorm shortcuts and noticing that my coding got much faster because of that. It's also easier for me to quickly navigate in code (e.g. see the opening and closing tags)

### Day 27 | 24/08/22
Perhaps the main event today was not writing code. By no means am I trying to discount the importance of finally having a better understanding of practical use cases of the `forEach` method, but I started updating my daily log!(!!). After re-reading it and comparing it with my Git commits and browser history, I realised that neglecting my log not only makes me look lazier than I really have been, but it also makes it painfully easy to forget the process of learning and the effort I have been putting into this journey. (*Karo, this is a message for your future self - if you're reading this - please,*  please *- do find the time to record your progress*)

### Day 28 | 25/08/22
I finished the alternative script for *Questions* and continued with completing my log. It will probably take a while...

### Day 29 | 26/08/22
I created an additional functionality to hide all open answers apart from the one that the user clicked on. I wouldn't have guessed that I needed to use a nested `forEach` loop but when I found out about it from the tutorial which I'm following, I was able to complete the rest of the code on my own which made me feel more confident.

### Day 30 | 27/08/22
Commit-wise, I only created a new project setup (*Menu*). I focused on learning theory today (I read a few pages of my JavaScript book).

### Day 31 | 28/08/22
I sat in front of my laptop for 5 minutes contemplating life and decided to go to sleep.

### Day 32 | 29/08/22
I setup the content and styles for the Menu project and added an array of menu item objects. This is basically a fake database. I also learned about `http.postBuffer` while trying to push my commits. The push got stuck at the last line but I managed to fix it by [*increasing the Git buffer size to the largest individual size of my repo*](https://stackoverflow.com/questions/15843937/git-push-hangs-after-total-line) (Faiz Ahmad Dae).

### Day 33 | 30/08/22
Today I really didn't feel like coding, but I still did it and I don't regret it. I learned how to use the `map()` method to loop through array while modifying the content of each object (super useful!). I also realised how simple it is to display items dynamically. There are still some parts of the function that I do not understand though, so I'll have to have a look at it later.

### Day 34 | 31/08/22
All I did today was encapsulate the functionality that displays menu items from an array into a function to make the code reusable.

### Day 35 | 01/09/22
Today I created a functionality to filter menu items. While doing this, I learned about `HTMLElement.dataset` (access to custom data attributes defined as `data-<custom value>="<custom value>"` in HTML tags) and `filter` function. I was following a tutorial and didn't manage to understand the complete logic of the code behind this functionality at first, but I did understand all individual lines, so I wrote a comment above each of them to help me understand the whole block of code.

### Day 36 | 02/09/22
I recreated buttons to be displayed dynamically (I will need to go over the code again as I did a big part of this with help of the JS tutorial I'm following and I don't really understand some parts of the code).

### Day 37 | 03/09/22
Today I started the _Video_ project. It was my first time including a video in HTML - I learned about the <video> and <source> tags and their attributes (controls, autoplay, etc.). I also set up Prettier for my WebStorm because as my codebase is growing, my code started to be messy and less uniform. I'd like to explore more way of keeping a codebase tidy when I get time.

### Day 38 | 04/09/22
It's been a great day today! I learned so much. I started doing exercises from Marijn Haverbeke's Eloquent JavaScript and managed to write everything completely on my own without any Google search at all (super unusual). The first two projects were very simple and the last one was slightly more challenging but only because of 1 thing - instead of declaring a let inside a function, I declared it in the beginning of JS file and since the function was called multiple times, it kept updating the global variable instead of resetting the local one on each call.

I also found out how to merge an older repository into a new one using `git subtree` and added _Color Generator_ into this repository.

### Day 39 | 05/09/22
I spent a really long time updating a few old logs that I neglected. I didn't check what branch I was on as and accidentally committed and pushed the updates to a different branch. I didn't want to merge it as the branch name was completely unrelated to the commit so to keep it clean, I copied the changes, checked out my main branch and applied them there.

### Day 40 | 06/09/22
I added a script to the _Video_ project. It's starting to get much easier for me which I'm very happy about. It gives me a lot of motivation.

### Day 41 | 07/09/22
Today I added a preloader to the _Video_ project using `classList.add` to add a class to the preloader to the z-index of the preloader and set its `visibility: hidden`. I never thought preloaders were coded this way!

### Day 42 | 08/09/22
I didn't do much, I was travelling back home to visit my family for a couple of days.

### Day 43 | 09/09/22
I spent the day with my family, no updates.

### Day 44 | 10/09/22
I updated logs for previous days and set up a few basic files for a new project - _Scroll_.

### Day 45 | 11/09/22
I started writing HTML and created a CSS for the _Scroll_ project.

### Day 46 | 12/09/22
I finished creating structure for _Scroll_ and learned a few shortcuts and HTML symbols.

### Day 47 | 13/09/22
I learned how to implement a dynamic copyright year in the footer. It was a very simple two-liner which had me wondering why so many pages I visit have their copyright still stuck in 2020.

### Day 48 | 14/09/22
I learned about the `pageYOffset`/`scrollY` method of the `window` object. I also managed to fix a CSS issue on my own (no Stack Overflow!).

### Day 49 | 15/09/22
I changed a few _Scroll_ CSS bits because I can't stand ugly sites. While doing this, I learned that the order of stylesheets linked to HTML is important - a CSS file linked above another CSS file will be overwritten by the latter. I didn't do any JS today, neither am I planning to because I'd like to focus on learning Vim for Advanced Web Technologies module at uni (but most importantly for myself - the fact that I'll need it for AWT give me that nice little push that I need to actually dedicate my time to learning something that I've been planning to learn for a long time... I love my uni :heart:).

### Day 50 | 16/09/22
To make the scrolling more precise, I added 2 extra conditions to change the position of the scroll upon click on each of the menu links depending on which class the navbar currently has (whether it's fixed or not).

### Day 51 | 17/09/22
Every time I start to think that I might actually be good at coding, most of my confidence is shattered one way or another - today it was by GitHub (as much as I love GitHub, it does make me cry from time to time). I was checking this repository when I noticed that the project I added a couple of day ago as a subtree was gone! I still have no idea why and I haven't been able to figure it out so I managed to somehow find the old commit, download the files as a .zip file and added them into my project as a directory. Apart from that, I created a setup for a new project _Tabs_. Also, I fixed a bug in the _Scroll_ project (an incorrect classname).

### Day 52 | 18/09/22
I created and finished a script for the _Tabs_ project and changed some styles because although this is just a learning-purpose repo, ugly designs make me want to bleach my eyes. Just kidding, it's not that bad but still - nice things just make me happy.

### Day 53 | 19/09/22
Just uni stuff.

### Day 54 | 20/09/22
Didn't do anything JavaScript-related, but I created my first contribution through a fork and pull request.

### Day 55 | 21/09/22
Created a basic setup for _Countdown_. It is not finished yet though, as the CSS is faulty.

### Day 56 | 22/09/22
I fixed the styles of _Countdown_ and added a colon between the time units of the project. I also set up main bindings that will be used in the project.

### Day 56 | 22/09/22
The subtitle (h4) date is not set to be displayed dynamically using the Date() objects. This taught me a few useful built-in methods to save time.