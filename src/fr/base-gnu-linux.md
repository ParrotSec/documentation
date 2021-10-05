# Logiciel libre

Le \"logiciel libre\" est un logiciel qui respecte la liberté des utilisateurs et de leur communauté. D'une manière générale, cela signifie que les utilisateurs ont la liberté d'exécuter, de copier, de distribuer, d'étudier, de modifier et d'améliorer le logiciel. En d'autres termes, le \"logiciel libre\" (free software en anglais) est une question de liberté, et non de prix. Pour comprendre le concept, pensez à \"free\" comme à \"free speech\" (liberté d'expression), et non à \"free beer\" (bière gratuite hehe). En anglais, parfois à la place de \"free software\" on dit \"libre software\", en utilisant cet adjectif espagnol, dérivé de \"freedom\", pour montrer que l'on ne veut pas dire que le logiciel est gratuit.

Quatre sont les libertés qui définissent le \"Free Software\":

- **Liberté 0** : La liberté d'exécuter le programme comme on le souhaite, dans n'importe quel but.

- **Liberté 1** : La liberté d'étudier le fonctionnement du programme et de le modifier pour faire ce que l'on veut. L'accès au code source est une condition nécessaire pour cela.

- **Liberté 2** : La liberté de redistribuer des copies.

- **Liberté 3** : La liberté de distribuer des copies de ses versions modifiées à des tiers. Cela vous permet d'offrir à l'ensemble de la communauté la possibilité de bénéficier des modifications. L'accès au code source est une condition nécessaire pour cela aussi.

\
Un programme est un \"logiciel libre\" s'il accorde aux utilisateurs toutes ces libertés de manière appropriée. Sinon, il n'est pas libre. On dit alors qu'il s'agit d'un \"logiciel propriétaire\".

En guise de résumé, nous pourrions dire que :
- \"Free software\" ou \"logiciel gratuit\" ne signifie pas nécessairement qu'il est libre.
- Le \"logiciel libre\" offre quatre libertés fondamentales : la liberté d'exécuter un logiciel, la liberté de modifier et d'étudier son code, la liberté de redistribuer des copies de ce logiciel et la liberté de distribuer des copies de logiciels modifiés.


Vous pouvez lire ces informations au lien suivant : [https://www.gnu.org/philosophy/free-sw.fr.html](https://www.gnu.org/philosophy/free-sw.fr.html)

# Projet GNU

Débutons par un peu d'histoire... Nous sommes dans les années 70 du 20ème siècle, lorsqu'un homme nommé Richard Stallman commence à travailler au MIT (Massachusetts Institute of Technology). À cette époque, il était très courant de travailler avec des logiciels libres. Les programmeurs étaient libres de coopérer les uns avec les autres et le faisaient assez souvent. Qui plus est, même les sociétés informatiques distribuaient leurs logiciels librement. Tout cela a changé dans les années 80, et pratiquement tous les logiciels ont commencé à être distribués de manière privée, ce qui signifie que ces logiciels avaient des propriétaires qui interdisaient la coopération entre les utilisateurs. Pour cette raison, et face à ce qui semble être une injustice, Richard Stallman décide de créer le projet GNU en 1983. Etant en 1985 lorsque la Free Software Foundation a été fondée avec l'objectif de collecter des fonds pour aider à programmer GNU.

Le système d'exploitation GNU est un système complet de logiciels libres compatibles avec Unix. Le terme GNU vient de "GNU is not Unix". Il se prononce en une seule syllabe : Ñu. Richard Stallman a rédigé l'annonce initiale du projet GNU en septembre 1983. Une version étendue, appelée le Manifeste GNU [1], a été publiée en septembre 1985.

Le nom "GNU" a été choisi car il répondait à quelques exigences. Tout d'abord, c'était un acronyme récursif pour "GNU Is Not Unix". Deuxièmement, c'était un vrai mot. Enfin, il était amusant à dire (ou à chanter) [2].

Ils ont décidé de rendre le système d'exploitation compatible avec Unix parce que la conception générale était déjà testée et portable, et parce que la compatibilité permettait aux utilisateurs d'Unix de passer facilement d'Unix à GNU. 

Un système d'exploitation de type Unix comprend un noyau, des compilateurs, des éditeurs, des traitements de texte, des logiciels de messagerie, des interfaces graphiques, des bibliothèques, des jeux et bien d'autres choses. Pour tout cela, l'écriture d'un système d'exploitation complet demande beaucoup de travail.

Au début de 1990, les principaux composants avaient déjà été trouvés ou programmés, sauf un, le noyau.

<img src="./images/gnu.png" alt="GNU Project" width="50%"/>

[1]. [https://www.gnu.org/gnu/manifesto.html](https://www.gnu.org/gnu/manifesto.html) 

[2]. [http://www.poppyfields.net/poppy/songs/gnu.html](http://www.poppyfields.net/poppy/songs/gnu.html)


# Projet Linux

Retournons dans l'histoire, cette fois-ci en 1991. 

A cette époque, un étudiant finlandais en informatique nommé Linus Torvalds voulait créer un système d'exploitation similaire à minix (qu'il utilisait à l'université), mais qui fonctionnerait sur son nouvel ordinateur. avec processeur 80386. 

En utilisant le compilateur C de GNU, Linus Torvalds a rapidement eu une première version du noyau (kernel) capable de fonctionner sur son ordinateur. Le 25 août 1991, il annonce ce système sur Usenet, sur la liste comp.os.minix. Son projet a rapidement fait des adeptes et nombreux sont ceux qui l'ont rejoint, et ont commencé à développer pour ledit noyau. 

Linus a initialement publié son logiciel sous sa propre licence, bien qu'il ait finalement choisi une licence GNU GPL en 1992, en partie parce que l'outil C qu'il avait utilisé pour le compiler était également GPL. 

Le nom de Linux, pour ce noyau, a été pris quelques mois après sa publication, puisque Linus lui-même avait initialement voulu l'appeler "Freax". En fait, dans la première version du noyau, vous pouvez voir dans le makefile des traces de ce nom. Finalement, Ari Lemmke, qui était l'un des responsables du serveur FTP de l'université de technologie d'Helsinki, a placé les fichiers sur le serveur sous le projet "Linux" sans consulter Linus. Linus n'aimait pas ce nom, qu'il trouvait trop égocentrique ou égoïste. 

Il a finalement accepté le changement de nom et, longtemps après, lors d'une interview, Linus lui-même a déclaré que "c'était tout simplement le meilleur nom qui aurait pu être choisi" 

![tux](./images/tux.png)

# GNU/Linux

La FSF (GNU) développait un noyau appelé Hurd (toujours en cours de développement). Ce noyau se développait plus lentement qu'ils ne le pensaient. Avant que le noyau Linux ne soit publié, il a donc été adopté au sein du projet, de sorte que le nom correct du système d'exploitation n'est pas Linux, mais GNU/Linux.

De nos jours, lorsque les gens parlent de Linux, ils parlent en réalité de GNU/Linux [1].Le noyau en lui-même (seul) est inutile. Mais il est le composant qui permet au logiciel, et donc à l'utilisateur, de communiquer avec le matériel. Il faut plus qu'un noyau pour faire fonctionner un ordinateur. Il est nécessaire qu'il y ait certains programmes dans la partie utilisateur. Ces programmes peuvent être ou non sous licence GPL (GNU). 

[1]. [https://www.gnu.org/gnu/linux-and-gnu.en.html](https://www.gnu.org/gnu/linux-and-gnu.en.html)
