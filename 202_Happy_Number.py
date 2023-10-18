class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        loop_count = 0
        while n != 1:
            string = str(n)
            n = 0
            for i in string:
                n += int(i)**2
            loop_count += 1
            if loop_count > 7:
                return False

        return True
