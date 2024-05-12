---
title: 'J On The Beach: Workshops'
date: '2024-05-08T15:33:28.404Z'
draft: false
---

Just wrapped up the first day of of [ J On The Beach ](https://jonthebeach.com), a conference that takes place in my 
hometown (8 years and counting) but I had never attended before.

The main question coming into day 1 was to test how bad an idea was to take 3
different workshops on 3 different topics which I have little experience with. 
I did survive, and finished the day with more energy that I started, so I
guess ~~curb~~ boost your enthusiasm.

These are the 3 I attended:
## [Container Internals By Sean Scott](https://jonthebeach.com/workshops/containers/)

I don't do any fancy things with Docker, but I love low-level 
unixy stuff, so I thought I would check this one out. I did learn quite a few
things. My favorite ones were:

- a tangible understanding of a union / merge / overlay filesystem and how containers
leverage its layers to provide an isolated environment, showing how files can be
shadowed by files in the upper layers. Sean demonstrated that by mounting a
filesystem with a few different layers.
- `docker history` it will show you everything that has happened in the build
process (and why it's a good idea to include a step to build a new image out of
your finished image, so you minimize the risk of exposing sensitive information)

### References 

- [Workshop Slides and Lab](https://github.com/oraclesean/jotb)

Here are some materials I used to prep for the workshop. These formed the basis
of the material covered 

- [Visual Docker: Introduction](https://medium.oraclesean.com/visual-docker-introduction-f83baf4c0798)
- [Visual Docker: Images and Containers](https://medium.oraclesean.com/visual-docker-images-and-containers-1efb52d02d3c) 
- [Visual Docker: Images are Immutable](https://medium.oraclesean.com/visual-docker-images-are-immutable-1af06b242777)

## [P2P Chat By Rüdiger Klaehn](https://jonthebeach.com/workshops/p2p-chat/)

As much as decentralization and p2p has been co-opted by _some sector_ of tech (i won't mention any
key term for fear of getting more spambots), it's still an interesting and
valuable technology. I loved seeing how Rüdiger claimed that type of
pragmatism explictly when motivating the workshop.

He spent a good portion of the workshop explaining their technical philosophy, 
and the underlying networking concepts. I went home with a bunch of networking
items to explore further (QUIC, Nat hole punching, ALPN, ...). 

Given that most of the participants (me included) were not very familiar with
rust (In my case I had also just broke my vim rust setup by installing [ Coc Rust Analyzer](https://github.com/fannheyward/coc-rust-analyzer) 😢), the hands on part was more like a walkthrough of the code, but the
incremental demos were super helpful to understanding the concepts.

I've been using rust in the last few months and as hard as it sometimes is, this
seems like a great opportunity to continue with it.

### References 

- [Workshop Slides]( https://hackmd.io/@GMgEoX9mQWKh09CQ-JktgA/rkrfZgOzR)
- [Iroh Worshop Source](https://github.com/n0-computer/iroh-workshop-jonthebeach) 


## [Build Your own RAG With Mustafa Esra](https://jonthebeach.com/workshops/datastax/)

This was the more enterprisey / vendor-centric one, but I have been curious about AI Agents,
Langchain and Vector DBs for quite a while. Luckily it started with a good half
hour of theory. I still don't fully get how meaning is captured/derived from embeddings,
but I know a little bit more.

The workshop leveraged managed services for everything, which intiially bummed
me but it's amazing how much you can accomplish without touching a line of code.
I particularly loved [Streamlit](https://streamlit.io/), which I had never heard of before.

### References

I checked this tutorial just before the workshop, and it helped with context.
- [ragstack tutoral](https://docs.datastax.com/en/ragstack/docs/quickstart.html)
- [source for the workshop]( https://github.com/michelderu/ragstack-astradb)

## That's it!

It's been quite interesting to experience the different types of workshops, but
this is going to be it for now. Let's see what the full conference has to offer.  




