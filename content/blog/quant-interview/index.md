---
title: Acing the Quant Interview
date: "2022-03-25"
description: A quick guide to how to get ready for quant interviews.
category: quant
---

How to land an internship or new grad role in quant finance (focused primarily on trading).

**Disclaimer:** All statements here are of my own opinion from personal experience and what I've heard.

### Applying

#### Resume

Make sure to optimize your resume towards a focus on math and data science. If you did math competitions in high school make sure to include those, along with your high school info if you had high standardized test scores. All other standard resume tips apply. [Here's a link](https://docs.google.com/document/d/148Ad8l0MkVTAP32JlLGYae27r5G_59URGUUWXpTVLFQ/edit?usp=sharing) to a a resume template I like and use.

#### Timeline

Most quant job listings come out in Late July/August, though 2-3 firms tend to start earlier (Late March/April). I would highly recommend applying starting from Late March/April to these earlier firms and then applying as soon as possible to other firms in the summer. The earlier you apply, the better chance you have of getting an offer. In general, make sure to apply as soon as the listing is open. If you have a deadline, make sure to let firms know via application or email, and they'll most likely give you an early interview even if their applications haven't opened yet.

#### Referrals

While referrals can help, don't focus on creating connections within the industry, and certainly don't sacrifice time preparing for the interview for the sake of networking. Compared to other industries, referrals and connections in quant mean significantly less, and time spent preparing for the interview will serve you better than any extra time spent getting a referral.

#### Year in School

Never say you're a sophomore or a freshman, because that means an automatic rejection from any quant internship. If you're a freshman or a sophomore, there's specific programs that you can apply to, such as [Jane Street's FTTP](https://www.janestreet.com/join-jane-street/our-programs/fttp/), [Citadel's Discover Citadel](https://www.citadel.com/careers/launch-your-career/discover-citadel/), and [D.E. Shaw's Fellowship Programs](https://www.deshaw.com/careers/fellowships), amongst some others. I would recommend freshmen and sophomores spend their summers taking classes, doing CS research, or working a software engineering internship at either a big tech firm or a cool startup. If you don't have an internship lined up, I would push self-learning as a great use of extra time.

### Preparation

##### Areas of Study and Relevant Classes

**Disclaimer:** I'm a student at UC Berkeley, so class recommendations will primarily focus on offerings from Berkeley. Most course content from these classes is public, however, and linked below.

- Mental Math

Make sure your mental math game is on point. While there are no classes for this, make sure to practice it often while doing practice problems in math, probability, or any other technical field, or even in everyday life! A good resource to practice your mental math skills is [ZetaMac](https://arithmetic.zetamac.com/). Use the default settings, and try to score above 40. if you can't do it initially, keep on practicing! Just like everything else, practicing mental math often makes you both faster and better at it.

- Probability

This one is by far the most important topic to understand. A lot of trading interviews won't even test your programming skills and only your understanding of math and probability. Thus it is **paramount** to understand probability inside and out. Make sure you take at least one upper-division probability course in college if possible. I would recommend [Data 140](http://prob140.org/) or [EECS 126](https://inst.eecs.berkeley.edu/~ee126/sp22/) for this. EECS 126 covers more content, but Data 140 goes more in-depth into relevant interview topics and tends to ask questions that are more similar to what you'd see in a trading interview, so I'd heavily recommend it over EECS 126. If you end up taking Data 140, I'd personally recommend [Stat 150](https://www.stat.berkeley.edu/~bensonau/f21.150/index.html) to cover stochastic processes, which sometimes appear in interviews (but not very often). Stat 150 is definitely unnecessary as the Green Book (which I talk about in the "Books" section) covers everything you need to know about markov chains and martingales, but I personally enjoyed the class a lot and found it useful for my own understanding of the subject.

- Programming and Algorithms

Programming is not usually tested for Quant Trading roles but is commonly needed for Quantitative Researcher interviews. In particular, more QR-heavy firms will almost always test for programming skills through a combination of online assessments and Leetcode-style interviews. This includes firms like HRT, Headlands, and Jump Trading. The best way to practice this is to stay sharp on Leetcoding skills. I find the [Grind 75](https://www.techinterviewhandbook.org/grind75) to be a solid starting point and benchmark of Leetcode ability. In terms of classes, make sure to have [CS 170](https://cs170.org/) level knowledge of programming and algorithms. For Berkeley students, this typically requires [CS 61A](https://cs61a.org/), [CS 61B](https://inst.eecs.berkeley.edu/~cs61b/sp22/), and [CS 70](https://www.eecs70.org/) as prerequisites. Python tends to be the preferred language for quantitative finance, but most firms allow you to choose between Python and C++ for programming interviews and challenges.

- Linear Algebra and Calculus

Not super important for most Quant Trading interviews, but if you have time, make sure to brush up on basic Linear Algebra and Calculus. The section of the Green Book focused on these topics is a solid way to check your knowledge of these topics, but keep preparation here as a lower priority compared to probability, statistics, mental math, and programming. For Berkeley students, make sure to have some sort of understanding of the math taught in classes like Math 53 and Math 54, focusing more on Linear Algebra rather than Calculus. If you did Multivariable Calculus and/or Linear Algebra in high school, that should be enough as well.

- Statistics (Quantitative Research Roles)

While an understanding of various testing methods and a general knowledge of statistics are useful for anybody in this field, these topics are usually only brought up in Quantitative Research interviews. Relevant topics include a deep understanding of confidence intervals, hypothesis testing, and normal distribution rules/manipulation. For example, you should be able to design a test which determines whether or not a specific result is statistically significant given a situation (a vague enough statement which can easily be applied to the job as well). Stat 135 is the most helpful for an intro to statistics, and is a fairly easy class. If you're interested at all in Quantitative Research, this class is a must take.

- Machine Learning and Data Science (Quantitative Research Roles)

This is more so for Quantitative Research roles, but knowing linear regression inside and out is paramount for interviews. Make sure you understand the strengths/weaknesses of linear regression, it's assumptions, and how to adopt your model if the assumptions aren't met. It's also a good idea to know these facts for other major models, such as Random Forests. Good classes for this are [Data 100](https://ds100.org/) for basic data science (numpy/pandas) skills in python, Stat 151A or Econ 142 for linear modeling, and [CS 189](https://people.eecs.berkeley.edu/~jrs/189/) for general understanding of machine learning. None of these classes cover linear regression in-depth enough, however, so you'll need to engage in independent study as well.

For data science, you can expect two potential interview types. The first is a sort of system design question. In this, you will be asked to predict something, and you'll have to determine what data you need, how to collect it, how to process it, and finally how to use it to predict what you need to find. The second type will directly asses your knowledge of the data science process and techniques. This will most likely entail giving you a dataset and letting you work on predicting a dependent variable. I would recommend going through the standard data science process of exploratory data analysis, feature engineering, modeling, and repeat. When modeling, remember to check your assumptions and correct model deficiencies, as I stated above. Another helpful rule of thumb would be to run a naive model using all of your independent variables to get a baseline set of metrics such as mean squared error and R^2 before starting to do analysis. As far as I'm aware no class covers this explicitly and is more so built with real experience working with data and machine learning.

#### Books

- "A Practical Guide to Quantitative Finance Interviews" by Xinfeng Zhou

Often referred to as "The Green Book", this is the holy grail of interview prep for Quantitative Finance Interviews. Focus on Chapters 1, 2, 4, and 5 for trading interviews. Free PDF versions of the book can easily be found online.

- "Quant Job Interview Questions And Answers" by Mark Joshi

This book is also useful when preparing for quant interviews. Like the Green Book, free pdf versions of this book can be found online easily. Make sure to go through the Green Book first, however, and this book afterwards as a supplemental piece.

### After the Offer

Make sure to negotiate! Most firms will include or increase their sign-on bonus if you negotiate or if you let them know you have a competing offer or are in the final rounds with another company.

#### Leveraging an Offer

If you receive an offer, make sure to let everybody you're interviewing with know. The same goes with final rounds for any well-known company. This makes it seem as if you're in high demand, and will be seen as a positive signal when firms are making their final hiring decision.

### List of Firms

**Disclaimer:** Categorization of firms is entirely based on my personal opinion and knowledge.

#### Popular firms for undergraduates

- Akuna Capital
- Belvedere Trading
- Citadel / Citadel Securities
- Cubist Systems (Point72)
- DE Shaw
- DRW
- Five Rings Capital
- Flow Trading
- Hudson River Trading
- IMC
- Jane Street Capital
- Jump Trading
- Optiver
- Susquehanna International Group (SIG)
- Tower Research Capital
- Two Sigma
- Voleon
- Voloridge

#### Smaller firms that also take undergraduates

- Aquatic Capital
- Chicago Trading Company
- Cutler Group
- Group One Trading
- Old Mission Capital
- Peak6
- Valkyrie Trading
- Vatic Labs
- Virtu Financial
- Wolverine Trading
- XR Trading
- Headlands Technologies
- TransMarket Group

#### Other (Firms that are very difficult to get into, smaller firms, etc...)

- 3Red Partners
- Allston Trading
- Ansatz Capital
- ART Advisors
- Blackedge Capital
- Bluefin Companies
- Cognitive Capital
- Da Vinci Derivatives
- Domeyard
- DV Trading
- Eagle Seven
- Eclipse Trading
- Edgehog
- Edgestream Partners
- Emergent Trading
- Engineers Gate
- Epoch Trading Group
- Ergoteles
- Final
- G-Research
- Gelber Group
- Geneva Trading
- Gingko LLC
- GTS
- HAP Capital
- Hard Eight Trading
- HC Technologies
- Istra
- Liquid Capital Group
- Mako Trading
- Maven Securities
- Millenium Advisors
- Nine Mile Financial
- PDT Partners
- Quadrature Capital
- Quantlab
- Qube Research & Technologies
- Radix Trading
- Renaissance Technologies
- RSJ Securities
- Seven Eight Capital
- Sierra Pacific Securities
- Spark Capital Management
- Teza Technologies
- TGS
- Tibra
- Tradebot Systems
- Tsuru Capital
- Velar Technologies
- VivCourt Trading
- Volant Trading
- WH Trading
- Wintermute
- XTX Markets

## Aknowledgements

Shoutout to [Traders at Berkeley](https://traders.berkeley.edu/) for being an amazing knowledge source and community.
