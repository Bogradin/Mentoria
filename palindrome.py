class Solution(object):
    def isPalindrome(self, x): 
        lenght = len(x)
        #split word in two halves
        left = ""
        right = ""
        #set the biggest palindrome possible as the word itself
        biggest = x

        if (lenght % 2 == 0):
            j = lenght / 2
        else:
            j = (lenght - 1) / 2

        for i in range(j):
            left = left + x[i]
            right = right + x[-i - 1]
            #if left and right != define the biggest palindrome possible and break out
            #i == 0 is not a palindrome, as it only has one letter
            if (left != right):
                if (i == 0):
                    return "there are no palindromes possible"
                biggest = left
                break       
        return biggest