/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Subscribe to see which companies asked this question
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode();
    var count = 0;
    var root = head;
    while(l1!==null && l2!==null){
        
        var cur1 = l1.val;
        var cur2 = l2.val;
        var cur = cur1 <= cur2 ? cur1 : cur2;
        
        console.log(cur);
        
        head.next = new ListNode(cur);
        head = head.next;
        //prevent cur1 === cur2 issue
        if(cur === cur1){
            l1 = l1.next;
        }else{
            l2 = l2.next;
        }
    }
    //rest l1
    if(l1){
        while(l1!==null){
            head.next = new ListNode(l1.val);
            head = head.next;
            l1 = l1.next;        
        }
    }
    //rest l2
    if(l2){
        while(l2!==null){
            head.next = new ListNode(l2.val);
            head = head.next;
            l2 = l2.next;
            
        }
    }
    return root.next;
};