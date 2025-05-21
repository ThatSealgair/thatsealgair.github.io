{
  description = "Dev shell for Astro website with Bun, TypeScript, and LSPs";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" ];
    in
    {
      devShells = builtins.listToAttrs (map (system: {
        name = system;
        value = nixpkgs.legacyPackages.${system}.mkShell {
          buildInputs = [
            nixpkgs.legacyPackages.${system}.bun
            nixpkgs.legacyPackages.${system}.nodejs_latest
            nixpkgs.legacyPackages.${system}.nodePackages.typescript
            nixpkgs.legacyPackages.${system}.nodePackages.typescript-language-server
            nixpkgs.legacyPackages.${system}.biome
            nixpkgs.legacyPackages.${system}.dprint
            nixpkgs.legacyPackages.${system}.vscode-langservers-extracted
            nixpkgs.legacyPackages.${system}.marksman
            nixpkgs.legacyPackages.${system}.markdown-oxide
            nixpkgs.legacyPackages.${system}.typos
          ];
        };
      }) systems);
    };
}

