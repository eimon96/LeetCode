class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)

        if n not in nums:
            return n

        nums.sort()
        for i in range(n - 1):
            if nums[i + 1] - nums[i] > 1:
                return nums[i + 1] - 1
                
        return 0
