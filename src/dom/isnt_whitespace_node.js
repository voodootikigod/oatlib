//= require <dom/reference>
o.dom.isnt_whitespace_node = function (node) {
	return node.nodeType !== 3 || node.nodeValue.trim() !== '';
};
