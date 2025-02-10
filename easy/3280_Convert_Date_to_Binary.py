class Solution(object):
    def convertDateToBinary(self, date):
        """
        :type date: str
        :rtype: str
        """
        year = bin(int(date[0:4]))
        month = bin(int(date[5:7]))
        days = bin(int(date[8:10]))
        r = year[2:] + '-' + month[2:] + '-' + days[2:]
        return r
