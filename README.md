### Compile locally mdBook for Parrot Documentation

## First step: Create the working directory and clone locally the Documentation repo

`mkdir doc`

`git clone https://nest.parrotsec.org/org/community-team/misc.git `

`cd misc`

`git switch doc-assembled`

## Second step: Clone mdBook repo

`cd ..`

`git clone https://github.com/Nutomic/mdBook.git`

`cd mdBook`

`git switch localization`

## Third step: Compile and launch mdBook

`cargo build --release`

### Wait for the compiler to finish its work, then copy the compiled binary in the documentation directory:

`mv ~/mdBook/target/release/mdbook ~/misc/mdbook `

### Now that mdBook has been compiled, launch it:

`cd ~/misc/mdbook`
`./mdbook serve`

### Finally, open your favorite launcher and type:

`localhost:3000`



**and there's our beautiful documentation running locally.**
