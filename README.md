# Parrot New Documentation

New Parrot documentation using mdbook

## Why this?

Maybe mdbook can be useful for the new Parrot documentation. It is lightweight, modern and written in Rust.

## Installation

Inside this branch there is already a compiled and optimized version of mdbook (16.9 mb), but if you want you can compile yourself mdbook https://github.com/Nutomic/mdBook/tree/localization

`cd mdbook`

`cargo build --release`

and the generated binary file will be on `./target/release` folder.

## Build 

Run `mdbook serve` to build and deploy (and eventually rebuild it at each change) the book on http://localhost:3000 

Run `mdbook clean` to delete the build directory (which the book is generated)

To allowing space in SUMMARY.md's link destination use <.md file>, for example:
` - [What is Parrot](<./01.- What is Parrot.md>) `

## Localization
Thanks to the mdbook fork by Ruin0x11 (and updated by Nutomic https://github.com/Nutomic/mdBook/tree/localization) it is possible to make the documentation multilanguage. To do this, you need to add `[language.key_lang]` to the book.toml file. 

Also you will need to change the main structure of the src folder, like the following example: 

```
├── book.toml
└── src
    ├── en
    │   ├── chapter
    │   │   ├── 1.md
    │   │   ├── 2.md
    │   │   └── README.md
    │   ├── README.md
    │   ├── SUMMARY.md
    │   └── untranslated.md
    └── es
        ├── chapter
        │   ├── 1.md
        │   ├── 2.md
        │   ├── 3.md
        │   └── README.md
        ├── README.md
        └── SUMMARY.md
```

Everything is still to be tested properly.