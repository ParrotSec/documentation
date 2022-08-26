# ParrotOS Documentation

This documentation was built with Docusaurus v2 and modified in the style of ParrotOS. It is continuously WIP and will be updated in order to make this side of the Parrot project better.

We use Docker/Podman for development, testing and deployment.

### Build and start the Docker image

```
$ docker build --target development -t parrot-documentation .
$ docker run --rm -ti -p 3000:3000 parrot-documentation
```
