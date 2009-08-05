test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	},
});
test({
	name: 'find_descendants',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<span></span><b></b><strong></strong><p></p>';
		var results = o.dom.find_descendants(tmp_div,function (node) {
			return node.tagName === 'DIV' || node.tagName === 'B' || node.tagName === 'STRONG';
		});
		Assert.areSame(3,results.length);
	}
});
