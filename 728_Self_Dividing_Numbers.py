class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        arr = []
        num = left
        while num <= right:
            counter = 0
            for s in str(num):
                if s == '0' or num % int(s) != 0:
                    break
                else:
                    counter += 1
                    continue
            if counter == len(str(num)):
                arr.append(num)
            num += 1
        arr.sort()

        return arr
