//= require <dom/reference>
//= require <curry>
//= require <dom/find>
$$_dom_find_preceding_sibling_or_self = $$_dom.find_preceding_sibling_or_self = $$_dom_find[o.curry](function (node) {
	return node.previousSibling;
});
