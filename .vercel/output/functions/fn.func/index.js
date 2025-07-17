globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// .svelte-kit/output/server/chunks/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
var is_array, array_from, define_property, get_descriptor, noop;
var init_equality = __esm({
  ".svelte-kit/output/server/chunks/equality.js"() {
    is_array = Array.isArray;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    noop = () => {
    };
  }
});

// .svelte-kit/output/server/chunks/index3.js
function effect_update_depth_exceeded() {
  {
    throw new Error("effect_update_depth_exceeded");
  }
}
function hydration_failed() {
  {
    throw new Error("hydration_failed");
  }
}
function state_unsafe_local_read() {
  {
    throw new Error("state_unsafe_local_read");
  }
}
function state_unsafe_mutation() {
  {
    throw new Error("state_unsafe_mutation");
  }
}
function source(v) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  var _a;
  const s2 = source(initial_value);
  if (!immutable) {
    s2.equals = safe_equals;
  }
  if (component_context !== null && component_context.l !== null) {
    ((_a = component_context.l).s ?? (_a.s = [])).push(s2);
  }
  return s2;
}
function set(source2, value) {
  if (active_reaction !== null && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    source2.v = value;
    source2.version = increment_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0) {
      if (new_deps !== null && new_deps.includes(source2)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      } else {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function destroy_derived_children(derived) {
  var children = derived.children;
  if (children !== null) {
    derived.children = null;
    for (var i = 0; i < children.length; i += 1) {
      var child = children[i];
      if ((child.f & DERIVED) !== 0) {
        destroy_derived(
          /** @type {Derived} */
          child
        );
      } else {
        destroy_effect(
          /** @type {Effect} */
          child
        );
      }
    }
  }
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(derived.parent);
  {
    try {
      destroy_derived_children(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.version = increment_version();
  }
}
function destroy_derived(signal) {
  destroy_derived_children(signal);
  remove_reactions(signal, 0);
  set_signal_status(signal, DESTROYED);
  signal.v = signal.children = signal.deps = signal.ctx = signal.reactions = null;
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_HAS_DERIVED) === 0;
  if (!inert && !is_root && push2) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.children ?? (derived.children = [])).push(effect2);
    }
  }
  return effect2;
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown = effect2.teardown;
  if (teardown !== null) {
    const previous_reaction = active_reaction;
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_deriveds(signal) {
  var deriveds = signal.deriveds;
  if (deriveds !== null) {
    signal.deriveds = null;
    for (var i = 0; i < deriveds.length; i += 1) {
      destroy_derived(deriveds[i]);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next;
    }
    removed = true;
  }
  destroy_effect_deriveds(effect2);
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.parent = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function flush_tasks() {
}
function lifecycle_outside_component(name) {
  {
    throw new Error("lifecycle_outside_component");
  }
}
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect2) {
  active_effect = effect2;
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function increment_version() {
  return ++current_version;
}
function is_runes() {
  return component_context !== null && component_context.l === null;
}
function check_dirtiness(reaction) {
  var _a;
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      if ((flags & DISCONNECTED) !== 0) {
        for (i = 0; i < dependencies.length; i++) {
          ((_a = dependencies[i]).reactions ?? (_a.reactions = [])).push(reaction);
        }
        reaction.f ^= DISCONNECTED;
      }
      for (i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (is_unowned && active_effect !== null && !skip_reaction && !dependency?.reactions?.includes(reaction)) {
          (dependency.reactions ?? (dependency.reactions = [])).push(reaction);
        }
        if (dependency.version > reaction.version) {
          return true;
        }
      }
    }
    if (!is_unowned) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function handle_error(error, effect2, component_context2) {
  {
    throw error;
  }
}
function update_reaction(reaction) {
  var _a;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
  derived_sources = null;
  component_context = reaction.ctx;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          ((_a = deps[i]).reactions ?? (_a.reactions = [])).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    component_context = previous_component_context;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index5 = reactions.indexOf(signal);
    if (index5 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index5] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  active_effect = effect2;
  try {
    destroy_effect_deriveds(effect2);
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown = update_reaction(effect2);
    effect2.teardown = typeof teardown === "function" ? teardown : null;
    effect2.version = current_version;
    if (DEV) ;
  } catch (error) {
    handle_error(
      /** @type {Error} */
      error
    );
  } finally {
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    {
      effect_update_depth_exceeded();
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i = 0; i < length; i++) {
      var effect2 = root_effects[i];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && check_dirtiness(effect2)) {
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
        if (effect2.teardown === null) {
          unlink_effect(effect2);
        } else {
          effect2.fn = null;
        }
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued) {
    flush_count = 0;
  }
}
function schedule_effect(signal) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued) {
      is_micro_task_queued = true;
      queueMicrotask(process_deferred);
    }
  }
  var effect2 = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else if (check_dirtiness(current_effect)) {
          update_effect(current_effect);
        }
        var child = current_effect.first;
        if (child !== null) {
          current_effect = child;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    var sibling = current_effect.next;
    if (sibling === null) {
      let parent = current_effect.parent;
      while (parent !== null) {
        if (effect2 === parent) {
          break main_loop;
        }
        var parent_sibling = parent.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent = parent.parent;
      }
    }
    current_effect = sibling;
  }
  for (var i = 0; i < effects.length; i++) {
    child = effects[i];
    collected_effects.push(child);
    process_effects(child, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    if (DEV) ;
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (is_derived && (flags & DESTROYED) !== 0) {
    var value = execute_derived(
      /** @type {Derived} */
      signal
    );
    destroy_derived(
      /** @type {Derived} */
      signal
    );
    return value;
  }
  if (active_reaction !== null) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
      skipped_deps++;
    } else if (new_deps === null) {
      new_deps = [signal];
    } else {
      new_deps.push(signal);
    }
    if (untracked_writes !== null && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0 && untracked_writes.includes(signal)) {
      set_signal_status(active_effect, DIRTY);
      schedule_effect(active_effect);
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && !parent.deriveds?.includes(derived)) {
      (parent.deriveds ?? (parent.deriveds = [])).push(derived);
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  return signal.v;
}
function untrack(fn) {
  const previous_reaction = active_reaction;
  try {
    active_reaction = null;
    return fn();
  } finally {
    active_reaction = previous_reaction;
  }
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function push$1(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (!runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
}
function pop$1(component5) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context) {
  get_or_init_context_map().set(key2, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ?? (current_component.c = new Map(get_parent_context(current_component) || void 0));
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component5 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component5.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component5.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function copy_payload({ out, css, head: head2 }) {
  return {
    out,
    css: new Set(css),
    head: {
      title: head2.title,
      out: head2.out
    }
  };
}
function assign_payload(p1, p2) {
  p1.out = p2.out;
  p1.head = p2.head;
}
function render(component5, options2 = {}) {
  const payload = { out: "", css: /* @__PURE__ */ new Set(), head: { title: "", out: "" } };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options2.context) {
    push();
    current_component.c = options2.context;
  }
  component5(payload, options2.props ?? {}, {}, {});
  if (options2.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash: hash2, code } of payload.css) {
    head2 += `<style id="${hash2}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out += BLOCK_OPEN;
  fn(head_payload);
  head_payload.out += BLOCK_CLOSE;
}
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function bind_props(props_parent, props_now) {
  for (const key2 in props_now) {
    const initial_value = props_parent[key2];
    const value = props_now[key2];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key2)?.set) {
      props_parent[key2] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
var DEV, DERIVED, EFFECT, RENDER_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, UNOWNED, DISCONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, HEAD_EFFECT, EFFECT_HAS_DERIVED, HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, $window, first_child_getter, next_sibling_getter, FLUSH_MICROTASK, FLUSH_SYNC, scheduler_mode, is_micro_task_queued, is_flushing_effect, queued_root_effects, flush_count, active_reaction, active_effect, derived_sources, new_deps, skipped_deps, untracked_writes, current_version, skip_reaction, component_context, STATUS_MASK, ATTR_REGEX, CONTENT_REGEX, current_component, BLOCK_OPEN, BLOCK_CLOSE, on_destroy, replacements;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    init_equality();
    DEV = false;
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    UNOWNED = 1 << 7;
    DISCONNECTED = 1 << 8;
    CLEAN = 1 << 9;
    DIRTY = 1 << 10;
    MAYBE_DIRTY = 1 << 11;
    INERT = 1 << 12;
    DESTROYED = 1 << 13;
    EFFECT_RAN = 1 << 14;
    HEAD_EFFECT = 1 << 18;
    EFFECT_HAS_DERIVED = 1 << 19;
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    FLUSH_MICROTASK = 0;
    FLUSH_SYNC = 1;
    scheduler_mode = FLUSH_MICROTASK;
    is_micro_task_queued = false;
    is_flushing_effect = false;
    queued_root_effects = [];
    flush_count = 0;
    active_reaction = null;
    active_effect = null;
    derived_sources = null;
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    current_version = 0;
    skip_reaction = false;
    component_context = null;
    STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    current_component = null;
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    on_destroy = [];
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
  }
});

// .svelte-kit/output/server/chunks/index.js
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  throw new Redirect(
    // @ts-ignore
    status,
    location.toString()
  );
}
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
var HttpError, Redirect, SvelteKitError, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, tracked_url_properties, DATA_SUFFIX, HTML_DATA_SUFFIX, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    internal = new URL("sveltekit-internal://");
    tracked_url_properties = /** @type {const} */
    [
      "href",
      "pathname",
      "search",
      "toString",
      "toJSON"
    ];
    DATA_SUFFIX = "/__data.json";
    HTML_DATA_SUFFIX = ".html__data.json";
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_equality();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize3;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    function serialize3(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@supabase/ssr/dist/module/version.js
var init_version = __esm({
  "node_modules/@supabase/ssr/dist/module/version.js"() {
  }
});

// node_modules/@supabase/ssr/dist/module/utils/helpers.js
var import_cookie2;
var init_helpers = __esm({
  "node_modules/@supabase/ssr/dist/module/utils/helpers.js"() {
    import_cookie2 = __toESM(require_cookie());
  }
});

// node_modules/@supabase/ssr/dist/module/utils/constants.js
var DEFAULT_COOKIE_OPTIONS;
var init_constants = __esm({
  "node_modules/@supabase/ssr/dist/module/utils/constants.js"() {
    DEFAULT_COOKIE_OPTIONS = {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      // https://developer.chrome.com/blog/cookie-max-age-expires
      // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
      maxAge: 400 * 24 * 60 * 60
    };
  }
});

// node_modules/@supabase/ssr/dist/module/utils/chunker.js
var init_chunker = __esm({
  "node_modules/@supabase/ssr/dist/module/utils/chunker.js"() {
  }
});

// node_modules/@supabase/ssr/dist/module/utils/base64url.js
var TO_BASE64URL, IGNORE_BASE64URL, FROM_BASE64URL;
var init_base64url = __esm({
  "node_modules/@supabase/ssr/dist/module/utils/base64url.js"() {
    TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
    IGNORE_BASE64URL = " 	\n\r=".split("");
    FROM_BASE64URL = (() => {
      const charMap = new Array(128);
      for (let i = 0; i < charMap.length; i += 1) {
        charMap[i] = -1;
      }
      for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
        charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
      }
      for (let i = 0; i < TO_BASE64URL.length; i += 1) {
        charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
      }
      return charMap;
    })();
  }
});

// node_modules/@supabase/ssr/dist/module/utils/index.js
var init_utils = __esm({
  "node_modules/@supabase/ssr/dist/module/utils/index.js"() {
    init_helpers();
    init_constants();
    init_chunker();
    init_base64url();
  }
});

// node_modules/@supabase/ssr/dist/module/cookies.js
var import_cookie3;
var init_cookies = __esm({
  "node_modules/@supabase/ssr/dist/module/cookies.js"() {
    import_cookie3 = __toESM(require_cookie());
    init_utils();
  }
});

// node_modules/@supabase/ssr/dist/module/createBrowserClient.js
var init_createBrowserClient = __esm({
  "node_modules/@supabase/ssr/dist/module/createBrowserClient.js"() {
    init_version();
    init_utils();
    init_cookies();
  }
});

// node_modules/@supabase/ssr/dist/module/createServerClient.js
var init_createServerClient = __esm({
  "node_modules/@supabase/ssr/dist/module/createServerClient.js"() {
    init_version();
    init_cookies();
  }
});

// node_modules/@supabase/ssr/dist/module/types.js
var init_types = __esm({
  "node_modules/@supabase/ssr/dist/module/types.js"() {
  }
});

// node_modules/@supabase/ssr/dist/module/index.js
var init_module = __esm({
  "node_modules/@supabase/ssr/dist/module/index.js"() {
    init_createBrowserClient();
    init_createServerClient();
    init_types();
    init_utils();
  }
});

// .svelte-kit/output/server/chunks/i18n-util.js
var locales, isLocale, loadedLocales, loadedFormatters;
var init_i18n_util = __esm({
  ".svelte-kit/output/server/chunks/i18n-util.js"() {
    locales = [
      "en",
      "ru"
    ];
    isLocale = (locale) => locales.includes(locale);
    loadedLocales = {};
    loadedFormatters = {};
  }
});

// .svelte-kit/output/server/entries/pages/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: () => load
});
function i18nObject(locale, translations, formatters = {}) {
  return createProxy(translations, getTranslateInstance(locale, formatters));
}
function readonly(store) {
  return {
    // @ts-ignore
    subscribe: store.subscribe.bind(store)
  };
}
var getFallbackProxy, removeEmptyValues, trimAllValues, parseArgumentPart, isBasicPluralPart, parsePluralPart, REGEX_SWITCH_CASE, parseCases, REGEX_BRACKETS_SPLIT, removeOuterBrackets, parseRawText, applyFormatters, getPlural, REGEX_PLURAL_VALUE_INJECTION, applyArguments, translate, getPartsFromString, getTranslateInstance, wrap, createProxy, initI18nSvelte, load;
var init_layout_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.ts.js"() {
    init_module();
    init_index2();
    init_i18n_util();
    getFallbackProxy = () => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new Proxy(Object.assign(() => "", {}), {
        get: (_target, key2) => key2 === "length" ? 0 : getFallbackProxy()
      })
    );
    removeEmptyValues = (object) => Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(object).map(([key2, value]) => key2 !== "i" && value && value != "0" && [key2, value]).filter(Boolean)
    );
    trimAllValues = (part) => Object.fromEntries(
      Object.keys(part).map((key2) => {
        const val = part[key2];
        return [
          key2,
          Array.isArray(val) ? val.map((v) => v?.trim()) : val === !!val ? val : val?.trim()
        ];
      })
    );
    parseArgumentPart = (text2) => {
      const [keyPart = "", ...formatterKeys] = text2.split("|");
      const [keyWithoutType = "", type] = keyPart.split(":");
      const [key2, isOptional] = keyWithoutType.split("?");
      return { k: key2, i: type, n: isOptional === "", f: formatterKeys };
    };
    isBasicPluralPart = (part) => !!(part.o || part.r);
    parsePluralPart = (content, lastAccessor) => {
      let [key2, values] = content.split(":");
      if (!values) {
        values = key2;
        key2 = lastAccessor;
      }
      const entries = values.split("|");
      const [zero, one, two, few, many, rest] = entries;
      const nrOfEntries = entries.filter((entry) => entry !== void 0).length;
      if (nrOfEntries === 1) {
        return { k: key2, r: zero };
      }
      if (nrOfEntries === 2) {
        return { k: key2, o: zero, r: one };
      }
      if (nrOfEntries === 3) {
        return { k: key2, z: zero, o: one, r: two };
      }
      return { k: key2, z: zero, o: one, t: two, f: few, m: many, r: rest };
    };
    REGEX_SWITCH_CASE = /^\{.*\}$/;
    parseCases = (text2) => Object.fromEntries(
      removeOuterBrackets(text2).split(",").map((part) => part.split(":")).reduce(
        (accumulator, entry) => {
          if (entry.length === 2) {
            return [...accumulator, entry.map((entry2) => entry2.trim())];
          }
          accumulator[accumulator.length - 1][1] += "," + entry[0];
          return accumulator;
        },
        []
      )
    );
    REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
    removeOuterBrackets = (text2) => text2.substring(1, text2.length - 1);
    parseRawText = (rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
      if (!part.match(REGEX_BRACKETS_SPLIT)) {
        return part;
      }
      const content = removeOuterBrackets(part);
      if (content.startsWith("{")) {
        return parsePluralPart(removeOuterBrackets(content), lastKey);
      }
      const parsedPart = parseArgumentPart(content);
      lastKey = parsedPart.k || lastKey;
      !firstKey && (firstKey = lastKey);
      return parsedPart;
    }).map((part) => {
      if (typeof part === "string")
        return part;
      if (!part.k)
        part.k = firstKey || "0";
      const trimmed = trimAllValues(part);
      return optimize ? removeEmptyValues(trimmed) : trimmed;
    });
    applyFormatters = (formatters, formatterKeys, initialValue) => formatterKeys.reduce(
      (value, formatterKey) => (formatterKey.match(REGEX_SWITCH_CASE) ? ((cases) => cases[value] ?? cases["*"])(parseCases(formatterKey)) : formatters[formatterKey]?.(value)) ?? value,
      initialValue
    );
    getPlural = (pluralRules, { z, o, t, f, m, r }, value) => {
      switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
        case "zero":
          return z;
        case "one":
          return o;
        case "two":
          return t;
        case "few":
          return f ?? r;
        case "many":
          return m ?? r;
        default:
          return r;
      }
    };
    REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
    applyArguments = (textParts, pluralRules, formatters, args) => textParts.map((part) => {
      if (typeof part === "string") {
        return part;
      }
      const { k: key2 = "0", f: formatterKeys = [] } = part;
      const value = args[key2];
      if (isBasicPluralPart(part)) {
        return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
      }
      const formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
      return ("" + (formattedValue ?? "")).trim();
    }).join("");
    translate = (textParts, pluralRules, formatters, args) => {
      const firstArg = args[0];
      const isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
      const transformedArgs = args.length === 1 && isObject ? firstArg : args;
      return applyArguments(textParts, pluralRules, formatters, transformedArgs);
    };
    getPartsFromString = (cache, text2) => cache[text2] || (cache[text2] = parseRawText(text2));
    getTranslateInstance = (locale, formatters) => {
      const cache = {};
      const pluralRules = new Intl.PluralRules(locale);
      return (text2, ...args) => translate(getPartsFromString(cache, text2), pluralRules, formatters, args);
    };
    wrap = (proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(
      Object.defineProperty(() => "", "name", { writable: true }),
      proxyObject
    );
    createProxy = (proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
      get: (target, key2) => {
        if (key2 === Symbol.iterator)
          return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
        return createProxy(target[key2], translateFn);
      }
    });
    initI18nSvelte = (translations, formatters = {}) => {
      const _locale = writable();
      const _LL = writable(getFallbackProxy());
      const locale = readonly(_locale);
      const LL = new Proxy({}, {
        get: (_target, key2) => key2 === "subscribe" ? _LL.subscribe : _LL[key2]
      });
      const setLocale = (newLocale) => {
        _locale.set(newLocale);
        _LL.set(i18nObject(newLocale, translations[newLocale], formatters[newLocale]));
      };
      return {
        locale,
        LL,
        setLocale
      };
    };
    initI18nSvelte(loadedLocales, loadedFormatters);
    load = async ({ data, depends }) => {
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
  }
});

// .svelte-kit/output/server/chunks/client.js
function get2(key2, parse3 = JSON.parse) {
  try {
    return parse3(sessionStorage[key2]);
  } catch {
  }
}
var SNAPSHOT_KEY, SCROLL_KEY;
var init_client = __esm({
  ".svelte-kit/output/server/chunks/client.js"() {
    init_exports();
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    get2(SCROLL_KEY) ?? {};
    get2(SNAPSHOT_KEY) ?? {};
  }
});

// .svelte-kit/output/server/chunks/socialLinks.js
var socialLinks;
var init_socialLinks = __esm({
  ".svelte-kit/output/server/chunks/socialLinks.js"() {
    socialLinks = [
      {
        title: "Instagram",
        link: "https://www.instagram.com/",
        img: "instagram.png"
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/l.pl/",
        img: "facebook.png"
      },
      {
        title: "Youtube",
        link: "https://www.youtube.com/",
        img: "youtube.png"
      }
    ];
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function Faq($$payload) {
  const each_array = ensure_array_like(faqData);
  $$payload.out += `<section class="p-8"><div class="mt-12 rounded-lg bg-white p-4 py-8 shadow-xl"><h4 class="text-center lg:text-6xl font-bold uppercase tracking-widest text-black">FAQ</h4> <p class="mt-2 text-center text-sm text-gray-600">Here are some of the frequently asked questions</p> <div class="mt-12 space-y-12 px-2 xl:px-16"><a name="#faq"></a> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let faq = each_array[$$index_1];
    const each_array_1 = ensure_array_like(faq.answer);
    $$payload.out += `<div class="mt-4 flex"><div><div class="flex h-16 items-center border-l-4 border-black"><span class="px-4 text-4xl text-black font-graffity">Q.</span></div> <div class="flex h-16 items-center border-l-4 border-gray-400"><span class="px-4 text-4xl text-gray-400 font-graffity">A.</span></div></div> <div><div class="flex h-16 items-center"><span class="text-lg font-bold text-black">${escape_html(faq.question)}?</span></div> <div class="flex items-center py-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let answer = each_array_1[$$index];
      $$payload.out += `<p class="mb-1 text-gray-500">${escape_html(answer)}</p>`;
    }
    $$payload.out += `<!--]--></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function AntySystemsProject($$payload) {
  $$payload.out += `<section class="wrap-text md:my-40 lg:my-40 xl:my-40 svelte-buxzph"><div class="relative my-0 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out md:my-20 lg:my-20 xl:my-20"><h2 class="absolute -inset-y-60 z-0 text-center svelte-buxzph">Antisystem boardgames</h2> <div class="border-1 anty-systems relative z-10 max-w-2xl border-neutral-900 hover:border-yellow-400 svelte-buxzph"><div class="main svelte-buxzph"><h3 class="mb-2 text-4xl svelte-buxzph">It's more than just a boardgame</h3> <p class="description mb-1 svelte-buxzph">This educational board game is part of a series of board games dedicated to the various
					anti-systemic movements and cultures that have resulted from state systems.</p> <span class="mb-6 svelte-buxzph"><ins class="svelte-buxzph">Creation of</ins> <a class="text-yellow-400 underline svelte-buxzph" target="_blank" href="https://44games.vercel.app/">44Games</a>, by <a class="text-yellow-400 underline svelte-buxzph" href="#creator">Oleg Medvedev</a></span> <a href="https://anti-system.vercel.app/" class="text-tellow-500 inline-flex items-center font-semibold hover:text-yellow-400 md:mb-2 lg:mb-0 svelte-buxzph" title="read more" target="_blank">Learn More about antisystems boardgames <svg class="ml-2 h-4 w-4 svelte-buxzph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z" class="svelte-buxzph"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" class="svelte-buxzph"></path></svg></a></div></div></div></section>`;
}
function Header($$payload) {
  $$payload.out += `<nav class="bg-black nav-menu z-[100] svelte-1m2q69c"><a href="/" aria-current="page" class="navbar__brand-link w-nav-brand w--current z-[100] svelte-1m2q69c"><img src="images/logo.png" loading="lazy" alt="" class="scale-150 z-[52] relative pt-2"> <img src="images/navbar_spray_mini.png" loading="eager" alt="" class="navbar__brand-graffiti--static svelte-1m2q69c"></a> <div class="navbar-spray-border z-[100] svelte-1m2q69c"></div></nav>`;
}
function Footer($$payload) {
  const each_array = ensure_array_like(socialLinks);
  const each_array_1 = ensure_array_like(links);
  $$payload.out += `<footer class="section section--pink"><div class="w-container container"><div class="layout-grid footer-section"><div class="layout-grid footer-section__info"><div class="footer-section__heading-padding"><h1 class="footer-section__heading font-graffity text-white">Discover graffiti culture through a boardgame!</h1></div></div> <div id="w-node-_254794bc-da3b-3759-b40e-ad44158c5c42-7f558c4a" class="layout-grid sitemap"><div class="div-block-5"><div class="capitalise text-md font-bold text-white svelte-137a0is">Get Social</div></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { title, link } = each_array[$$index];
    $$payload.out += `<a${attr("href", link)} target="_blank" class="capitalise mt-2 text-md font-bold text-white hover:text-black svelte-137a0is">${escape_html(title)}</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="layout-grid sitemap"><div class="div-block-5"><div class="capitalise text-md font-bold text-white svelte-137a0is">Get About</div></div> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let { link, title } = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", link)} class="mt-2 capitalise text-md font-bold text-white hover:text-black svelte-137a0is">${escape_html(title)}</a>`;
  }
  $$payload.out += `<!--]--> <a href="/app" class="capitalise text-md mt-2 font-bold text-white hover:text-black svelte-137a0is">APP</a></div> <div id="footer_policies" class="layout-grid policies w-full svelte-137a0is"><a href="#" class="capitalise text-md font-bold text-white hover:text-black svelte-137a0is">Terms\xA0of Service</a> <a href="#" class="capitalise text-md font-bold text-white hover:text-black svelte-137a0is">Privacy Policy</a> <a href="#" class="capitalise text-md font-bold text-white hover:text-black svelte-137a0is">Shipping Policy</a> <a href="#" class="capitalise text-md font-bold text-white hover:text-black svelte-137a0is">REfund Policy</a></div></div> <img src="images/logo_footer.svg" loading="lazy" sizes="(max-width: 479px) 281.976806640625px, (max-width: 767px) 59vw, (max-width: 1919px) 58vw, 576.7708740234375px" alt="" class="footer-logo scale-150 pt-20 svelte-137a0is"></div></footer>`;
}
function BackgroundVideo($$payload) {
  $$payload.out += `<div class="video-container svelte-1g26d5t"><video playsinline autoplay muted loop class="svelte-1g26d5t"><source src="/videos/big.mp4" type="video/mp4"></video></div>`;
}
function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="overflow-hidden w-full">`;
  Header($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----> `;
  AntySystemsProject($$payload);
  $$payload.out += `<!----> `;
  Faq($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----> `;
  SprayPointer($$payload);
  $$payload.out += `<!----> `;
  BackgroundVideo($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function SprayPointer($$payload, $$props) {
  push();
  $$payload.out += `<div class="spray svelte-yh1axi"></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  Layout($$payload, {
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
var faqData, links;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index3();
    init_client();
    init_socialLinks();
    faqData = [
      {
        question: `Who is this boardgame for?`,
        answer: [
          `The boardgame is suitable for both beginners who are just starting to explore graffiti and those already familiar with street culture. It\u2019s ideal for teenagers, adults, educators, artists, and anyone looking to enhance their visual thinking and learn more about global street art culture.`
        ]
      },
      {
        question: `What do the game expansions offer?`,
        answer: [
          `Each expansion focuses on a specific country or region and provides additional content for the base game. You\u2019ll discover unique local styles, iconic street artists, cultural nuances, and the visual language of the streets.`
        ]
      },
      {
        question: `What is the functionality of the web app?`,
        answer: [
          `The web application complements the boardgame by providing galleries of artists\u2019 works, a slang dictionary, and a graffiti glossary. It makes the learning experience more interactive and engaging.`
        ]
      },
      {
        question: `Is it just a boardgame or an educational product?`,
        answer: [
          `Graffiti Chronicles is more than just a board game. It\u2019s an educational and cultural project that develops visual perception, creative thinking, and an understanding of alternative forms of self-expression.`
        ]
      },
      {
        question: `How is the game connected to the Anty-Systems Fenomens project?`,
        answer: [
          `The game is part of the Anty-Systems Fenomens cultural initiative, which explores and promotes informal art, street subcultures, and creative expression outside the mainstream system.`
        ]
      }
    ];
    links = [
      {
        title: "ABOUT",
        link: "#about"
        // about
      },
      {
        title: "Extensions",
        link: "#extensions"
      },
      // {
      // 	title: 'SHOP',
      // 	link: '/'
      // },
      {
        title: "F.A.Q.",
        link: "#faq"
        // faq
      },
      {
        title: "CONTACT",
        link: "#contact"
        //
      }
      // {
      // 	title: 'APP',
      // 	link: '/app'
      // },
    ];
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets,
  universal: () => layout_ts_exports,
  universal_id: () => universal_id
});
var index, component_cache, component, universal_id, server_id, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_ts();
    init_layout_server_ts();
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    universal_id = "src/routes/+layout.ts";
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/nodes/0.DyQytZzS.js", "_app/immutable/chunks/entry.D08jMuLT.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/chunks/i18n-util.Df6rmA1y.js", "_app/immutable/chunks/disclose-version.89lgXlId.js", "_app/immutable/chunks/SprayPointer.svelte_svelte_type_style_lang.Cc3VEKr9.js", "_app/immutable/chunks/socialLinks.B5rld_JB.js"];
    stylesheets = ["_app/immutable/assets/SprayPointer.CPMVVUTT.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function Error$1($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ?? ($$store_subs = {}), "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ?? ($$store_subs = {}), "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
var getStores, page;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index3();
    init_client();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.BrpKpEWf.js", "_app/immutable/chunks/disclose-version.89lgXlId.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/chunks/store.hlkORDqC.js", "_app/immutable/chunks/entry.D08jMuLT.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/chunks/extensions.js
var artistExtensionData;
var init_extensions = __esm({
  ".svelte-kit/output/server/chunks/extensions.js"() {
    artistExtensionData = [
      {
        title: "Albany artists",
        country: "Albany",
        relise: "2025",
        cards: 80,
        price: "30",
        img: "images/extensions/albany.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "Lorem Ipsum jest tekstem stosowanym jako przyk\u0142adowy wype\u0142niacz w przemy\u015Ble poligraficznym. Zosta\u0142 po raz pierwszy u\u017Cyty w XV w. przez nieznanego drukarza do wype\u0142nienia tekstem pr\xF3bnej ksi\u0105\u017Cki.",
        del: "",
        features: []
      },
      {
        title: "Austria artists",
        country: "Austria",
        price: "24",
        relise: "2026",
        cards: 67,
        img: "images/extensions/austria.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Ukraine artists",
        country: "Ukraine",
        price: "20",
        relise: "2026",
        cards: 65,
        img: "images/extensions/ukraine.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Russia artists",
        country: "Russia",
        price: "40",
        relise: "2025",
        cards: 120,
        img: "images/extensions/russia.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Turkey artists",
        country: "Turkey",
        price: "30",
        relise: "2026",
        cards: 64,
        img: "images/extensions/turkey.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Sweden artists",
        country: "Sweden",
        price: "22",
        relise: "2028",
        cards: 60,
        img: "images/extensions/sweden.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Spain artists",
        country: "Spain",
        price: "30",
        relise: "2025",
        cards: 80,
        img: "images/extensions/spain.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Italy artists",
        country: "Italy",
        price: "30",
        relise: "2025",
        cards: 80,
        img: "images/extensions/italy.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Germany artists",
        country: "Germany",
        price: "50",
        relise: "2025",
        cards: 160,
        img: "images/extensions/germany.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Poland artists",
        country: "Poland",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "images/extensions/poland.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "France artists",
        country: "France",
        price: "50",
        relise: "2025",
        cards: 120,
        img: "images/extensions/france.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "England artists",
        country: "England",
        price: "30",
        relise: "2025",
        cards: 100,
        img: "images/extensions/england.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Croatia artists",
        country: "Croatia",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "images/extensions/croatia.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      },
      {
        title: "Czech artists",
        country: "Czech",
        price: "20",
        relise: "2025",
        cards: 60,
        img: "images/extensions/czech.png",
        artists: [
          { nickName: "lorem1", link: "/" },
          { nickName: "lorem2", link: "/" },
          { nickName: "lorem3", link: "/" },
          { nickName: "lorem4", link: "/" },
          { nickName: "lorem5", link: "/" },
          { nickName: "lorem6", link: "/" },
          { nickName: "lorem7", link: "/" }
        ],
        shortDesc: "",
        del: "",
        features: [
          {
            title: "Artists",
            subTitle: ""
          }
        ]
      }
    ];
  }
});

// .svelte-kit/output/server/entries/pages/extensions/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(artistExtensionData[0].features);
  const each_array_1 = ensure_array_like(artistExtensionData[0].artists);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Graffity Chronicles</title>`;
  });
  $$payload.out += `<section class="lg:-pt-10 mx-auto w-full px-5 lg:py-12 lg:pb-32 xl:py-12"><div class="mx-auto flex max-w-2xl flex-col justify-center border-2 border-yellow-400 bg-black p-4"><div class="mx-auto"><img class="scale-150"${attr("src", artistExtensionData[0].img)}${attr("alt", `${stringify(artistExtensionData[0].title)} banner`)}></div> <div class="group prose prose-xl"><div class="px-5 sm:px-0 sm:px-5 md:px-0"><div class="mb-6"><h1 class="font-graffity text-4xl">${escape_html(artistExtensionData[0].title)} (<span class="mr-6 text-xl font-bold">Relise</span> <span class="text-2xl text-yellow-400">${escape_html(artistExtensionData[0].relise)}</span>)</h1></div> <p class="mb-2 text-zinc-700">This extension includes cards with the art of graffiti artists from the country of <a href="/" target="_blank" class="font-bold text-yellow-600 underline">${escape_html(artistExtensionData[0].country)}</a>.</p> <h3 class="mb-3 text-xl text-yellow-400"><span>Cards</span> ${escape_html(artistExtensionData[0].cards)}</h3> <div class="border-light my-6 border-t"></div> <div class="productSpecifications h-full group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let data = each_array[$$index];
    $$payload.out += `<div class="mb-3 text-xl"><span>${escape_html(data.title)}</span> <h3 class="group-hover:text-yellow-400">${escape_html(artistExtensionData[0].subTitle)}</h3></div>`;
  }
  $$payload.out += `<!--]--> <div class="p primary-font"><div class="mt-6"><p><strong>${escape_html(artistExtensionData[0].shortDesc)}</strong></p></div></div> <p class="mb-10 text-zinc-700 group-hover:text-black">List of graffiti artists in this extension: <br> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let artist = each_array_1[$$index_1];
    $$payload.out += `<span class="mr-1"><a class="font-bold text-yellow-600 underline group-hover:text-black" target="_blank"${attr("href", artist.link)}>${escape_html(artist.nickName)},</a></span>`;
  }
  $$payload.out += `<!--]--></p> <div class="flex flex-row justify-between"><h3 class="font-dollar text-6xl text-yellow-400 group-hover:text-black">$ <span class="font-graffity text-yellow-400 group-hover:text-black">${escape_html(artistExtensionData[0].price)}</span></h3> <button class="font-graffity mb-6 bg-yellow-400 px-3 py-5 text-2xl text-black group-hover:bg-black group-hover:text-yellow-400">Buy Now</button></div></div></div></div></div></section>`;
  pop();
}
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/extensions/_page.svelte.js"() {
    init_index3();
    init_extensions();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    imports3 = ["_app/immutable/nodes/2.BGEXjRNJ.js", "_app/immutable/chunks/disclose-version.89lgXlId.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/chunks/SprayPointer.svelte_svelte_type_style_lang.Cc3VEKr9.js", "_app/immutable/chunks/extensions.bwNpBUK0.js"];
    stylesheets3 = ["_app/immutable/assets/SprayPointer.CPMVVUTT.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/__lang_lang__/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function StylesList($$payload, $$props) {
  push();
  let showFull = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(showFull ? styles : styles.slice(0, 3));
    $$payload2.out += `<section class="mb-20 md:py-20 lg:py-20 xl:py-20"><div class="graffity-list svelte-6jx830"><h2 class="title max-w-xl text-3xl lg:text-6xl svelte-6jx830">Types of Graffiti That Define the Art</h2> <ul class="svelte-6jx830"><li class="svelte-6jx830"><div class="index svelte-6jx830"><span></span></div> <div class="graffity-style max-w-sm svelte-6jx830"><span class="text-2xl">Title</span></div> <div class="short-desc svelte-6jx830"><span class="text-2xl">Short description</span></div> <div class="description max-w-md svelte-6jx830"><span class="text-2xl">Description</span></div> <div class="redirect-link svelte-6jx830"></div> <div class="hover-img svelte-6jx830"></div></li> <a name="styles" class="svelte-6jx830"></a> <!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let style = each_array[i];
      const each_array_1 = ensure_array_like(style.shortDesc);
      const each_array_2 = ensure_array_like(style.desc);
      $$payload2.out += `<li class="hover:delay-550 group transform border-b-2 border-neutral-700 hover:-translate-y-4 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out hover:ease-in-out svelte-6jx830"><div class="index group-hover:text-yellow-400 svelte-6jx830"><span class="font-dollar text-6xl">${escape_html(i + 1)}</span></div> <div class="graffity-style group-hover:text-yellow-400 svelte-6jx830"><h2 class="text-xl md:text-4xl lg:text-4xl xl:text-4xl svelte-6jx830"${attr("data-value", style.title)}>${escape_html(style.title)}</h2></div> <div class="short-desc svelte-6jx830"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let desc = each_array_1[$$index];
        $$payload2.out += `<p>${escape_html(desc)}</p>`;
      }
      $$payload2.out += `<!--]--></div> <div class="description lg:max-w-3xl svelte-6jx830"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let desc = each_array_2[$$index_1];
        $$payload2.out += `<p class="mb-1.5">${escape_html(desc)}</p>`;
      }
      $$payload2.out += `<!--]--></div> <div class="redirect-link svelte-6jx830"><a${attr("href", style.articleLink)} target="_blank" class="svelte-6jx830"><svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none" name="iconArrow" xmlns="http://www.w3.org/2000/svg" class="svelte-6jx830"><path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path><path d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z" fill="currentColor"></path><path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z" fill="currentColor"></path></svg></a></div> <div class="hover-img svelte-6jx830"><img${attr("src", `/images/styles/${stringify(style.example)}`)}${attr("alt", `Example of a ${stringify(style.title)} style graffiti`)} class="img-fluid svelte-6jx830"></div></li>`;
    }
    $$payload2.out += `<!--]--></ul></div> <div class="flex items-center justify-center">`;
    ShowMoreDataBtn($$payload2, {
      get showFull() {
        return showFull;
      },
      set showFull($$value) {
        showFull = $$value;
        $$settled = false;
      },
      link: "#styles",
      title: "Styles"
    });
    $$payload2.out += `<!----></div></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function Hero($$payload) {
  const panels = [
    {
      title: "Styles",
      img: "styles.jpg",
      icon: "",
      link: "styles"
    },
    {
      title: "Artists",
      img: "artist.jpg",
      icon: "",
      link: "artists"
    },
    {
      title: "Pieces",
      img: "pieces.jpg",
      icon: "",
      link: "pieces"
    },
    {
      title: "Slang",
      img: "slang.jpg",
      icon: "",
      link: "slang"
    }
  ];
  const each_array = ensure_array_like(panels);
  $$payload.out += `<section class="min-h-screen w-full pt-20 svelte-1j36wnv"><div data-animation="default" class="w-nav navbar svelte-1j36wnv" data-easing2="ease" data-easing="ease" data-collapse="all" role="banner" data-duration="300"><div class="display-grid w-full svelte-1j36wnv"><article class="w-full svelte-1j36wnv"><ul class="panels svelte-1j36wnv"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let panel = each_array[$$index];
    $$payload.out += `<li class="panel max-w-md lg:w-full svelte-1j36wnv"><a href="/" class="svelte-1j36wnv"><span style="z-index: 90;" class="font-graffity svelte-1j36wnv">${escape_html(panel.title)}</span></a> <img${attr("src", `/images/hero/${stringify(panel.img)}`)} class="h-full w-full svelte-1j36wnv"${attr("alt", panel.title)}></li>`;
  }
  $$payload.out += `<!--]--></ul> <h2 class="big-text svelte-1j36wnv"><span class="gradient-text letter svelte-1j36wnv">E</span> <span class="gradient-text letter svelte-1j36wnv">X</span> <span class="gradient-text letter svelte-1j36wnv">P</span> <span class="gradient-text letter svelte-1j36wnv">L</span> <span class="gradient-text letter svelte-1j36wnv">O</span> <span class="gradient-text letter svelte-1j36wnv">R</span> <span class="gradient-text letter svelte-1j36wnv">E</span></h2> <span class="geo-square svelte-1j36wnv"><img src="/images/gifs/your_welcome.gif" alt="image of graffity, graphic purpose only" class="svelte-1j36wnv"></span></article></div></div></section>`;
}
function ArtistCard($$payload, $$props) {
  push();
  let { extension } = $$props;
  const each_array = ensure_array_like(extension.features);
  const each_array_1 = ensure_array_like(extension.artists);
  $$payload.out += `<div class="hover:delay-550 group mb-10 border-2 border-neutral-900 pt-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out"><div class="wrapper mx-auto h-full svelte-jl9r1b"><div class="overviewInfo svelte-jl9r1b"><div class="relative mb-14 flex h-[250px] flex-col justify-between"><div class="mb-3 text-xl"><span>Artists</span> <h3 class="group-hover:text-yellow-400">${escape_html(extension.artists.length)}</h3></div> <div class="mb-3 text-xl"><span>Relise</span> <h3 class="group-hover:text-yellow-400">${escape_html(extension.relise)}</h3></div> <div class="mb-3 text-xl"><span>Cards</span> <h3 class="group-hover:text-yellow-400">${escape_html(extension.cards)}</h3></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let data = each_array[$$index];
    $$payload.out += `<div class="mb-3 text-xl"><span>${escape_html(data.title)}</span> <h3 class="group-hover:text-yellow-400">${escape_html(extension.subTitle)}</h3></div>`;
  }
  $$payload.out += `<!--]--> <div class="text-xl"><span>Country</span> <h3 class="group-hover:text-yellow-400">${escape_html(extension.country)}</h3></div> <div class="productImage svelte-jl9r1b"><img${attr("src", extension.img)} alt="product: boardgame graffiti chronicles image" class="svelte-jl9r1b"></div></div></div> <div class="productSpecifications h-full group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out svelte-jl9r1b"><h1 class="mb-2 mt-6 text-2xl group-hover:text-black">${escape_html(extension.title)}</h1> <p class="mb-2 text-zinc-700 group-hover:text-black">This extension includes cards with the art of graffiti artists from the country of <a href="/" target="_blank" class="font-bold text-yellow-600 underline group-hover:text-black">${escape_html(extension.country)}</a>.</p> <p class="mb-10 text-zinc-700 group-hover:text-black">List of graffiti artists in this extension: <br> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let artist = each_array_1[$$index_1];
    $$payload.out += `<span class="mr-1"><a class="font-bold text-yellow-600 underline group-hover:text-black" target="_blank"${attr("href", artist.link)}>${escape_html(artist.nickName)},</a></span>`;
  }
  $$payload.out += `<!--]--></p> <div class="flex flex-row justify-between"><h3 class="font-dollar text-6xl text-yellow-400 group-hover:text-black">$ <span class="font-graffity text-yellow-400 group-hover:text-black">${escape_html(extension.price)}</span></h3> <button class="font-graffity mb-6 bg-yellow-400 px-3 py-5 text-2xl text-black group-hover:bg-black group-hover:text-yellow-400">Buy Now</button></div></div></div></div>`;
  pop();
}
function ProfileCard($$payload) {
  const socialLinks2 = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/",
      img: "instagram.png"
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/l.pl/",
      img: "facebook.png"
    }
  ];
  const each_array = ensure_array_like(socialLinks2);
  $$payload.out += `<div class="wrap hover:delay-550 group border-2 border-neutral-900 py-4 px-8 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out svelte-rsa76t"><div class="mb-2"><span class="text-xs font-bold uppercase tracking-widest text-yellow-600">Author</span> <a name="creator"></a> <h2 class="mb-0 mt-2 text-4xl text-yellow-400">Oleg <br>Medvedev</h2> <a href="https://www.linkedin.com/in/oleg-darkdev" class="underline" target="_blank">@oleg_darkdev</a></div> <a name="contact"></a> <div class="mb-1"><div class="card0 card svelte-rsa76t"><div class="inside svelte-rsa76t"><div class="icons svelte-rsa76t"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a class="fa h-24 w-24 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out svelte-rsa76t"${attr("href", social.link)} target="_blank"><img${attr("src", `/images/social/${stringify(social.img)}`)} class="h-full w-full"${attr("alt", `Llogotype of ${stringify(social.title)}`)}></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div>`;
}
function ReliseCard($$payload) {
  const reliseData = [
    { title: "release", subTitle: "Fall 2025" },
    { title: "complect", subTitle: "BOX + APP" },
    { title: "", subTitle: "" }
  ];
  const each_array = ensure_array_like(reliseData);
  $$payload.out += `<div class="hover:delay-550 group mb-10 border-2 border-neutral-900 py-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out"><div class="wrapper mx-auto svelte-w4508k"><div class="overviewInfo svelte-w4508k"><div class="relative mb-14 flex flex-col justify-between"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let data = each_array[$$index];
    $$payload.out += `<div class="mb-3 text-xl"><span>${escape_html(data.title)}</span> <h3 class="group-hover:text-yellow-400">${escape_html(data.subTitle)}</h3></div>`;
  }
  $$payload.out += `<!--]--> <div class="-mt-2 mb-4 text-xl"><span>PRICE</span> <h3 class="font-dollar -mt-2 text-3xl group-hover:text-yellow-400">$ <span class="font-graffity">70</span></h3></div> <div class="productImage svelte-w4508k"><img src="/images/character.png" alt="product: boardgame graffiti chronicles image" class="svelte-w4508k"></div></div></div> <div class="productSpecifications group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out svelte-w4508k"><h1 class="mt-10 text-2xl group-hover:text-black">Beta phase.</h1> <p class="group-hover:text-black">The boardgame and app are in development.</p> <div class="checkoutButton bg-yellow-400 px-3 py-4 text-black group-hover:bg-black group-hover:text-yellow-400 svelte-w4508k"><button class="flex flex-row items-center justify-center"><p class="font-dollar mr-4 text-4xl group-hover:text-yellow-400">$ <span class="font-graffity group-hover:text-yellow-400">50</span></p> <span class="font-graffity text-3xl">Early bird</span></button></div></div></div></div>`;
}
function About($$payload) {
  const each_array = ensure_array_like(socialLinks);
  $$payload.out += `<section class="mx-auto w-full px-5 lg:px-32 lg:py-12 xl:py-12"><div class="mx-auto flex max-w-5xl flex-col-reverse lg:flex-row"><div class="m-auto mt-12 w-full max-w-sm"><div class="flex w-full flex-col">`;
  ReliseCard($$payload);
  $$payload.out += `<!----> `;
  ProfileCard($$payload);
  $$payload.out += `<!----></div></div> <div class="hover:delay-550 prose-md prose group mt-12 w-full w-full border-2 border-neutral-900 p-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:bg-black hover:transition hover:duration-1000 hover:ease-in-out"><div class="mb-5 border-b border-gray-200"><div class="-mt-2 flex flex-wrap items-baseline"><p class="ml-2 mt-1">About the co-op boardgame <span class="font-bold text-yellow-600">Graffity chronicles</span></p></div></div> <a name="#about"></a> <h1>Discover the world of graffiti culture through a boardgame!</h1> <p>Graffiti Chronicles is a cooperative board game enhanced by an interactive <a class="font-bold text-yellow-600 underline" target="_blank" href="/app">web app</a> that immerses you in the rich and diverse culture of graffiti from around the globe.</p> <p>The core box serves as a universal foundation for the game \u2014 but there's more: Each
				expansion focuses on a specific country or region, introducing you to the unique
				characteristics of local graffiti scenes.</p> <p>Among the available <a class="font-bold text-yellow-600 underline" href="#extensions">extensions</a>are countries like the USA, Russia, various European nations, Ukraine, and Albania.</p> <h3>You\u2019ll experience:</h3> <ul class="list-disc pl-5"><li class="font-bold text-yellow-600 marker:text-yellow-600">Learning various graffiti styles</li> <li class="font-bold text-yellow-600 marker:text-yellow-600">Discovering the tools used by graffiti artists</li> <li class="font-bold text-yellow-600 marker:text-yellow-600">Immersing yourself in street slang</li> <li class="font-bold text-yellow-600 marker:text-yellow-600">Exploring artworks by street artists from around the world</li> <li class="font-bold text-yellow-600 marker:text-yellow-600">Using a web app that expands and enhances the board game experience</li></ul> <h2 class="text-cyan-600">it's an interactive educational experience that enhances visual thinking and fosters
				creativity.</h2> <div class="mb-8 mt-4"><span>More content on our social media:</span> <div class="-mt-8 flex flex-row flex-wrap"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a class="h-32 w-32 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out"${attr("href", social.link)} target="_blank"><img${attr("src", `/images/social/${stringify(social.img)}`)} class="h-full w-full"${attr("alt", `Llogotype of ${stringify(social.title)}`)}></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></section>`;
}
function ArtistsSection($$payload, $$props) {
  push();
  let showFull = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(showFull ? artistExtensionData : artistExtensionData.slice(0, 6));
    $$payload2.out += `<section class="my-20 flex min-h-screen w-full flex-col items-center justify-center pb-20"><h2 class="font-graffity mb-10 title max-w-xl text-center text-3xl lg:text-6xl">Artists by countries</h2> <a name="artists"></a> <a name="extensions"></a> <div class="flex lg:w-10/12 xl:w-10/12 w-full flex-row flex-wrap lg:justify-between xl:justify-between justify-center"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let extension = each_array[$$index];
      ArtistCard($$payload2, { extension });
    }
    $$payload2.out += `<!--]--></div> `;
    ShowMoreDataBtn($$payload2, {
      get showFull() {
        return showFull;
      },
      set showFull($$value) {
        showFull = $$value;
        $$settled = false;
      },
      link: "#artists",
      title: "Extensions"
    });
    $$payload2.out += `<!----></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function ShowMoreDataBtn($$payload, $$props) {
  let { showFull = void 0, link, title } = $$props;
  $$payload.out += `<a${attr("href", link)} role="button" class="font-graffity mb-10 mt-4 w-[300px] transform border-2 border-yellow-400 px-4 py-6 text-center text-2xl text-2xl uppercase text-yellow-400 transition duration-500 ease-in-out hover:bg-yellow-400 hover:text-black focus:outline-none">${escape_html(showFull ? "Hide" : "SHOW")} ${escape_html(title)}</a>`;
  bind_props($$props, { showFull });
}
function _page2($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Graffity Chronicles</title>`;
  });
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  StylesList($$payload);
  $$payload.out += `<!----> `;
  ArtistsSection($$payload);
  $$payload.out += `<!---->`;
}
var styles;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/__lang_lang__/_page.svelte.js"() {
    init_index3();
    init_socialLinks();
    init_extensions();
    styles = [
      // https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
      {
        title: "Tags",
        example: "tags.jpg",
        articleLink: "/",
        shortDesc: ["A tag can be defined as a stylised signature of the graffiti artist\u2019s name."],
        desc: [
          "The most common tools for graffiti tags include spray paint and marker pens.",
          "Tags can be found in every graffiti culture worldwide because they\u2019re the earliest method of modern-day graffiti \u2013 with graffiti writers like Cornbread from Philadelphia being the first to do a graffiti tag in 1965."
        ]
      },
      {
        title: "Etch",
        example: "etch.webp",
        articleLink: "/",
        shortDesc: [
          "Etched graffiti is a style where graffiti writers use an acid solution  to burn their tags on glass permanently."
        ],
        desc: [
          "It is also one of the most expensive types of graffiti in terms of property damage, as etched marks cannot be removed with cleaners.",
          "Instead, the glass must be replaced. This adds to its appeal, as etched marks are usually not removed due to the need to replace the entire glass."
        ]
      },
      {
        title: "Fat Cap",
        example: "fat-cap.jpg",
        articleLink: "/",
        shortDesc: [
          "Fat cap is a name for a special nozzle invented for graffiti art. It allows a wider stream of spray to come out of the can, creating the largest lines."
        ],
        desc: [
          `The nozzle is put on a can of spray paint, and was invented in the late 1960s by graffiti artist Supercool.`,
          `It is particularly used for tags, throw-ups and fillings, which are, due to the width of lines, defined as a special stylistic group named fat cap.`
        ]
      },
      {
        title: "Calligraphy",
        example: "calligraphy.jpg",
        articleLink: "/",
        shortDesc: [
          "Calligraphy graffiti (or calligraffiti) combines traditional calligraphy lettering with elements of graffiti culture."
        ],
        desc: [
          `This style of graffiti can be achieved using many different art supplies, such as calligraphy marker pens, calligraphy caps on spray paint and paintbrushes.`,
          `Because it\u2019s possible to do with many different mediums, calligraphy graffiti can range from tags, straight letter pieces, full-colour pieces and murals.`
        ]
      },
      {
        title: "Throw-ups",
        example: "throw-ups.jpg",
        articleLink: "/",
        shortDesc: [
          "Throw-ups are a style of graffiti characterised by rounded bubble letters with minimal negative space painted quickly (or \u2018thrown-up\u2019) on a surface."
        ],
        desc: [
          `The throw-up is usually the next progression from a tag. This comes as graffiti artists get more familiar with letter structures and strive for their names to be painted bigger, whilst also maintaining speed.`,
          `By avoiding negative space, sharp edges and intricate details, throw-ups are able to be painted quickly. Throw-ups contain two colours of paint \u2013 one for the fill and one for the outline.`,
          `High pressure spray paint is the medium of choice for throw-ups as the high output allows for maximum speed.`
        ]
      },
      {
        title: "Two letter throw-ups",
        example: "two-letter-throw-up.webp",
        articleLink: "/",
        shortDesc: [
          "Two letter throw-ups share a similar style to regular throw-ups, but they instead only contain two letters of the graffiti writer\u2019s tag. Most commonly, the first two letters."
        ],
        desc: [
          "This style of throw-up allows graffiti writers to paint their names up even faster, whilst also being able to fit into smaller spaces where a full throw-up isn\u2019t possible.",
          "JA One from New York and Oker from London are two infamous graffiti artists who are well known for their two letter throw-ups."
        ]
      },
      {
        title: "Simple",
        example: "simple.jpg",
        articleLink: "/",
        shortDesc: ["Letters in simple style basically look like normal letters. "],
        desc: [
          "The composition is not complex. Hence, they are easily readable. Colors and effects matter the most in simple style graffiti.",
          ""
        ]
      },
      // https://www.graffiti-empire.com/how-to-draw-graffiti-bubble-letters/
      {
        title: "Buble",
        example: "buble.jpg",
        articleLink: "/",
        shortDesc: [
          "Graffiti in bubble-style \u2013 look like they have been blown up with air. All edges are round."
        ],
        desc: [
          "The rounding of letters in classical throw-ups was the initial phase that led to the development of bubble style.",
          "The letters are round, circular and often overlapping partially one another, creating an image that seems to expand and bubble-up in a way."
        ]
      },
      {
        title: "Semi-wildstyle",
        example: "semi-wildstyle.jpg",
        articleLink: "/",
        shortDesc: ["Semi-wildstyle graffiti are more complex than simple style. "],
        desc: [
          `Letters are arranged in a more elaborate way and style elements are added.`,
          "This style is for beginners - it is characteristic of artists who are learning the basics and are ready to experiment their techniques."
        ]
      },
      {
        title: "Wildstyle",
        example: "wildstyle.jpg",
        articleLink: "/",
        shortDesc: [
          "The letters of wild style graffiti are very abstract and cannot be identified as letters easily."
        ],
        desc: [
          "Wildstyle is an intricate graffiti style that\u2019s all about interlocked letters, symbols, and dynamic shapes. Lots of style elements, like arrows and big serifs are added to the letters and make the composition very complex. The shadows of the letters fill the spaces between the letters and make the whole piece look compact.",
          "This style isn\u2019t for beginners\u2014it\u2019s the signature of artists who\u2019ve mastered the basics and are ready to showcase their advanced techniques."
        ]
      },
      {
        title: "Sharp",
        example: "sharp.jpg",
        articleLink: "/",
        shortDesc: [
          "In Sharp style the letters or abstract elements are sprayed or painted in as sharp and angular forms as possible."
        ],
        desc: [
          "Although in other styles sharp forms may be present, this style pushes them to their limits.",
          "Thinning, stretching and contorting of letters is extreme, which often renders these works to appear violent, aggressive and forceful."
        ]
      },
      {
        title: "3D",
        example: "3d.webp",
        articleLink: "/",
        shortDesc: [
          "Graffiti pieces with very three-dimensional compositions are called 3D-style graffiti."
        ],
        desc: [
          "As a result, the letters (can) have different vanishing points and optical illusions.",
          ""
        ]
      },
      {
        title: "Characters",
        example: "character.JPG",
        articleLink: "/",
        shortDesc: ["\u201ECharacter\u201C is an abbreviation of \u201Ccartoon character\u201D."],
        desc: [
          `They are usually painted next to a graffiti to create a scenario around the graffiti piece. Even so, some artists decide to just focus on characters.`,
          `Copying characters (from cartoons) is usually accepted, because they are only used as decorative elements. If the graffiti artist decides to focus on characters only, it is needed to bring in his/her own creativity though.`
        ]
      },
      {
        title: "Hollows",
        example: "hollows.jpg",
        articleLink: "/",
        shortDesc: [
          "Hollows are similar to throw-ups, except they only feature the letter outline in one colour with no fill-in."
        ],
        desc: [
          "Hollow graffiti is notoriously hard, however, as it can be obvious when lines have been done poorly. With only one colour and no fill-in to hide any errors, it\u2019s difficult to fix mistakes.",
          "Because of their difficulty, hollows can be a good display of a graffiti artist\u2019s skill as they require exceptional can control for them to look clean."
        ]
      },
      {
        title: "Pichacao",
        example: "picha\xE7\xE3o.jpg",
        articleLink: "/",
        shortDesc: [
          "Picha\xE7\xE3o (pronounced pi-cha-\xE7\xE3o) is a unique style of graffiti native to S\xE3o Paulo."
        ],
        desc: [
          `Roughly translated to \u201Cwall writings\u201D, Picha\xE7\xE3o is a form of tagging it\u2019s known for its cryptic lettering painted in hard to reach places across cities in Brazil.`,
          `Although Picha\xE7\xE3o writing began in the 1970s as a form of political and social protest, modern Picha\xE7\xE3o writers instead use it as a way to promote their graffiti name \u2013 much like traditional name-based graffiti.`,
          `Picha\xE7\xE3o can be easily recognised by its thin and aggressive lettering made possible by the use of spray paint, paintbrushes and paint rollers.`
        ]
      },
      {
        title: "Straight Letters",
        example: "straight-letter.webp",
        articleLink: "/",
        shortDesc: [
          "A straight letter piece is defined by its big, bold and often more readable letters in combination with the graffiti artist\u2019s personal flare."
        ],
        desc: [
          `This style of graffiti is commonly the next progression from a throw-up as it contains more detailed, sharper edges and has more negative space.`,
          `A straight letter is usually painted with speed in mind and uses only 2 \u2013 4 colours in a piece.`,
          `In London graffiti culture, a straight letter piece painted with silver chrome and black is commonly known as a \u2018Dub\u2019.`
        ]
      },
      {
        title: "Blockbuster",
        example: "blockbuster.jpg",
        articleLink: "/",
        shortDesc: [
          "A blockbuster is a style of graffiti characterised by huge straight letters painted using only 2 \u2013 3 colours."
        ],
        desc: [
          `Both spray paint and/or emulsion paint can be used to create blockbuster pieces.`,
          `Although a blockbuster can be painted anywhere, they\u2019re commonly found on large surfaces that are distanced from public view.`,
          `This means that there is a need to go huge in order to be seen, as a normal-sized piece may be missed. Common spots include highways, rooftops and abandoned buildings \u2013 but you can find blockbusters anywhere.`
        ]
      },
      {
        title: "Roller",
        example: "roller.jpg",
        articleLink: "/",
        shortDesc: [
          "Roller graffiti (also known as roll-ups) is a style that uses emulsion paint along with paint rollers to produce big pieces in hard-to-reach places."
        ],
        desc: [
          `A big limitation of spray paint is that unless you have access to a ladder, you\u2019re only able to paint as high as you can reach.`,
          `But by using an extended paint roller instead, graffiti artists can access spaces previously inaccessible with spray paint without needing a ladder.`,
          `Graffiti with a roller is much cheaper than spray paint.`
        ]
      },
      {
        title: "Heaven spot",
        example: "heaven-spot.webp",
        articleLink: "/",
        shortDesc: [
          "Although not strictly a graffiti style, a heaven spot is a piece painted in a high-up and difficult place."
        ],
        desc: [
          `As the name suggests, heaven relates to being high up in the sky. But it\u2019s also the place a writer might end up if they fall. Heaven spots can range from rooftops, towers, highway signs and more. Pretty much any graffiti piece which is high up in the air.`,
          `Both spray paint and emulsion paint are common tools for painting heaven spots.`
        ]
      },
      {
        title: "Murals",
        example: "mural.webp",
        articleLink: "/",
        shortDesc: [
          "Murals are large pieces of street art containing faces, characters, objects, abstract designs and sometimes letters often painted with permission."
        ],
        desc: [
          `The line between graffiti and street art becomes blurred with murals, as the previous graffiti styles we\u2019ve covered have been primarily name-based.`,
          ` Murals do not always contain a name or a tag, which puts them more in the category of street art.`,
          `As murals are usually commissioned, artists are able to spend as much time as they need to perfect their work, which is often not the case for other graffiti styles.`
        ]
      },
      // https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
      {
        title: "Handstyle",
        example: "handstyle.jpg",
        articleLink: "/",
        shortDesc: [
          "Handstyle graffiti has become more popular within the design and fine art contexts, now becoming canonical as a stylistic quality of hand-lettering artworks."
        ],
        desc: [
          "Handstyle graffiti is a form of graffiti that is drawn on canvas, paper, and other two-dimensional surfaces. ",
          "This is a style of graffiti that generally describes artworks on a smaller scale, and is often seen to be incorporated into other artworks. It can be used not only as an art form. Graffiti-style texts have become a canonical form of writing that can be used for marketing, advertising and other creative purposes."
        ]
      },
      {
        title: "Sticker bombing",
        example: "sticker-bobing.jpg",
        articleLink: "/",
        shortDesc: [
          "Sticker bombing is a common type of graffiti where artists either write on blank stickers or print names and images on stickers and stick them up in public."
        ],
        desc: [
          `Sticker bombing is unique as it\u2019s not just used as a means of increasing someone\u2019s profile through a tag like traditional graffiti.`,
          `Stickers are also often used to raise awareness of social issues and to promote political agendas.`
        ]
      },
      // https://twistedsifter.com/2014/07/the-ultimate-banksy-gallery/
      {
        title: "Stencils",
        example: "stencils.webp",
        articleLink: "/",
        shortDesc: [
          "Artists then put the sheet plastic or metal with shapes cut out of it - on a surface and use spray paint to fill in the cut-out shapes, producing their artwork."
        ],
        desc: [
          "Stencil graffiti or stencil art is a style that uses a sheet of card, plastic or metal with shapes cut out of it.",
          `Stencil graffiti was made famous by "Banksy" through his popular pieces Girl with Balloon and Flower Thrower.`,
          `Since then, stencil graffiti has become more popular and often inherits a political or social message which is aimed at the wider public.`
        ]
      },
      {
        title: "Wheat paste",
        example: "wheat-paste.webp",
        articleLink: "/",
        shortDesc: [
          "Wheat paste is a style that uses wheat flour or starch mixed with water to adhere paper imagery to a surface."
        ],
        desc: [
          "Like stencils, stickers and murals \u2013 wheat paste falls more into the category of street art than traditional graffiti. This is because it focuses on images and symbols instead of a graffiti name.",
          "Wheat paste posters also often try to provoke a social or political message as they\u2019re commonly used by activist groups to raise awareness for their cause."
        ]
      },
      {
        title: "Brush",
        example: "brush.jpg",
        articleLink: "/",
        shortDesc: [
          "Relatively quick to execute once the initial design is settled, brush style stands for the use of brush or paint rollers which creates a smooth final effect."
        ],
        desc: [
          `Brush graffiti are devoid of unnecessary lines and petty details, but sometimes, brushes may be used for the execution of fine points, which creates a more painterly result.`
        ]
      },
      {
        title: "Anti-style",
        example: "anti-style.webp",
        articleLink: "/",
        shortDesc: [
          "Anti-style (also known as hipster graffiti and ignorant style) is a type of graffiti that completely ignores traditional graffiti conventions."
        ],
        desc: [
          "By ignoring these conventions, anti-style writers are strictly \u201Cagainst\u201D any graffiti traditional style. This is because many artists strive for respect and recognition, which is hard to achieve as an anti-style writer because this style only appeals to a small minority of graffiti artists.",
          "Anti-style can be hard to look at as pieces lack composition and flow. With no rules to follow, anti-style can be produced using any type of graffiti paint."
        ]
      }
    ];
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    imports4 = ["_app/immutable/nodes/3.B-l9Rfbd.js", "_app/immutable/chunks/disclose-version.89lgXlId.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/chunks/SprayPointer.svelte_svelte_type_style_lang.Cc3VEKr9.js", "_app/immutable/chunks/props.D9DfF_o2.js", "_app/immutable/chunks/store.hlkORDqC.js", "_app/immutable/chunks/socialLinks.B5rld_JB.js", "_app/immutable/chunks/extensions.bwNpBUK0.js"];
    stylesheets4 = ["_app/immutable/assets/SprayPointer.CPMVVUTT.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/endpoints/auth/callback/_server.ts.js
var server_ts_exports = {};
__export(server_ts_exports, {
  GET: () => GET
});
var GET;
var init_server_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/auth/callback/_server.ts.js"() {
    init_chunks();
    GET = async ({ url, locals: { supabase } }) => {
      if (supabase) {
        const code = url.searchParams.get("code");
        if (code) {
          await supabase.auth.exchangeCodeForSession(code);
        }
      }
      redirect(303, "/profile");
    };
  }
});

