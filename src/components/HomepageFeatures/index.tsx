import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    id: 1,
    title: 'Introduction',
    url: '/introduction',
    Svg: require('@site/static/img/feature_images/getstarted.svg').default,
    description: (
      <>
        Containing all the basic information on the Parrot project.
      </>
    ),
  },
  {
    id: 2,
    title: 'Installation',
    url: '/installation/',
    Svg: require('@site/static/img/feature_images/installation.svg').default,
    description: (
      <>
        Where it is shown how to install Parrot on your physical or virtual
        machine, create a boot device, Docker, etc...
      </>
    ),
  },
  {
    id: 3,
    title: 'Virtualization',
    url: '/category/virtualization/',
    Svg: require('@site/static/img/feature_images/virtualization.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    id: 4,
    title: 'Configuration',
    url: '/category/configuration',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Find the more technical aspects, some tips on how to configure 
        some software, management of your system, etc...
      </>
    ),
  },
  {
    id: 5,
    title: 'Cloud',
    url: '/category/cloud',
    Svg: require('@site/static/img/feature_images/cloud.svg').default,
    description: (
      <>
        Install ParrotOS on your servers, or use it as a Docker container.
      </>
    ),
  },
  {
    id: 6,
    title: 'USB',
    url: '/category/usb',
    Svg: require('@site/static/img/feature_images/usb.svg').default,
    description: (
      <>
        Create a bootable USB with ParrotOS inside, install the OS or 
        try it in live mode.
      </>
    ),
  },
  {
    id: 7,
    title: 'Troubleshooting',
    url: '/category/troubleshooting',
    Svg: require('@site/static/img/feature_images/troubleshooting.svg').default,
    description: (
      <>
        Here there will be guides or tutorials to solve some possible
        problems that an inexperienced user might face.
      </>
    ),
  },
  {
    id: 8,
    title: 'Tools',
    url: '/category/tools',
    Svg: require('@site/static/img/feature_images/tools.svg').default,
    description: (
      <>
        This section contains some information on some of the software most
        used or developed by the Parrot team.
      </>
    ),
  },
  {
    id: 9,
    title: 'Mirrors',
    url: '/mirrors/mirrors-list',
    Svg: require('@site/static/img/feature_images/mirrors.svg').default,
    description: (
      <>
        The software in the Parrot archive is delivered in form of deb packages, 
        and these packages are served through a vast network of mirror servers.
      </>
    ),
  },
];

function Feature({title, Svg, description, url}) {
  return (
    <div className="col col--3 card text--center shadow--md margin--md">
      <Link to={url} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className="text--center padding-vert--md">
          <Svg className={styles.featureSvg} role='img' />
        </div>
        <div className="text--center padding-horiz--xs">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.align)}>
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
        <div className="container__items--center padding-top--lg text--center">
          <div className="padding-horiz--md">
            <p>
              The documentation is a continuous Work In Progress (WIP), 
              and <strong>all Parrot users</strong> are invited to 
              contribute to the creation and translation process of this portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures