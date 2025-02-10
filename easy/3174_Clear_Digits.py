from collections import OrderedDict

class Solution(object):
    def clearDigits(self, s):
        """
        :type s: str
        :rtype: str
        """
        d = OrderedDict()
        for idx in range(0, len(s)):
            d[idx] = False

        i = 1; j = i - 1
        while i < len(s):
            if (s[i].isdigit()):
                d[i] = True
                while d[j] and j > 0:
                    j -= 1
                d[j] = True
            i += 1
            j = i - 1
        if s[0].isdigit():
            d[0] = True
        keys = [s[key] for key in d if not d[key]]
        return ''.join(keys)
