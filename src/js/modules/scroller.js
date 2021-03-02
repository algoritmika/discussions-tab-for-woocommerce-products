const scroller = {
	init: function () {
		jQuery('body').on('alg_dtwp_comments_loaded', function () {
			scroller.scrollByAnchor();
		});
		scroller.scrollByAnchor();
		window.onhashchange = function () {
			scroller.scrollByAnchor();
		}
		scroller.activateDiscussionsTab();
	},
	activateDiscussionsTab: function () {
		let hash = window.location.hash;
		if ( hash.toLowerCase().indexOf( alg_dtwp.commentLink + '-' ) >= 0 || hash === '#' + alg_dtwp.tabID || hash === '#tab-' + alg_dtwp.tabID ) {
			let alg_dtwp_tab = alg_dtwp.tabID;
			let discussionsTabA = jQuery('#tab-title-' + alg_dtwp_tab + ' a');
			if (discussionsTabA.length) {
				discussionsTabA.trigger('click');
			}
		}
	},
	scrollByAnchor: function () {
		let currentURL = window.location.href;
		var target = jQuery('a[href*="' + currentURL + '"]');
		if (window.location.hash.length && target.length) {
			const element = target.closest('li')[0];
			const offset = 130;
			const topPos = element.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({
				top: topPos,
				behavior: 'smooth'
			});
		}
	}
}
module.exports = scroller;