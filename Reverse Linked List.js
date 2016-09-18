/** Reverse a singly linked list. */
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

/** iteratively http://imgur.com/a/Dnp0L*/
var reverseList = function(head) {
    var prev = null;
    var current = head;
    while (current !== null) {
        //save next
        var next = current.next;
        //point next to prev
        current.next = prev;
        //update prev & current 
        prev = current;
        current = next;
    }
    //prev will point to the last element
    return prev;
};

/** recursively. */
var reverseList = function(head) {
    var newHead = head;
    var reverse = function(head){
        if(head===null){
            return;
        }
        if(head.next===null){
            newHead = head;
            return;
        }
        reverse(head.next);
        
        //the returens start from the second last item

        //save the next
        var next = head.next;
        //reverse the pointer
        next.next = head;
        //clear the old pointer
        head.next = null;
    }
    reverse(head);
    return newHead;
};