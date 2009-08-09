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
	name: 'capacitate',
	'works': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate]();
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},120);
	},
	'works with threshold': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate](30);
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},40);
	}
});
