//= require <array>
//= require <inject>
$$_store(function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	return function () {
		return o[$array](arguments)[o[$inject]](memoBuilder(),iterator);
	};
},$injector);
