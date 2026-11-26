# AGENT.md: makefun-x-reposts-02

Bounty: "Get the most reposts and likes on make.fun's newest X posts", slug
`makefun-x-reposts-02`, pot $500 shared by the top 50. Entries close
2026-11-28T07:30:00Z, which is 28 Nov 15:30 WITA. Owner zebhyrus, repo
`x-reposts-02-entry`, referral `9srzvfjv`.

## Play code

`makefun-macaw-outpost-stairs` (code 0; the account has 4 codes, any one
passes). Every draft below carries it verbatim.

## Scoring and prizes

Score = sum over your posts of (2 x reposts + 2 x quotes + 1 x likes).
Views and replies move nothing. Prizes: 1st $100, 2nd $60, 3rd $30,
4th to 10th $10 each, 11th to 50th $6 each. A tie goes to the earlier
submission. Keep every post up and the account public until results are out.

## The pool: make.fun's 5 newest X posts at the opening

Floor post id `2125053632605196760`. Any @makefunai post with id at or
above that number is a valid pool post, so if make.fun posts anything new
before the deadline the user can quote or reply to that too. One post of
yours per pool post, max 15 posts total in POSTS.json.

### Pool 1 (newest)

- id: 2125375203744391226
- date: 24 Nov 2026, 23:45 UTC
- url: https://x.com/makefunai/status/2125375203744391226
- text: "Make GTA 6" ghost @RockstarGames #1 zor-vink $500 USDC #2
  quick-lark-12 $250 USDC #3 superskie $150 USDC, with a link to
  https://make.fun/bounty/gta6-01/leaderboard

### Pool 2

- id: 2125247026728235268
- date: 24 Nov 2026, 15:15 UTC
- url: https://x.com/makefunai/status/2125247026728235268
- text: self-thread continuation. "Agents already made the best game on
  https://make.fun. See who won: https://make.fun/bounty/best-game-01"

### Pool 3

- id: 2125246707512553850
- date: 24 Nov 2026, 15:14 UTC
- url: https://x.com/makefunai/status/2125246707512553850
- text: "MADE WITH AI: Optima Arch built Slotbound 100% with AI. The solo
  developer's first Steam game grossed nearly $1.33 million in its first
  week."

### Pool 4

- id: 2125053991293784431
- date: 24 Nov 2026, 02:28 UTC
- url: https://x.com/makefunai/status/2125053991293784431
- text: self-thread continuation. "Your agent can build the open world
  too. $1,666 in USDC for the most complete GTA 6-style browser game:
  https://make.fun/bounty/gta6-01"

### Pool 5 (floor post)

- id: 2125053632605196760
- date: 24 Nov 2026, 02:27 UTC
- url: https://x.com/makefunai/status/2125053632605196760
- text: "MADE WITH AI: Mike Houser built AOD: Age of Dragon with Claude in
  a few days, after quitting their job with $1,400 left. Two months on,
  they're profitable."

## Drafts: one per pool post

Post from @zebhyrus, one public account, between the opening
(2026-11-25T07:30:00Z) and the deadline (2026-11-28T07:30:00Z). Each draft
is under 280 characters (the account is not Premium, so every character
counts) and carries make.fun written out and/or @makefunai plus the play
code. Each draft was checked with the humanizer skill: zero dash
characters anywhere except the hyphens inside the play code itself, which
must be posted verbatim. Copy each draft exactly as written.

### Draft 1: QUOTE of pool 1 (GTA 6 leaderboard)

Answers https://x.com/makefunai/status/2125375203744391226. Angle: joke.

> zor vink took $500 for a GTA 6 game an agent built. I am still here pressing buttons like a tourist. @makefunai where is my cut? makefun-macaw-outpost-stairs

157 characters.

### Draft 2: REPLY to pool 2 (best game winner)

Answers https://x.com/makefunai/status/2125247026728235268. Angle:
challenge to other agents.

> Agents already made the best game on make.fun and I missed the whole thing. Next round I am building mine and taking the crown. Who is brave enough to lose to me? makefun-macaw-outpost-stairs

191 characters.

### Draft 3: QUOTE of pool 3 (Slotbound $1.33M)

Answers https://x.com/makefunai/status/2125246707512553850. Angle: a
number that stuns.

> One solo dev, one AI built game, $1.33 million in week one. Slotbound just proved the old excuse is dead. What are you still waiting for? make.fun makefun-macaw-outpost-stairs

175 characters.

### Draft 4: REPLY to pool 4 (GTA 6 style game, $1,666)

Answers https://x.com/makefunai/status/2125053991293784431. Angle: "what
would you build" hook.

> make.fun is paying $1,666 for the most complete GTA 6 style browser game. If your agent could build any open world, what would it be? Tell me below. makefun-macaw-outpost-stairs

177 characters.

### Draft 5: QUOTE of pool 5 (AOD Age of Dragon)

Answers https://x.com/makefunai/status/2125053632605196760. Angle: direct
call to repost.

> Quit his job with $1,400 left, built a game with Claude in days, now profitable. That is the AOD story. Repost this if you are building yours too. @makefunai makefun-macaw-outpost-stairs

186 characters.

## Phase 2: after the user posts

POSTS.json currently holds `{"posts": []}`. That is the honest
placeholder: the real post URLs do not exist yet, and the starter's
placeholder address would be refused. After the user posts the drafts
from @zebhyrus on his phone, fill POSTS.json with the real addresses in
this form:

`{"posts": ["https://x.com/zebhyrus/status/<id>", ...]}`

One address per pool post, up to 15 total. If make.fun posts anything new
before the deadline, the user may quote or reply to that as well (its id
will be above the floor `2125053632605196760`), and its address joins the
same list. Then run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` and check that out/POSTS.json matches.

## How to post each draft

- QUOTE: on the pool post itself, Repost button, then Quote, draft text
  above it.
- REPLY: Reply button on the pool post itself, directly under it. A reply
  to someone else's reply under it does not count, and neither does a
  plain repost. Write make.fun or @makefunai in the reply text itself:
  the "Replying to @makefunai" line X adds does not count.
- Never repost, quote or like your own posts, and never buy or bot
  engagement: that disqualifies the entry. A photo or video is welcome
  and never required; a video must end with make.fun's referral end card
  from the press pack, carrying referral code `9srzvfjv`.

## The program

`main.ts` (Node 22, stdlib only) copies POSTS.json from the repository
root (`MAKEFUN_BOT_DIR`, default `/bot`) to `/output/POSTS.json`
(`MAKEFUN_OUTPUT_DIR`, default `/output`). It first checks the file
parses as JSON and holds a posts array. That is all it does.
