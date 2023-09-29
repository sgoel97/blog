---
title: Become a Full-Stack Engineer
date: "2022-03-27"
description: Your go-to guide on getting started with full-stack development.
category: software
---

[In Progress]

Learning full-stack development can feel overwhelming. With the vast amount of resources available, all claiming to be the best way to become a pro, It's easy to get stuck in indecision and end up only learning half of a subject without truly understanding how to build an app from scratch.

To solve this problem, I've created a roadmap that helps you cut through the noise and focus on the fundamentals necessary to start building your own amazing websites, platforms, and apps. Having taught full-stack development to over 500 students at all levels and with experience building projects used by hundreds of thousands of people, I can confidently say that these courses, along with your own practice, will turn you into a strong engineer.

In this guide, we'll cover courses that teach you the following skills.

**Frontend Development:** HTML/CSS, JavaScript, React.js

**Backend Development:** Node.js, APIs, Networking, Servers, Nginx

**DevOps:** Amazon Web Services, Git

Additionally, I'll reference additional courses and resources that cover the following.

**Frontend Development:** React Native, Typescript, Electron, Gatsby, Webpack

**Backend Development:** MongoDB, Express, Python Frameworks

Alright, let's get started!

## TLDR;

If you want to skip the words and dive straight into the courses I reccomend, check out [this infographic](https://www.figma.com/file/k47TQGZtVjwlp1d9mRD9kg/Web-Dev-Learning-Path?node-id=0%3A1) I put together that summarizes the core information in this post. If you want more detail on the steps and reccomendations I have for learning full-stack development beyond just the roadmap, however, read on.

## Setup

Many of these courses are taught by [Frontend Masters](https://frontendmasters.com/), an educational platform with dozens of high-quality courses encompassing frontend, backend, and devops. If you're a student, you can get 6 months free by using the [GitHub Student Developer Pack](https://education.github.com/pack), a collection of free CS resources for students offered by GitHub. Even if you don't end up using Frontend Masters, the pack includes amazing resources for students, such as GitHub Pro, Azure and Heroku credits, and 3 weeks of access to Interview Cake. Even without the pack, you can access most of the courses in this roadmap for free, so no worries if you're not a student!

One crucial step before starting is creating a [GitHub Account](https://GitHub.com/). GitHub allows you to store and share your code with an easy to use web interface. GitHub also allows developers to share their work and collaborate together. When working through the courses and projects below, make sure to keep all your work on GitHub. In this way, GitHub can help serve as a portfolio for yourself and for others to see the work you've done.

## First Steps

Let's start with an overview of frontend development, putting into perspective some of the buzzwords you might have seen before.

The core technologies of frontend development are HTML, CSS, and JavaScript. HTML and CSS are used to create the actual look of a website. Think of the structure, color, and words on a website - these all come from HTML and CSS. Most informational websites you see on the internet require just HTML/CSS to make. Next is JavaScript. You can think of JavaScript (JS) as the logic behind a website. Let's use Amazon as an example. Everything you see and interact with when browing for an item is just data you see, and doesn't actually have any logic behind it. This is all just HTML and CSS. When you go to buy something, however, we are using payment logic, and this is where JavaScript comes in. Another example is when you are searching for a specific item on Amazon. When you hit the search button, we use JavaScript to decide what items to show you.

In frontend development, everything compiles down to these thre things: HTML, CSS, and JS. If you've heard of React or Node, these are just frameworks built on top of JavaScript, and use HTML/CSS to actually work under the hood. In fact, most frameworks and tools you've heard of are just some way to work with HTML/CSS/JS that make your life easier or make these tools more powerful.

### Our First Stop: Complete Intro to Web Development

<figure>
    <img src="/full-stack/intro-to-web-dev.png" alt="Complete Intro to Web Development, v3" width="100%"/>
    <figcaption align="center">
        <p>
            <a href="https://frontendmasters.com/courses/web-development-v3/">
                Complete Intro to Web Development, v3
            </a>
        </p>
    </figcaption>
</figure>

Given that most of web and frontend development boils down to HTML, CSS, and JavaScript, this is where we're going to get started. [Complete Intro to Web Development, v3](https://frontendmasters.com/courses/web-development-v3/) is the best course for frontend beginners, covering these three core topics from a fundamental perspective, and is comprehensive enough even for those who've never coded before to follow along with. This course is a must for anyone who wouldn't consider themselves as having an **at least** intermediate knowledge of HTML/CSS/JS, as it's easy to "know" these tools without actually being able to use them effectively.

### Step Two: Understanding the Internet

<figure>
    <img src="/full-stack/internet.png" alt="How The Internet Works" width="100%" style="border: 1px solid black"/>
    <figcaption align="center">
        <p>
            <a href="https://www.youtube.com/playlist?list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7">
                How The Internet Works by Code.org
            </a>
        </p>
    </figcaption>
</figure>

Now that we've gotten a solid understanding of how to build a website, let's turn our attention to how information, including our HTML, CSS, and JavaScript files, actually gets sent and used over the internet. This short playlist by [code.org](https://code.org/) does a great job of explaining the fundamental concepts in networkiing though understandable analogies and without getting too technical. While it may be unclear how networking concepts relate to full-stack development, I believe that an understanding of the internet helps deepen ones ability to use and reason about other full-stack topics that we'll touch upon later, such as servers and databases.

### Stopping Point: Your First Project(s)

<figure>
    <img src="/full-stack/feb.png" alt="Formula Electric at Berkeley" width="100%"/>
    <figcaption align="center">
        <p>
            <a href="https://ev.berkeley.edu/">
                Formula Electric at Berkeley Website
            </a>
        </p>
    </figcaption>
</figure>

One key aspect of becoming a full-stack developer is the importance of personal projects. It's easy to go through the process of learning how to program without actually being able to create anything of value. To avoid this, it's essential to put your skills to the test by building projects using what you've learned so far. This will not only give you practical experience, but it will also make learning frameworks like Node and React more meaningful and valuable in the future.

Before moving on to advanced topics like backend development and DevOps, it's important to practice and strengthen your foundation in HTML, CSS, and JavaScript. I recommend working through 2 types of projects here:

#### Project 1: Static Website

One way to start building your portfolio as a full-stack developer is to create a static website. A static website is one that does not have any logic behind it and is simply for informational purposes. This project will give you practice with HTML and CSS, and can serve as your first project in your full-stack development portfolio. There are two options for this project. One is to work with an organization you are affiliated with to build an informational website for them. Alternatively, you can build a portfolio website for yourself to showcase your current (and future) work! Real-world development experience is often more valuable and informative than any course, and this project can provide that type of experience by presenting unexpected challenges.

An example of the former is the the [Formula Electric at Berkeley Website](https://ev.berkeley.edu/), which is where the image above is from. This was actually my first real-world development project, and served as an amazing springboard towards getting more projects. Over the course of the website's development I encountered many challanges that hadn't been mentioned in the earlier courses, further marking real-world development experience as a must-have for anyone looking to build anything useful with their knowledge.

For the second option, try making something fun! A personal website is your presense on the web, so try to add your personality to it! In general, you want to have a front page, an about section, a page for your projects, and then any other sections/content you may want, such as a blog or a photography showcase. The sky is the limit, be creative!

For design inspiration, I would recommend checking out [Figma Community](https://www.figma.com/community/) You can look through the mockups that Figma users have published, and clone them to help you design your own project. You can also use new generative AI tools like [midjourney](https://www.midjourney.com/) for asset generation if needed.

Lastly, for hosting, I would reccomend using [GitHub Pages](https://pages.GitHub.com/).

#### Project 2: JavaScript Calculator

If you already completed [Complete Intro to Web Development, v3](https://frontendmasters.com/courses/web-development-v3/), you should have already built a calculator app in JavaScript.

If you've elected to skip the course for whatever reason, you can find the full project [here](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project).

## Getting More Advanced

Now that you've mastered HTML, CSS, and JavaScript, you (in theory) are ready to build anything you could ever dream of. Doing so might be difficult for certain tasks and projects, however, hence the existence of packages, frameworks, and components. Knowing these might (again, in theory), be unnecessary, but they'll make large-scale projects multiple orders of magnitude more approachable, and honestly make the process of creating these platforms much more enjoyable.

## NPM

The heart of advanced development tools is NPM, which stands for Node Package Manager. Don't worry about what Node is for now - just focus on installing it properly. If you're on a Mac, I heavily recommend using [Homebrew](https://brew.sh/) to manage your packages. Follow the instructions on the [Homebrew Website](https://brew.sh/) to install homebrew. Afterward, you can install any package by simply running `brew install <package_name>` in your command line. To this end, run the following:

- `brew install npm`
- `brew install npx`
- `brew install react`
- `brew install node`

## Introducing React

We're going to start by Introducing React.js. As promised, React is a JavaScript framework created by Meta and focuses on making front-end engineering much easier. React uses the model of state and components to operate. Don't worry if you don't know what that means - that's why you'd take a look at another course by Frontend Masters, [Complete Intro to React, v8](https://frontendmasters.com/courses/complete-react-v8/). Don't worry if the course is a bit confusing - React has a very steep learning curve, but after a few projects you'll get the hang of it and become an expert in no time.

Before you start on projects, I quickly want to introduce the concept of `boilerplate`. Boilerplate simply means starter code that works well for a variety of applications. React has a boilerplate program called **Create React App** (CRA for short) that's used very commonly. Run the following command in your terminal to create a boilerplate react project titled my-app. `npx i create-react-app my-app`. More generally, you can run `npx i create-react-app <project-name>` to create a project with the name you want.

Running this command will create a folder with your project title as the name. In this folder, which is called the root directory, there will be several subfolders. The most important one is `src`, as this will hold most of your code. If you want to change the meta aspects of your website (website title, favicon, etc...), that stuff is in the `public` folder. `package.json` is the last important file, as it contains a list of packages that your project depends on (aptly, these are called dependencies), alongside some basic information about your project. Take a look over the files and contents of these 3 locations to gain some familiarity with where things are. You may not understand everything going on, but you will soon.

Finally, run `npm start` in the root directory of your project. ALlocalhost should open up in your browser with whatever boilerplate code Create React App has given you.

Now that you've set yourself up, go through the [aforementioned React Course](https://frontendmasters.com/courses/complete-react-v8/) and try to figure out what's going on each step of the way, before moving on to the below projects.

### Project 3: Tic-Tac-Toe

This one is a classic. Follow the tutorial on [The Official React Website](https://react.dev/learn/tutorial-tic-tac-toe) to go through and create a fully functional tic-tac-toe game from scratch, in React. Try to understand what's going on each step of the way, and then try to reproduce the entire thing from memory, without help. This might be difficult at first so it's fine to look at the tutorial as a reference, but ideally, try to go through the entire exercise until the steps and code are burned into your memory.

### Project 4: Static Website, Again

We said that React was a frontend framework, right? Go back to the static site you made for your first project (or make a new one, even better!) and recreate (or create) it in React. This time, try to create a website with multiple pages (this demonstrates the utility of React much better than a single-page website). Try to use components - Make a component for Buttons, a component for the navbar, a component for titles, etc... Try to turn any major part of your website into a component.

What's the utility of this? Let's say you want to change the navbar of your website. In a pure HTML/CSS/Javascript regime, you would have to go through the HTML file for every page and adjust the navbar. Using React, you can make one change to the singular Navbar component file, and voila! It changes everywhere. The same thing applies to styling - if you want to change the color scheme, button style, or header style, all it takes is a change to one file instead of many.

### Aside: File Structure

When you create a react project, you might run into the issue of all your components, themes, pages, and logic files becoming a big mess. A common paradigm is to have the following folders inside of your `src` directory:

- `components`: Keep your components here. Make sure to label them appropriately, such as `Button.js`, `Navbar.js`, etc. Component names are typically capitalized.
- `pages`: this is where you keep your higher level pages (`About.js`, `Team.js`). Page names are also typically capitalized. As a general rule of thumb, try to keep your page files simple, and move as much JSX code as possible into components.
- `theme`: If you're using a component library or global themes, having a separate folder for these is typically a good idea.
- `assets`: for storing pictures and other website assets
- `data`: For storing any useful data such as lists, objects, etc. that are used in your website and lend themselves to repetitive iteration or commonly done changes.

### Project 5: Social Media Platform

[Coming Soon]

## The Backend

[Coming Soon]

## More Resources

[Coming Soon]