// .svelte-kit/output/server/entries/matchers/lang.js
var lang_exports = {};
__export(lang_exports, {
  match: () => match
});
var match;
var init_lang = __esm({
  ".svelte-kit/output/server/entries/matchers/lang.js"() {
    init_i18n_util();
    match = (param) => {
      return isLocale(param);
    };
  }
});

// .svelte-kit/output/server/index.js
init_index3();

// .svelte-kit/output/server/chunks/internal.js
init_index3();
init_equality();
var base = "";
var assets = base;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function hydration_mismatch(location) {
  {
    console.warn("hydration_mismatch");
  }
}
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated !== void 0 && !/** @type {any} */
        current_target.disabled) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function mount(component5, options2) {
  return _mount(component5, options2);
}
function hydrate(component5, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component5, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component5, options2);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component5 = void 0;
  var unmount2 = effect_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push$1({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component5 = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop$1();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      mounted_components.delete(component5);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component5, unmount2);
  return component5;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component5) {
  const fn = mounted_components.get(component5);
  if (fn) {
    fn();
  }
}
function asClassComponent$1(component5) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component5,
        ...options2
      });
    }
  };
}
var _events, _instance;
var Svelte4Component = class {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s2 = mutable_source(value);
      sources.set(key2, s2);
      return s2;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    __privateSet(this, _instance, (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    }));
    if (!options2?.props?.$$host || options2.sync === false) {
      flush_sync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key2 of Object.keys(__privateGet(this, _instance))) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return __privateGet(this, _instance)[key2];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key2] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    __privateGet(this, _events)[event] = __privateGet(this, _events)[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event].push(cb);
    return () => {
      __privateGet(this, _events)[event] = __privateGet(this, _events)[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
};
_events = new WeakMap();
_instance = new WeakMap();
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function asClassComponent(component5) {
  const component_constructor = asClassComponent$1(component5);
  const _render = (props, { context } = {}) => {
    const result = render(component5, { props, context });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
var prerendering = false;
function Root($$payload, $$props) {
  push();
  let {
    stores,
    page: page2,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores);
  }
  {
    stores.page.set(page2);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
var root = asClassComponent(Root);
var options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head: head2, body: body2, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="%lang%">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head2 + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body2 + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "2l73gy"
};
async function get_hooks() {
  return {
    ...await Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports))
  };
}

// .svelte-kit/output/server/index.js
init_chunks();
init_exports();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return;
        case "ArrayBuffer":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify3(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify3(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const typedArray = thing;
        return `new ${type}([${typedArray.toString()}])`;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify3(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify3(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify3(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify3(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify3(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify3(k)}, ${stringify3(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify3(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify2(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index6 = p++;
    indexes.set(thing, index6);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index6] = `["${key2}",${flatten(value2)}]`;
        return index6;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: source2, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source2)},"${flags}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base642 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base642 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base642 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base642}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index6] = str;
    return index6;
  }
  const index5 = flatten(value);
  if (index5 < 0) return `${index5}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_index2();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match2 = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match2) {
      const [, type, subtype, q = "1"] = match2;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error
  );
}
function get_status(error) {
  return error instanceof HttpError || error instanceof SvelteKitError ? error.status : 500;
}
function get_message(error) {
  return error instanceof SvelteKitError ? error.text : "Internal Error";
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error) {
  error = error instanceof HttpError ? error : coalesce_to_error(error);
  const status = get_status(error);
  const body2 = await handle_error_and_jsonify(event, options2, error);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error) {
  if (error instanceof HttpError) {
    return error.body;
  }
  const status = get_status(error);
  const message = get_message(error);
  return await options2.hooks.handleError({ error, event, status, message }) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error) {
  if (error.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error.message} (data${error.path})`;
  }
  if (error.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.push(`"search_params":${JSON.stringify(Array.from(node.uses.search_params))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent) uses.push('"parent":1');
  if (node.uses?.route) uses.push('"route":1');
  if (node.uses?.url) uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      "POST method not allowed. No actions exist for this page"
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error) {
  return error instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error;
}
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        "POST method not allowed. No actions exist for this page"
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify2, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error = (
      /** @type {any} */
      e
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error.message}`;
      if (error.path !== "") message += ` (data.${error.path})`;
      throw new Error(message);
    }
    throw error;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      new URL(info instanceof Request ? info.url : info, event.url);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.params.add(key2);
        }
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      if (is_tracking) {
        uses.parent = true;
      }
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.route = true;
        }
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url,
    untrack(fn) {
      is_tracking = false;
      try {
        return fn();
      } finally {
        is_tracking = true;
      }
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get3 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get3.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match2) => {
    if (match2.length === 2) {
      return match2;
    }
    return escape_html_attr_dict[match2] ?? `&#${match2.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match2) => replacements2[match2]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match2 = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match2) {
      const ttl = +match2[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _script_src_elem, _style_src, _style_src_attr, _style_src_elem, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src_elem);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_attr);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_elem);
    /** @type {string} */
    __privateAdd(this, _nonce);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _script_src_elem, []);
    __privateSet(this, _style_src, []);
    __privateSet(this, _style_src_attr, []);
    __privateSet(this, _style_src_elem, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0 || !!script_src_elem && script_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_attr && style_src_attr.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_elem && style_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _script_src).push(`sha256-${hash2}`);
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _script_src).length === 0) {
          __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      const empty_comment_hash = "9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _style_src).push(`sha256-${hash2}`);
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`sha256-${hash2}`);
        }
        if (d["style-src-elem"]?.length) {
          if (hash2 !== empty_comment_hash && !d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _style_src).length === 0 && !d["style-src"]?.includes("unsafe-inline")) {
          __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-elem"]?.length) {
          if (!d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _style_src_attr).length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...__privateGet(this, _style_src_attr)
      ];
    }
    if (__privateGet(this, _style_src_elem).length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...__privateGet(this, _style_src_elem)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    if (__privateGet(this, _script_src_elem).length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...__privateGet(this, _script_src_elem)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_script_src_elem = new WeakMap();
_style_src = new WeakMap();
_style_src_attr = new WeakMap();
_style_src_elem = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets5 = new Set(client.stylesheets);
  const fonts5 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch2.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets5.add(url);
      for (const url of node.fonts) fonts5.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head2 = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head2 += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head2 += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head2 += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch2.map((b) => b.server_data),
    csp,
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    if (client.uses_env_dynamic_public && state.prerendering) {
      modulepreloads.add(`${options2.app_dir}/env.js`);
    }
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head2 += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head2 += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error) {
        serialized.error = uneval(error);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${options2.app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						Promise.all([
							import(${s(prefixed(client.start))}),
							import(${s(prefixed(client.app))})
						]).then(([kit, app]) => {
							kit.start(${args.join(", ")});
						});
					});`);
    } else {
      blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head2 = http_equiv.join("\n") + head2;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head2 += rendered.head;
  const html = options2.templates.app({
    head: head2,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
function get_data(event, options2, nodes, csp, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error) => ({
          error: await handle_error_and_jsonify(event, options2, error)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error }, replacer);
          } catch {
            error = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error }, replacer);
          }
          const nonce = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push2(`<script${nonce}>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error),
      branch: branch2,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      get_status(e),
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error) => {
          if (error instanceof Redirect) {
            throw error;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error),
              status: error instanceof HttpError || error instanceof SvelteKitError ? error.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error = normalize_error(e);
    if (error instanceof Redirect) {
      return redirect_json_response(error);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect2) {
  return json_response({
    type: "redirect",
    location: redirect2.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify2(value, reducers);
            } catch {
              const error = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify2(error, reducers);
            }
            count -= 1;
            push2(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify2(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function load_page_nodes(page2, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
    manifest2._.nodes[page2.leaf]()
  ]);
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await load_page_nodes(page2, manifest2);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server?.load);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !(state.prerendering && should_prerender_data)) {
      if (DEV && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch2 = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j = i;
              while (!branch2[j]) j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error,
                branch: compact(branch2.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch2.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    const ssr = get_option(nodes, "ssr") ?? true;
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch2),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match2, params, matchers) {
  const result = {};
  const values = match2.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, options2) {
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ?? (body = `export const env=${JSON.stringify(public_env)}`);
  etag ?? (etag = `W/${Date.now()}`);
  headers ?? (headers = new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  }));
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
function get_page_config(nodes) {
  let current = {};
  for (const node of nodes) {
    if (!node?.universal?.config && !node?.server?.config) continue;
    current = {
      ...current,
      ...node?.universal?.config,
      ...node?.server?.config
    };
  }
  return Object.keys(current).length ? current : void 0;
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let rerouted_path;
  try {
    rerouted_path = options2.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  }
  let decoded;
  try {
    decoded = decode_pathname(rerouted_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  if (decoded === `/${options2.app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (decoded.startsWith(`/${options2.app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match2 = candidate.pattern.exec(decoded);
      if (!match2) continue;
      const matched = exec(match2, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers2 = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await load_page_nodes(route.page, manifest2);
        if (DEV) ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state.before_handle || state.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (route.page) {
          const nodes = await load_page_nodes(route.page, manifest2);
          config = get_page_config(nodes) ?? config;
          prerender = get_option(nodes, "prerender") ?? false;
        }
        if (state.before_handle) {
          state.before_handle(event, config, prerender);
        }
        if (state.emulator?.platform) {
          event.platform = await state.emulator.platform({ config, prerender });
        }
      }
    } else if (state.emulator?.platform) {
      event.platform = await state.emulator.platform({
        config: {},
        prerender: !!state.prerendering?.fallback
      });
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback) disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers2) {
          const value = headers2[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: __privateGet(this, _options).env_public_prefix,
      private_prefix: __privateGet(this, _options).env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      set_read_implementation(read);
    }
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error }) => console.error(error)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          })
        };
      } catch (error) {
        {
          throw error;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png", "favicon.svg", "fonts/dollar.ttf", "fonts/graffity.svg", "fonts/graffity.ttf", "fonts/graffity.woff", "images/character.png", "images/contact/facebook.avif", "images/contact/instagram.avif", "images/contact/youtube.avif", "images/extensions/albany.png", "images/extensions/austria.png", "images/extensions/croatia.png", "images/extensions/czech.png", "images/extensions/england.png", "images/extensions/france.png", "images/extensions/germany.png", "images/extensions/italy.png", "images/extensions/poland.png", "images/extensions/russia.png", "images/extensions/spain.png", "images/extensions/sweden.png", "images/extensions/turkey.png", "images/extensions/ukraine.png", "images/facebook-logo-black.svg", "images/facebook-logo.svg", "images/favicon.png", "images/gifs/100_red.gif", "images/gifs/1_2_3_black.gif", "images/gifs/break_cyher_black.gif", "images/gifs/calling_black.gif", "images/gifs/chill_black.gif", "images/gifs/coming_soon_black.gif", "images/gifs/congrats_black.gif", "images/gifs/corona_black.gif", "images/gifs/cypher_qeeen.gif", "images/gifs/dont_stop__black.gif", "images/gifs/download_black.gif", "images/gifs/easy_black.gif", "images/gifs/fresh_black.gif", "images/gifs/happy_b-day.gif", "images/gifs/hell_yeth_black.gif", "images/gifs/hey_bo_black.gif", "images/gifs/i`m_done_black.gif", "images/gifs/i`m_done_red.gif", "images/gifs/lets_go__black.gif", "images/gifs/new)album_black.gif", "images/gifs/new_post_black.gif", "images/gifs/new_single_black.gif", "images/gifs/ohhhh_shit_black.gif", "images/gifs/omg_black.gif", "images/gifs/on_black.gif", "images/gifs/on_fire_black.gif", "images/gifs/order_now_black.gif", "images/gifs/out_now_black.gif", "images/gifs/release_date_black.gif", "images/gifs/scheriff_black.gif", "images/gifs/shit_black.gif", "images/gifs/stream_black.gif", "images/gifs/thanks_black.gif", "images/gifs/today_black.gif", "images/gifs/today_red.gif", "images/gifs/tommorow_black.gif", "images/gifs/tommorow_red.gif", "images/gifs/turn_up_black.gif", "images/gifs/whut_black.gif", "images/gifs/yeah_black.gif", "images/gifs/yes_black.gif", "images/gifs/your_welcome.gif", "images/gifs/zavor_black.gif", "images/hero/artist.jpg", "images/hero/pieces.jpg", "images/hero/slang.jpg", "images/hero/slang_1.jpg", "images/hero/styles.jpg", "images/icons.ai", "images/instagram-logo-black.svg", "images/instagram-logo.svg", "images/logo.png", "images/logo.svg", "images/logo_footer.svg", "images/navbar_spray_1.png", "images/navbar_spray_2.png", "images/navbar_spray_mini.png", "images/social/facebook.png", "images/social/fb.avif", "images/social/fb.jpg", "images/social/inst.avif", "images/social/inst.jpg", "images/social/instagram.png", "images/social/messenger.jpg", "images/social/oleg_medvedev.ai", "images/social/oleg_medvedev.png", "images/social/social.ai", "images/social/youtube.avif", "images/social/youtube.jpg", "images/social/youtube.png", "images/spray.svg", "images/styles/3d.webp", "images/styles/anti-style.webp", "images/styles/blockbuster.jpg", "images/styles/blockbuster.webp", "images/styles/brush.jpg", "images/styles/buble.jpg", "images/styles/calligraphy.jpg", "images/styles/character.JPG", "images/styles/etch.webp", "images/styles/fat-cap.jpg", "images/styles/handstyle.jpg", "images/styles/heaven-spot.webp", "images/styles/hollows.jpg", "images/styles/mural.webp", "images/styles/picha\xE7\xE3o.jpg", "images/styles/roller.jpg", "images/styles/semi-wildstyle.jpg", "images/styles/sharp.jpg", "images/styles/simple.jpg", "images/styles/stencils.webp", "images/styles/sticker-bobing.jpg", "images/styles/straight-letter.webp", "images/styles/tags.jpg", "images/styles/throw-ups.jpg", "images/styles/two-letter-throw-up.webp", "images/styles/wheat-paste.webp", "images/styles/wildstyle.jpg", "images/twitter-black.svg", "images/twitter.svg", "images/ws_agegate.svg", "images/ws_cart_icon.svg", "videos/big.mp4", "videos/clear.mp4", "videos/light.mp4"]),
    mimeTypes: { ".png": "image/png", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".woff": "font/woff", ".avif": "image/avif", ".gif": "image/gif", ".jpg": "image/jpeg", ".ai": "application/postscript", ".webp": "image/webp", ".JPG": "image/jpeg", ".mp4": "video/mp4" },
    _: {
      client: { "start": "_app/immutable/entry/start.ZFE7Ju42.js", "app": "_app/immutable/entry/app.DvyCcUlN.js", "imports": ["_app/immutable/entry/start.ZFE7Ju42.js", "_app/immutable/chunks/entry.D08jMuLT.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/entry/app.DvyCcUlN.js", "_app/immutable/chunks/i18n-util.Df6rmA1y.js", "_app/immutable/chunks/runtime.-A0rYmyv.js", "_app/immutable/chunks/disclose-version.89lgXlId.js", "_app/immutable/chunks/props.D9DfF_o2.js", "_app/immutable/chunks/store.hlkORDqC.js"], "stylesheets": [], "fonts": [], "uses_env_dynamic_public": false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      routes: [
        {
          id: "/auth/callback",
          pattern: /^\/auth\/callback\/?$/,
          params: [],
          page: null,
          endpoint: __memo(() => Promise.resolve().then(() => (init_server_ts(), server_ts_exports)))
        },
        {
          id: "/extensions",
          pattern: /^\/extensions\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/[[lang=lang]]",
          pattern: /^(?:\/([^/]+))?\/?$/,
          params: [{ "name": "lang", "matcher": "lang", "optional": true, "rest": false, "chained": true }],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      matchers: async () => {
        const { match: lang } = await Promise.resolve().then(() => (init_lang(), lang_exports));
        return { lang };
      },
      server_assets: {}
    }
  };
})();

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
