class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        valids = ["()", "[]", "{" + "}"]
        stack = deque()
        stack.append(s[0])

        i = 1
        while i < len(s):
            if not bool(stack) or stack[-1] + s[i] not in valids:
                stack.append(s[i]) 
            else:
                stack.pop()
            i += 1

        return not bool(stack)
