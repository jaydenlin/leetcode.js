/**
 * Given a singly linked list, determine if it is a palindrome.
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
 * @return {boolean}
 */
var reverse = function(head){
    var cur = head,
        prev = null,
        nxet = null;
    while(cur!==null){
        next = cur.next;
        cur.next = prev;
        //update cur & prev
        prev = cur;
        cur = next;
    }
    return prev;
}
var isPalindrome = function(head) {
    if(head===null){
        return true;
    }
    if(head.next===null){
        return true;
    }
    //use fast/slow pointers to find the midPoint
    var fast = head;
    var slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var midPoint = reverse(slow);
    fast = head;
    //Because the values after midPoints are reversed, now the mid value is at the end.
    //no need to worry whether the element count is odd or even
    while(fast && midPoint && (fast.val === midPoint.val)){
        fast = fast.next;
        midPoint = midPoint.next;
    }
    //if it successfully goes to the end
    return midPoint === null;
    
};
