# # # # # # # # # # # # # # # # # # # # # # import math

# # # # # # # # # # # # # # # # # # # # # # print(math.sqrt(50))
# # # # # # # # # # # # # # # # # # # # # # # print((-4)**0.5)

# # # # # # # # # # # # # # # # # # # # # # # print(math.sqrt)


# # # # # # # # # # # # # # # # # # # # # import math

# # # # # # # # # # # # # # # # # # # # # number = 81

# # # # # # # # # # # # # # # # # # # # # sqrtOfNumber = math.sqrt(number)

# # # # # # # # # # # # # # # # # # # # # print('square root of number entered: ', sqrtOfNumber)

# # # # # # # # # # # # # # # # # # # # number = 121

# # # # # # # # # # # # # # # # # # # # squareRootOfNumber = number**0.5

# # # # # # # # # # # # # # # # # # # # print('square root of the number: ', squareRootOfNumber)


# # # # # # # # # # # # # # # # # # # import math


# # # # # # # # # # # # # # # # # # # Hypotenuse = 13
# # # # # # # # # # # # # # # # # # # Base = 12

# # # # # # # # # # # # # # # # # # # HypotenuseSquare = Hypotenuse**2
# # # # # # # # # # # # # # # # # # # BaseSquare = Base**2

# # # # # # # # # # # # # # # # # # # Height = math.sqrt(HypotenuseSquare-BaseSquare)

# # # # # # # # # # # # # # # # # # # print('height of triangle is: ', Height)

# # # # # # # # # # # # # # # # # # import math

# # # # # # # # # # # # # # # # # # number = 169

# # # # # # # # # # # # # # # # # # squareRootOfNumber = math.pow(number, 0.5)

# # # # # # # # # # # # # # # # # # print('square root of enter number is: ', squareRootOfNumber)

# # # # # # # # # # # # # # # # # from math import sqrt
# # # # # # # # # # # # # # # # # from time import time
 
# # # # # # # # # # # # # # # # # num_repeats = 10000000
# # # # # # # # # # # # # # # # # start_time = time()
# # # # # # # # # # # # # # # # # for i in range(num_repeats):
# # # # # # # # # # # # # # # # #     sqrt(1012.1234215)
# # # # # # # # # # # # # # # # # print("math.sqrt() Elapsed time: " + str(time()-start_time))

# # # # # # # # # # # # # # # # # # from numpy import sqrt 
# # # # # # # # # # # # # # # # # # start_time = time()
# # # # # # # # # # # # # # # # # # for i in range(num_repeats):
# # # # # # # # # # # # # # # # # #     sqrt(1012.1234215)
# # # # # # # # # # # # # # # # # # print("numpy.sqrt() Elapsed time: " + str(time()-start_time))


# # # # # # # # # # # # # # # # list1 = [1,'rahul', True, 2.3] 
# # # # # # # # # # # # # # # # # for _ in list1:
# # # # # # # # # # # # # # # # #     print(type(_))
# # # # # # # # # # # # # # # # # print(list1)
# # # # # # # # # # # # # # # # list1.append()
# # # # # # # # # # # # # # # # print(list1)


# # # # # # # # # # # # # # # list1 = ['scaler', 5, 'Hello geeks']

# # # # # # # # # # # # # # # list1.append(['python', 'javascript', 50])

# # # # # # # # # # # # # # # list1.append({50,40,10,10,20})

# # # # # # # # # # # # # # # print('updated list after adding new elemets: ', list1)


# # # # # # # # # # # # # # def compare_strings(str1, str2):
# # # # # # # # # # # # # #     count1 = 0
# # # # # # # # # # # # # #     count2 = 0
      
# # # # # # # # # # # # # #     for i in range(len(str1)):
# # # # # # # # # # # # # #         if str1[i] >= "0" and str1[i] <= "9":
# # # # # # # # # # # # # #             count1 += 1
      
# # # # # # # # # # # # # #     for i in range(len(str2)):
# # # # # # # # # # # # # #         if str2[i] >= "0" and str2[i] <= "9":
# # # # # # # # # # # # # #             count2 += 1
      
