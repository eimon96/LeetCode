class Solution(object):
    def backspaceCompare(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        arr = self.logic(s)
        arr2 = self.logic(t)
        return ''.join(arr) == ''.join(arr2)

    def logic(self, string):
        arr = []
        for char in string:
            if char == '#':
                if len(arr) > 0:
                    arr.pop()
            else:
                arr.append(char)
        return arr
