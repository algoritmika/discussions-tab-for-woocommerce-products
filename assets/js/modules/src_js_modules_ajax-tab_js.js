(self.webpackChunk=self.webpackChunk||[]).push([["src_js_modules_ajax-tab_js"],{782:t=>{var a={tabID:alg_dtwp.tabID,tab:null,contentCalled:!1,ajaxurl:alg_dtwp.ajaxurl,postID:alg_dtwp.postID,check:function(){var t=jQuery("#tab-title-"+a.tabID);a.tab=t,t.length&&jQuery("#tab-title-"+a.tabID).hasClass("active")&&(t.addClass("alg-dtwp-loading-tab"),a.contentCalled=!0,a.loadTabContent())},loadTabContent:function(){var t={action:"alg_dtwp_get_tab_content",post_id:a.postID};jQuery.post(a.ajaxurl,t,(function(t){t.success&&jQuery("#tab-"+a.tabID).html(t.data.content),a.tab.addClass("alg-dtwp-loaded"),setTimeout((function(){a.tab.removeClass("alg-dtwp-loaded"),a.tab.removeClass("alg-dtwp-loading-tab"),jQuery("body").trigger({type:"alg_dtwp_comments_loaded"})}),150)}))}},e={init:function(){jQuery("body").on("click",".wc-tabs li a, ul.tabs li a",(function(t){var e=null;e&&clearTimeout(e),e=setTimeout((function(){a.contentCalled||a.check()}),150)}))}};t.exports=e}}]);