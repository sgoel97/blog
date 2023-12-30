---
title: Crypto and DeFi Resources
date: "2022-03-22"
description: Resources I've used to gain a deeper understanding of common DeFi tools and technologies.
category: software
---

Below are some resources I would reccomend to those looking to learn more about DeFi and Crypto, categorized by topic. Even though these can be looked at in any order, I would recommend beginners to watch the first video linked under the Ethereum section to gain an understanding of networks and protocols, concepts that are ubiquitous in the DeFi World.

## Ethereum

- [What is Ethereum?](https://www.youtube.com/watch?v=jxLkbJozKbY)

Really useful primer on ethereum and the basics of blockchain technology.

- [Wrapped ETF (WETH)](https://weth.io/)

Good explanation for why WETH (Wrapped ETH) Exists.

## Solidity

- [Crypto Zombies](https://cryptozombies.io/)

Whether you have some experience programming or are starting from scratch, I'd recommend starting with Crypto Zombies to learn the ins and outs of Solidity. The tutorial explains the fundamental concepts behind the Solidity language rather than just going over syntax, making it easy to understand how Solidity is well-suited to smart contracts.

- [How to create an ERC-20 Token](https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/)

How to create your own coin. Deploy using Remix.

- [Open Zepplin ERC-20 Standard](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20)

More advanced ERC-20 implementation.

## AMMs

### Uniswap

You can't go wrong with the UniSwap whitepaper. The whitepaper for Uniswap V3 is pretty confusing if you haven't read and understood the whitepaper for UniSwap V2 first, so make sure to start there if you're new to AMMs.

- [Uniswap V2 Whitepaper](https://uniswap.org/whitepaper.pdf)

- [Uniswap V3 Whitepaper](https://uniswap.org/whitepaper-v3.pdf)

Don't worry if you don't quite get what's going on here. The mechanisms behind Uniswap V3 are fairly unintuitive, and the whitepaper doesn't do the best job on explaining the core concepts it relies upon, such as concentrated liquidity.

### Curve (StableSwap)

Curve was a somewhat hard one, since the whitepaper wasn't particularly as helpful as online resources in understanding the derivation of the StableSwap Invariant.

**Prereqs:** Make sure you've read and understood the UniSwap V2 whitepaper, especially the constant product AMM formula and the concept of a constant product invariant.

- [Curve StableSwap Whitepaper](https://curve.fi/files/stableswap-paper.pdf)

Even though it's pretty confusing and doesn't explain algorithm design decisions as well as it could, definitely start here to learn about Curve and the StableSwap invariant. Don't worry if you're confused, just read through this and then look through the next resource I've linked in this article.

- [Explanation of the StableSwap Invariant](https://miguelmota.com/blog/understanding-stableswap-curve/)

Read this to understand the design decisions behind the StableSwap invariant. Explains the math much more intuitively than the Curve whitepaper. I would reccomend re-reading the Curve StableSwap Whitepaper after understanding the math better through this article.

## Impermenant Loss

- [Uniswap: A Good Deal for Liquidity Providers?](https://pintail.medium.com/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)

This article is good for understanding the basics of the math behind impermenant loss.

- [How to calculate Impermanent Loss](https://medium.com/auditless/how-to-calculate-impermanent-loss-full-derivation-803e8b2497b7)

Derives the impermenant loss formula.

## Personal Reading List

- [Where Crypto Meets The Metaverse](https://metaversed.net/into-the-void)

- [Taking undercollateralized loans for fun and for profit](https://samczsun.com/taking-undercollateralized-loans-for-fun-and-for-profit/)
