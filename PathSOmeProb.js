// https://leetcode.com/problems/path-sum/
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    let queue = [[[root,targetSum]]];
    while(queue.length > 0) {
        let item = queue.shift();
        let length = item.length;
        let children = [];
        for(let i=0;i<length;i++) {
            if(item[i][0].left === null && item[i][0].right === null && item[i][1] === item[i][0].val){
                return true;
            }
            if(item[i][0].left) {
                children.push([item[i][0].left, item[i][1]-item[i][0].val]);
            }
            if(item[i][0].right) {
                children.push([item[i][0].right, item[i][1]-item[i][0].val]);
            }
        } 
        if(children.length > 0)
            queue.push(children);
    }
    return false;
};