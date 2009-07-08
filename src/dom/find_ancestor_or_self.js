//= require <dom/reference>
$$_dom_find_ancestor_or_self = $$_dom[$find_ancestor_or_self] = function (node,fn,grandparent) {
	// test each ancestor until one passes the test, return that one
	var found = $$null,
	test = grandparent ? function (node) {
		return node !== grandparent ? node[$parentNode] : $$null;
	} : function (node) {
		return node[$parentNode];
	};

	looking: do {
		if (fn(node)) {
			found = node;
			break looking;
		}
	} while (node = test(node))
	return found;
};
