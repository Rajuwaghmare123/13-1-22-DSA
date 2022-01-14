// https://leetcode.com/problems/average-of-levels-in-binary-tree/ 
var averageOfLevels = function(root) {

    let que = []
    let data = []
    que.push(root)
    while(que.length){
        let temp = que
        let len = que.length
        let node
        let sum = 0
        for(let i = 0 ; i < len ; i++){
            node = que.shift()
            sum += node.val
            if(node.left)
                que.push(node.left)
            if(node.right)
                que.push(node.right)
        }
        sum = sum/len
        data.push(sum)
    }
    return data
    };