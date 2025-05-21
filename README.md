# Technical Blog

Repo for personal technical blog.

Made using TypeScript, MDX, and Bun


# Development Environment

This project uses [Nix flakes](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html) to provide a fully reproducible development environment with [Bun](https://bun.sh/) and all necessary tools. You can develop, add or update packages, and build for production using the same commands on any supported system.

---

## Quick Start

1. **Install [Nix](https://nixos.org/download.html) (with flakes enabled).**
2. Clone this repository.
3. Run:
```
nix develop
```

This drops you into a shell with Bun and all dev tools available.

---

## Installing the Dev Environment

With Nix installed, simply run:

```
nix develop
```

This gives you a shell with:
- Bun (JavaScript runtime & package manager)
- Node.js
- TypeScript & LSPs
- Any other tools defined in `flake.nix`

No need to install Node, Bun, or any other dev tools globally!

---

## Adding & Updating Packages

### With Bun (JavaScript/TypeScript packages)

- **Add a package:**
```
bun add <package-name>
```
- **Remove a package:**
```
bun remove <package-name>
```
- **Upgrade packages:**
```
bun upgrade
```

> Bun manages your `package.json` and lockfile as usual.

### With Nix Flakes (system/dev tools)

- To add or update system-level tools (e.g., Bun version, linters), edit the `buildInputs` list in your `flake.nix` under `devShells.default`.
- To update all flake inputs (e.g., get latest Bun from Nixpkgs):
```
nix flake update
```

---

## Running the Development Server

Inside the Nix shell:

```
bun run dev
```

This starts the Astro development server, usually at [http://localhost:4321](http://localhost:4321).

---

## Production Build

Build your site for production with:

```
bun run build
```

The static site will be output to the `dist/` directory.

---

## Previewing the Production Build

After building, preview the production site locally:

```
bun run preview
```

---

## CI/CD & Deployment

GitHub Actions uses Nix to provide Bun and dependencies, then builds with Bun:

```
- name: Install Nix with flakes support
    uses: cachix/install-nix-action@v27
    with:
      extra_nix_config: |
      experimental-features = nix-command flakes

- name: Install JS dependencies
  run: nix develop -c bun install

- name: Build site
  run: nix develop -c bun run build

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
  path: ./dist
```

---

## Keeping Things Up to Date

- **Update JavaScript packages:** Use Bun (`bun add`, `bun upgrade`, etc.)
- **Update system/dev tools:** Edit `flake.nix` and run `nix flake update`
- **Update lockfiles:** After changing JS packages, commit the updated lockfile.

---

## References

- [Nix Flakes Guide](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html)
- [Bun Documentation](https://bun.sh/docs)
- [Astro Documentation](https://docs.astro.build/)
- [Example: Nix + Bun Dev Environments](https://github.com/the-nix-way/dev-templates)
