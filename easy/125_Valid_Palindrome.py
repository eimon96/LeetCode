class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        new_s = ''
        for i in s:
            if i not in ' ,./:;!@#$%^&*()?`~<>@_-+=[]/\\"}{\'':
                new_s += i
        return new_s.lower() == new_s[::-1].lower()
