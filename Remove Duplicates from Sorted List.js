/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

    For example,
    Given 1->1->2, return 1->2.
    Given 1->1->2->3->3, return 1->2->3.

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if(head===null){
        return head;
    }
    
    var map = new Set();
    var cur = head;
    map.add(cur.val);
    //tips for operating linked list, two elements at once
    while(cur && cur.next){
        if(map.has(cur.next.val)){
            
            cur.next = cur.next.next;
            
        }else{
           map.add(cur.next.val);
           cur = cur.next;
        }
        
    }
    return head;
};