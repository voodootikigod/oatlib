//= require <each>
$$_store(function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$inject,$$_array_prototype);
