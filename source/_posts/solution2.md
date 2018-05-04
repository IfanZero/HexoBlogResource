---
title: Leetcode刷题(2)
date: 2018-05-04 14:34:22
categories: "Leetcode"
tags: 算法
---

#### 两数相加

---

给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

---

下面为我的解决代码:

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = null;
            ListNode nextNode = null;

            int sum= l1.val+l2.val;
            int promotion = sum/10;
            sum =sum-promotion*10;
            result = new ListNode(sum);
            
            
            int i = 0;
            int j = 0;
            while(l1.next!=null||l2.next!=null||promotion>0){
               
               
                if (l1.next == null){
                    i=0;
                }else {
                    l1 = l1.next;
                    i=l1.val;
                }
                if (l2.next == null){
                    j=0;
                }else {
                    l2 = l2.next;
                    j=l2.val;
                }
                sum = i+j+promotion;
                promotion = sum/10;
                sum =sum-promotion*10;
                if (nextNode ==null){
                    nextNode = new ListNode(sum);
                    result.next = nextNode;
                }else {
                  nextNode.next = new ListNode(sum);
                    nextNode = nextNode.next;
                }
               
                
            }
            if (promotion>0){
                nextNode.next = new ListNode(promotion);
            }
            return result;
    }
}
```
