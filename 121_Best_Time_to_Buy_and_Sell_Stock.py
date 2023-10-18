class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profit = 0
        diff = 0
        left = 0
        right = 1
        while right < len(prices):
            diff = prices[right] - prices[left]
            if max_profit < diff:
                max_profit = diff
            if prices[left] > prices[right]:
                left = right
            right += 1

        return max_profit
