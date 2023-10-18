class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        runningSum = [nums[0]]
        for i in range(1, len(nums)):
            sum = 0
            for j in range(0, i + 1):
                sum += nums[j]
            runningSum.append(sum)
        return runningSum
