if (!String.prototype.upperCaseFirst) {
  String.prototype.upperCaseFirst = function() {
    return this[0].toUpperCase() + this.substr(1, this.length - 1);
  };
}