# # # # # # # # # # # # # #     return count1 == count2
  
  
# # # # # # # # # # # # # # print(compare_strings("123", "12345"))
# # # # # # # # # # # # # # print(compare_strings("12345", "geeks"))
# # # # # # # # # # # # # # print(compare_strings("12geeks", "geeks12"))



# # # # # # # # # # # # # # a=[1,2,1,1,2,1,2]
# # # # # # # # # # # # # #  01234567890
# # # # # # # # # # # # # #  12345678901
# # # # # # # # # # # # # a='rahul rahul'
# # # # # # # # # # # # # # print(a[-5])
# # # # # # # # # # # # # print(a.count('l', None, 11))

# # # # # # # # # # # # # arr1 = [1,1,2,5,1,20,4,5,8,9]

# # # # # # # # # # # # string1 = 'ab bc ba ab bc cb xz qs ab hj ab ja ab'

# # # # # # # # # # # # occurenceOfSubString = string1.count('ab', None, 15)

# # # # # # # # # # # # print('occurence of substring in string1: ', occurenceOfSubString)


# # # # # # # # # # # a=['ab','bac','cba','ada','aaa']
# # # # # # # # # # # print(a.count('a'))

# # # # # # # # # # string1 = '010001111101010111101110111110000011111101010101'

# # # # # # # # # # occurenceOf0 = string1.count('0')

# # # # # # # # # # print('occurence of 0 in string1: ', occurenceOf0)

# # # # # # # # # string1 = '010001111101010111101110111110000011111101010101'

# # # # # # # # # occurenceOf01 = string1.count('01')

# # # # # # # # # print('occurence of 01 in string1: ', occurenceOf01)


# # # # # # # # # string1 = 'hello'
# # # # # # # # # string2 = 'world'

# # # # # # # # # stringConcatenated = string1 + string2

# # # # # # # # # print('string after concatenation: ', stringConcatenated)

# # # # # # # # # str1 = ''
# # # # # # # # # str2 = ''

# # # # # # # # # newStr = str1 + str2


# # # # # # # # # string1 = 'Scaler'

# # # # # # # # # stringConcatenated = string1*3


# # # # # # # # # str1 = ''

# # # # # # # # # noOfRepition = 10

# # # # # # # # # newString = str1 * noOfRepition 

# # # # # # # # string1 = 'Scaler'
# # # # # # # # string2 = 'Academy'

# # # # # # # # print('string after concatenation: ', string1,string2)

# # # # # # # # str1 = ''
# # # # # # # # str2 = ''

# # # # # # # # print(str1,str2)

# # # # # # # print('a'+2)


# # # # # # title = 'Mr.'

# # # # # # firstName = 'Scaler'

# # # # # # lastName = 'Academy'

# # # # # # fullNameByAdditionOperator = title+firstName+lastName

# # # # # # fullNameByJoinMethod = ' '.join([title, firstName, lastName])

# # # # # # fullNameByFormatFunction = '{}-{} {}'.format(title, firstName, lastName)

# # # # # # print('full Name By Addition Operator: ', fullNameByAdditionOperator)
# # # # # # print('full Name By Format Function', fullNameByFormatFunction)
# # # # # # print('full Name By Join Method', fullNameByJoinMethod)


# # # # # a='rahul mahajan '
# # # # # print(a.count(' '))

# # # # import random

# # # # print(random.randint(10,100))
# # # # # print(int(random.random()*10)+10)



# import random

# startValue = 10
# endValue = 1000

# numberOfRandomNumber = 10
# numberOfRandomNumber = 10

# listOfRandomNumber = []

# for i in range(numberOfRandomNumber):
# for i in range(numberOfRandomNumber):
#     randomNumber = random.randint(startValue, endValue)
#     listOfRandomNumber.append(randomNumber)

# print('your list of random numbers is:', listOfRandomNumber)
# print('your list of random numbers is:', listOfRandomNumber)
# print('your list of random numbers is:', listOfRandomNumber)
# print('your list of random numbers is:', listOfRandomNumber)
# print('your list of random numbers is:', listOfRandomNumber)

