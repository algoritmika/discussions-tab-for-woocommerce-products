(self.webpackChunk=self.webpackChunk||[]).push([["src_js_modules_labels-manager_js"],{858:a=>{var i={labels:alg_dtwp.possibleCommentTags,tips:alg_dtwp.tips,icons:alg_dtwp.icons,possible_wrappers:[".comment-text",".comment-body"],init:function(){this.add_label()},add_label:function(){i.labels.forEach((function(a){i.possible_wrappers.some((function(l){var s=jQuery("."+a).find(l+":first");if(s.length)return s.each((function(){var l=jQuery(this).find(".alg-dtwp-labels");l.length||(jQuery(this).append('<div class="alg-dtwp-labels"></div>'),l=jQuery(this).find(".alg-dtwp-labels")),l.append('<div class="alg-dtwp-label '+a+'-label"></div>');var s=l.find(".alg-dtwp-label."+a+"-label");i.icons[a]&&s.append('<i class="alg-dtwp-fa '+i.icons[a]+'" aria-hidden="true"></i>'),i.tips[a]&&(s.addClass("has-tip"),s.append('<div class="alg-dtwp-tip">'+i.tips[a]+"</div>"))})),!0}))}))}},l={init:function(){jQuery(document).ready((function(a){i.init(),a("body").on("alg_dtwp_comments_loaded",(function(){i.init()}))}))}};a.exports=l}}]);