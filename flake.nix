{
  description = "Dev shell for Astro website with Bun, TypeScript, and LSPs";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.bun
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
      packages.default = pkgs.stdenv.mkDerivation {
        pname = "sealgair.dev";
        version = "1.0.0";
        src = ./.;
        buildInputs = [ pkgs.bun pkgs.nodejs_latest ];

        # Install dependencies and site is built
        buildPhase = ''
          export HOME=$TMPDIR
          bun install --frozen-lockfile
          bun run build
        ''

        # Copy built site
        installPhase = ''
          mkdir -p $out
          cp -r dist/$ $out/
          if [-f public/CNAME ]; then cp public/CNAME $out/; fi
        ``;
      };
    }
  );
}

