// https://leetcode.com/problems/leaf-similar-trees/"
var leafSimilar = function(root1, root2) {
    const dfs = (node) => {
         const stack = [node]
         let leaves = '';
         while (stack.length) {
             let curr = stack.pop();
             if(!curr.left && !curr.right) leaves += curr.val;
             if(curr.left) stack.push(curr.left)
             if(curr.right) stack.push(curr.right);
         }
         return leaves;
     
     }
     return dfs(root1) === dfs(root2);
 };