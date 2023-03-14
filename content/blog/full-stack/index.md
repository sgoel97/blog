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

Now that we

## Introducing React

## Introducing React

## More Resources
