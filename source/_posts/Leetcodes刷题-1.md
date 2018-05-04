---
title: Leetcode刷题(1)
date: 2018-05-04 14:25:14
categories: "Leetcode"
tags: 算法
---

#### 两数之和

---

给定一个整数数组和一个目标值，找出数组中和为目标值的**两个**数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

---

下面为我的解决代码:

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int length = nums.length;
        for(int i =0;i<length;i++){
            for(int j=i+1;j<length;j++){
                if(nums[i]+nums[j]==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[2];
    }
}
```

