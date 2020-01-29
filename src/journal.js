

export function Journal () {
  this.entries = [];
}
Journal.prototype.addEntry = function(entry){
  this.entries.push(entry);
};
