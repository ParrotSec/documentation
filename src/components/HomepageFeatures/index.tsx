import React, { ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    id: 1,
    title: 'Introduction',
    Svg: require('@site/static/img/feature_images/download.svg').default,
    description: (
      <>
        Containing all the basic information on the Parrot project.
      </>
    ),
  },
  {
    id: 2,
    title: 'Installation',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Where it is shown how to install Parrot on your physical or virtual machine, create a boot device, docker, etc...
      </>
    ),
  },
  {
    id: 3,
    title: 'Virtualization',
    Svg: require('@site/static/img/feature_images/config.svg').default,
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
    Svg: require('@site/static/img/feature_images/troubleshooting.svg').default,
    description: (
      <>
        Here you will find the more technical aspects, some tips on how to configure some software, management of your system, etc...
      </>
    ),
  },
  {
    id: 5,
    title: 'Cloud',
    Svg: require('@site/static/img/feature_images/getstarted.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    id: 6,
    title: 'USB',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    id: 7,
    title: 'Troubleshooting',
    Svg: require('@site/static/img/feature_images/download.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    id: 8,
    title: 'Tools',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    id: 9,
    title: 'Mirrors',
    Svg: require('@site/static/img/feature_images/config.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({id, title, Svg, description}) {
  return (
    <div className="col col--3 card text--center shadow--lw margin--md">
      <div className="text--center">
        <Svg id={id} className={styles.featureSvg} role='img' />
      </div>
      <div className="text--center padding-horiz--xs">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.align)}>
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
        <div className="container padding-top--lg text--center">
          <div className="padding-horiz--md">
            <p>The documentation is a continuous Work In Progress (WIP), and <strong>all Parrot users</strong> are invited to contribute to the creation and translation process of this portal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
