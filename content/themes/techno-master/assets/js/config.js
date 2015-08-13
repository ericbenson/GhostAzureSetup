window.techno.config = {

		logo: 'fa-soccer-ball-o',
		author: {
				social: [
					{
						href: 'https://github.com/ericbenson',
					  icon: 'fa-github',
						title: 'Github'
					},
					{
						href: 'https://twitter.com/',
					  icon: 'fa-twitter',
						title: 'Twitter'
					},
					{
						href: 'https://linkedin.com/in/ericnbenson',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{
						href: 'mailto:eric.n.benson@gmail.com',
					  icon: 'fa-envelope',
						title: 'Email'
					}
			]
		},
		disqus: {
				shortname: '[YOUR DISQUS SHORTNAME]'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: '', text: 'Home'},
				{ route: techno.baseUrl + '/about', text: 'About'},
				{ route: techno.baseUrl + '/projects', text: 'Projects'}
		]
};
