import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	
	return (
		<div className="container">
			<div className="padding-vert--lg text--center">
				<h1 className="hero__title">{siteConfig.title}</h1>
			</div>
			<div className="row">
			<div className="col col--9 hero__subtitle text--center" style={{ margin: '0 auto' }}>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--outline button--secondary button--lg"
						to="docs/introduction/what-is-parrot">
						Get Started
					</Link>
				</div>
			</div>
			{/*
			<div className="col col--5">
				<div className="card__image margin--md">
					<img
						src={useBaseUrl(`img/${siteConfig.customFields.wallpaper}`)}
					/>
				</div>
			</div>
			*/}
			</div>
		</div>
	);
}

export default HomepageHeader