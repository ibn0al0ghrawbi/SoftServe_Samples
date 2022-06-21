### Task1: 

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


Example

"abcde" -> 0 # no characters repeats more than once

"aabbcde" -> 2 # 'a' and 'b'

"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

"indivisibility" -> 1 # 'i' occurs six times

"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

"aA11" -> 2 # 'a' and '1'

"ABBA" -> 2 # 'A' and 'B' each occur twice

### Task2:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.


If you want to know more http://en.wikipedia.org/wiki/DNA


In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


More similar exercise are found here http://rosalind.info/problems/list-view/ (source)


DNA_strand ("ATTGC") # return "TAACG"


DNA_strand ("GTAT") # return "CATA"


### Task 3:

Simple, given a string of words, return the length of the shortest word(s).


String will never be empty and you do not need to account for different data types.

Examples

"bitcoin take over the world maybe who knows perhaps" --> 3)

"turns out random test cases are easier than writing out basic ones" --> 3)

"lets talk about javascript the best language" --> 3)

"i want to travel the world writing code one day" --> 1)

"Lets all go on holiday somewhere very cold" --> 2)


### Task 4:

Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.


Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).


If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

""  -->  ""

