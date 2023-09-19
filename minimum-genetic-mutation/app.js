// https://leetcode.com/problems/minimum-genetic-mutation

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  const graph = {};
  bank.forEach(x => {
    graph[x] = {
      value: x,
      links: []
    }
  })

  for(let n in graph){
    for(let x in graph){
      if(x === n) continue;
      if(isMutation(graph[n].value, graph[x].value)){
        graph[n].links.push(graph[x]);
      }
    }
  }

  const finish = Object.values(graph).find(x => x.value === endGene);
  if(!finish) {
    return -1;
  }

  const roots = Object.values(graph).filter(x => isMutation(startGene, x.value));
  const results = [];
  roots.forEach(r => {
    Object.values(graph).forEach(n => delete n.pathLength)
    const seedPath = r.value === startGene ? 0 : 1;
    dfs(r, seedPath);
    if(finish.pathLength) results.push(finish.pathLength)
  })




  function dfs(node, length){
    // if(node.value === endGene){
    //   return leng
    // }
    node.pathLength = node.pathLength ? Math.min(node.pathLength, length) : length;
    node.links.filter(x => x.pathLength > length || x.pathLength === undefined).forEach(x => dfs(x, length+1));
  }

  const result = results.length ? Math.min(...results) : -1;
  return result;
};

function isMutation(a,b){
  let diff = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i] !== b[i]) diff++;
  }

  return diff <= 1;
}

const startGene = "AAAACCCC";
const endGene = "CCCCCCCC";
const bank = ["AAAACCCA","AAACCCCA","AACCCCCA","AACCCCCC","ACCCCCCC","CCCCCCCC","AAACCCCC","AACCCCCC"];

minMutation(startGene, endGene, bank)