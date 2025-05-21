# Technical Blog

Repo for personal technical blog.

Made using TypeScript, MDX, and Bun


## Editing

1. Initialise Nix flake `nix flake init -t .`
2. Enter dev environment `nix develop`


## Updating
1. Update bun dependencies `bun update`
2. Save bun lockfile `bun install --save-text-lockfile`
3. Update bun2nix `nix run github:baileyluTCD/bun2nix`
3. Update nix dependancies `nix flake update`

## Building
``` bash
nix build .# --max-jobs auto
```
