class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        my_dict = {}
        for i in s:
            if i not in my_dict:
                my_dict[i] = 1
            else:
                my_dict[i] += 1
        
        my_dict2 = my_dict.copy()
        for j in t:
            if j not in my_dict2:
                return j
            else:
                my_dict2[j] -= 1

        min_key = min(my_dict2, key=lambda k: my_dict2[k])
        return min_key
