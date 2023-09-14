// solving https://leetcode.com/problems/implement-trie-prefix-tree

var Trie = function() {
    this.trie = { value: '', isLastLetter: false, links: []};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currentNode = this.trie;
  for(let i = 0; i < word.length; i++){
    let node = currentNode.links.find(x => x.value === word[i]);
    if(!node) {
      node = { value: word[i], isLastLetter: false, links: [] }
    }
    currentNode.links.push(node);
    currentNode = node;
  }
  currentNode.isLastLetter = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let currentNode = this.trie;
  for(let i = 0; i < word.length; i++){
    let node = currentNode.links.find(x => x.value === word[i]);
    if(!node) {
      return false;
    }
    currentNode = node;
  }
  return currentNode.isLastLetter;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let currentNode = this.trie;
  for(let i = 0; i < prefix.length; i++){
    let node = currentNode.links.find(x => x.value === prefix[i]);
    if(!node) {
      return false;
    }
    currentNode = node;
  }
  return true;
};

var obj = new Trie()
obj.insert("link")
var param_2 = obj.search("link");
var param_3 = obj.search("lin");
var param_4 = obj.startsWith("lin")
debugger
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */