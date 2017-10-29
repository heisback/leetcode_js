/**
 *
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
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
var addTwoNumbers = function(l1, l2) {
    let l1_len = getLen(l1);
    let l2_len = getLen(l2);
    let len = Math.max(l1_len,l2_len);
    let header  =  new ListNode(0);
    let cur = header;
    while(len>1){
        cur.next = new ListNode(0);
        cur = cur.next;
        --len;
    }
    cur = header;
    while(l1){
        cur.val = l1.val;
        l1 = l1.next;
        cur = cur.next;
    }
    cur = header;
    while(l2){
        cur.val += l2.val;
        l2 = l2.next;
        cur = cur.next;
    }
    cur = header;
    while(cur && cur.next){
        if(cur.val>=10){
            cur.next.val +=Math.floor(cur.val/10)
        }
        cur.val = cur.val % 10;
        cur = cur.next;
    }
    if(cur.val>=10){
        cur.next = new ListNode(Math.floor(cur.val/10));
        cur.val = cur.val % 10;
    }
    return header;
};
var getLen = function (l) {
    let ret = 0;
    if(!l)
        return ret;
    else
        ret = 1;
    while (l.next!=null){
        ret++;
        l=l.next;
    }
    return ret;
};