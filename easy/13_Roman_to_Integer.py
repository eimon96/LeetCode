class Solution(object):
    def __init__(self):
        self.chars = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        num = 0
        for i in range(len(s) - 1, -1, -1):
            if i + 1 != len(s) and \
               ((s[i] == 'I' and (s[i + 1] == 'V' or s[i + 1] == 'X')) or \
               (s[i] == 'X' and (s[i + 1] == 'L' or s[i + 1] == 'C')) or \
               (s[i] == 'C' and (s[i + 1] == 'D' or s[i + 1] == 'M'))):
                num -= self.chars[s[i]]
            else:
                num += self.chars[s[i]]
        return num
