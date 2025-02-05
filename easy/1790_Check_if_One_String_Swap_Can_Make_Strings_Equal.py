class Solution(object):
    def areAlmostEqual(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        if s1 == s2:
            return True
        c = 0; a = 0; b = 0; 
        for i in range(0, len(s1)): 
            if s1[i] != s2[i]:
                c += 1
                if c == 1:
                    a = i
                if c == 2:
                    b = i
                    break
        ar1 = list(s1)
        ar2 = list(s2)
        ar1[a], ar1[b] = ar1[b], ar1[a]
        return ar1 == ar2
