//= require <curry>
//= require <filter>
//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/contains>
(function () {

 	var filter_delegates_by_descendant,
	consider_delegates_for_node,
	delegates,
	garbage_collect_delegates_by_type,
	delegate_handler,
	add_delegate_handler_by_type,
	get_or_create_array_of_delegates_by_type;


	filter_delegates_by_descendant = $$_dom_event[$filter_delegates_by_descendant] = function (delegates,descendant) {
		return $$_filter(delegates,function (delegate) {
			return $$_dom_contains(delegate[$ancestor],descendant);
		});
	};
	consider_delegates_for_node = $$_dom_event[$consider_delegates_for_node] = function (delegates,node,e,oe) {
		var filtered_delegates = delegates[$$_o$filter](function (delegate) {
			if (!delegate[$test](node,e,oe)) {
				return $$true;
			} else {
				oe[$delegate_target] = node;
				delegate[$action](e,oe);
				return $$false;
			}
		}),
		new_node = node[$parentNode];
		return filtered_delegates[$length] && new_node ? arguments[$callee](filtered_delegates,new_node,e,oe) : $$true;
	};
	delegates = $$_dom_event[$delegates] = $$_dom_event[$delegates] = [];
	garbage_collect_delegates_by_type = function (type) {
		return delegates[type] = delegates[type][$$_o$filter](function (delegate) {
			return $ancestor in delegate;
		});
	};
 	delegate_handler = $$_dom_event[$delegate_handler] = function (type,e,oe) {
		garbage_collect_delegates_by_type(type);
		var delegates_by_type = delegates[type],
		current_target = oe[$get_target](),
		delegates_by_descendant;
		delegates_by_descendant = filter_delegates_by_descendant(delegates_by_type,current_target);
		consider_delegates_for_node(delegates_by_descendant,current_target,e,oe);
	};
	add_delegate_handler_by_type = $$_dom_event[$add_delegate_handler_by_type] = function (type) {
		$$_dom_event_add_listener($$document[$body],type,delegate_handler[$$_o$curry](type));
	};
	get_or_create_array_of_delegates_by_type = $$_dom_event[$get_or_create_array_of_delegates_by_type] = function (type) {
		if (!delegates[$hasOwnProperty](type)) {
			add_delegate_handler_by_type(type);
			delegates[type] = [];
		}
		return delegates[type];
	};
	$$_dom_event_delegate = $$_dom_event[$delegate] = function (options) {
		var type = options[$type],
		array_of_delegates = get_or_create_array_of_delegates_by_type(type),
		delegate_object = {
			test: options[$test],
			action: options[$action],
			ancestor: options[$ancestor]
		};
		array_of_delegates[$push](delegate_object);
		return function () {
			delete delegate_object[$ancestor];
		};
	};
})();
