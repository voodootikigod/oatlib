//= require <dom/reference>
o.dom.insert_after = function (target,payload) {
	var parent_node = target.parentNode;
	return parent_node.lastChild === target && parent_node.appendChild(payload) || parent_node.insertBefore(payload,target.nextSibling);
};
