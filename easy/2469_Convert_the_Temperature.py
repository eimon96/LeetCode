class Solution(object):
    def convertTemperature(self, celsius):
        """
        :type celsius: float
        :rtype: List[float]
        """
        kelvin = celsius + 273.15
        fahr = celsius * 1.8 + 32.00
        return [kelvin, fahr]
