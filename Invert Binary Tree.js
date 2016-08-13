/**
 * Invert a binary tree.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */ 
var invertTree = function(root) {
    
    if(root !== null){
        //to prevent overwrite the value, I set the new vars for left & right
        var left  = root.left!==null  ? root.left  : null,
            right = root.right!==null ? root.right : null;
        root.left = invertTree(right);
        root.right = invertTree(left);
    }
    return root;
};