import math

class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 0 or n < 0:
            return False
        elif n == 1:
            return True
        else:
            r = math.log(n, 2)
            r = round(r, 10)
            return r.is_integer()
