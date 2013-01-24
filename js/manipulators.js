// Generated by CoffeeScript 1.4.0

$.create = function(html) {
  var e;
  e = $.createElement('div');
  e.innerHTML = html;
  return e.childNodes;
};

Element.prototype.append = $.appendChild;

Element.prototype.appendTo = function(o) {
  o.append(this);
  return this;
};

Element.prototype.empty = function() {
  this.innerHTML = '';
  return this;
};

Element.prototype.data = function(k, v) {
  if (!k) {
    return new Error('key is required as first argument to Element.prototype.data()');
  }
  if (v) {
    return this.getAttribute(k);
  } else {
    return this.setAttribute(k, v);
  }
};
