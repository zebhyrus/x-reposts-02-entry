# x-reposts-02-entry

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/zebhyrus/x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/zebhyrus/x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts": you make posts of your own on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai, all from one public account, and this repository hands in their addresses. Your score is 2 points for each repost and each quote and 1 point for each like all your posts draw by the deadline, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## How to post

Each post is made from one public X account (@zebhyrus), at or after the bounty opens (2026-11-25T07:30:00Z) and before the deadline (2026-11-28T07:30:00Z, 28 Nov 15:30 WITA). Each post quotes (Repost, then Quote) or directly replies to a different make.fun pool post, and its own words carry make.fun or @makefunai plus the play code `makefun-macaw-outpost-stairs`. The five drafts, one per pool post, are in AGENT.md. After posting, put each post's address (Share, then Copy link) into POSTS.json as `{"posts": ["https://x.com/zebhyrus/status/<id>", ...]}`. Up to 15 posts, one per pool post.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies POSTS.json from this repository to the output directory. That is all it does.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9srzvfjv&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
