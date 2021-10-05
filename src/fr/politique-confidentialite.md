# Politique de confidentialité #

NOTE : Cette politique est incomplète (elle ne couvre pas encore toute l'infrastructure du projet Parrot), nous espérons la terminer prochainement.

### Parrot OS

Le système d'exploitation Parrot n'inclut pas de trackers ou de télémétrie de l'équipe Parrot ou de ses partenaires, et nous ne suivons pas nos utilisateurs.

L'équipe de sécurité de Parrot fait de son mieux pour fournir un système totalement dépourvu de trackers et aucune donnée n'est collectée par nous auprès de nos utilisateurs, mais des programmes supplémentaires installés sur le système par l'utilisateur final peuvent modifier cette affirmation. Il appartient à l'utilisateur final de s'assurer que les programmes nouvellement installés ne possède pas leur propre télémétrie ou que celle-ci respecte les choix de l'utilisateur.

### Réseau de diffusion de contenu de Parrot

Que font réellement ces serveurs ? Quel type d'informations privées sont stockées ? Comment sont-elles stockées ? Et que se passe-t-il si un nœud de périphérie est cloné et analysé ? 

Les nœuds de périphérie n'hébergent pas les informations privées des utilisateurs, seuls nos serveurs maîtres hébergent les informations des utilisateurs.

Les serveurs de périphérie nous appartiennent, nous pouvons supprimer des serveurs, les migrer, en déployer de nouveaux, changer de fournisseur, etc. Nous pouvons forcer les utilisateurs d'un pays à rester à l'écart d'un nœud particulier et à transiter par le réseau Parrot à partir d'un nœud situé dans un autre pays si nous pensons que ces pays ou fournisseurs inspectent le trafic des utilisateurs.

Nous enregistrons les activités des utilisateurs à partir des journaux des serveurs Web et utilisons des analyseurs de journaux pour enquêter sur les activités inhabituelles (malveillantes) et repérer d'éventuelles intrusions ou cyberattaques.

Parfois, nous collectons des données statistiques sur l'utilisation de notre infrastructure (téléchargements, visites de sites Web, visiteurs uniques, distribution géographique, etc.) Ces données sont agrégées et ne contiennent pas d'informations personnelles sur les utilisateurs, si des données telle que les adresses IP et autres composants utiles pour identifier des utilisateurs spécifiques sont malgré tout présentes, elle sont supprimés avant l'agrégation des données.

Nous n'enregistrons aucune activités des utilisateurs sur les services comme les résolveurs DNS, pour respecter la vie privée des utilisateurs, et nous ne collectons pas d'informations sur les utilisateurs si nous n'avons pas de raison technique de les enregistrer.

Notre sysadmin est la seule personne autorisée à accéder aux serveurs et à traiter les logs, et aucun tiers n'a accès à ces données.

La seule information privée directement visible depuis "goaccess" est l'adresse ip des utilisateurs, mais les serveurs ont déjà des protections automatiques pour bannir les adresses ip malveillantes, Nous stockons les adresses ip temporairement en cas de cyberattaques contre notre infrastructure web.

Les données personnelles des utilisateurs ne sont pas stockées sur nos nœuds CDN de périphérie, de sorte que nous pouvons garder les données des utilisateurs aussi sûr que possible sur l'infrastructure centrale où les autorités ou des tiers ne peuvent pas les prendre sans notre approbation.

Nous supprimons périodiquement les journaux des serveurs lorsque nous sommes sûrs qu'aucune attaque n'a été reçue dans cette période de temps, et nous les déchiquetons pour la sécurité avant de redémarrer le service.

Lorsque nous congédions un serveur dédié ou un VPS, nous nous assurons de remplir le disque dur avec des données aléatoires pour rendre les données irrécupérables avant la suppression du service.

Nous n'avons jamais reçu de mandat depuis que nous avons commencé ce projet. Veuillez noter notre [warrant canary](<./warrant-canary.md>).

### Serveurs DNS OpenNIC du projet Parrot

Nous fournissons des résolveurs DNS gratuits pour le réseau OpenNIC. Ces serveurs ont des logs désactivés par défaut. 

Il y a un petit tampon de log pour des raisons techniques, permettant au système d'identifier et de bannir automatiquement les adresses IP abusant de ce dernier. 
Le log temporaire est juste un tampon qui garde un tas d'éléments récents, et les anciennes entrées disparaissent automatiquement au fur et à mesure que de nouvelles requêtes arrivent. 

Puisque les journaux DNS sont désactivés et que le système de prévention des abus est entièrement automatique, nous ne disposons pas de systèmes pour analyser manuellement ces journaux et nous n'effectuons pas d'analyse directe ou indirecte de l'utilisation des services DNS. 

Dernière mise à jour 25 avril 2019