class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        new_address = ''
        for a in address:
            if a == '.':
                new_address += "[.]"
            else:
                new_address += a
        return new_address
