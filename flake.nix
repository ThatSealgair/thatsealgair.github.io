{
  description = "Dev shell for Astro website with Bun, TypeScript, and LSPs";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    bun2nix.url = "github:baileyluTCD/bun2nix";
    bun2nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils, bun2nix }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.bun
            bun2nix.packages.${system}.default
            pkgs.nodejs_latest
            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server
            pkgs.biome
            pkgs.dprint
            pkgs.vscode-langservers-extracted
            pkgs.marksman
            pkgs.markdown-oxide
            pkgs.typos
          ];
        };

      # Build Astro for deployment
      packages.default = pkgs.callPackage ./default.nix {
        inherit (bun2nix.lib.${system}) mkBunDerivation;
      };
    }
  );
}

