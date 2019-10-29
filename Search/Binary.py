"""
1) What is binary search?

Binary search, also known as half-interval search, logarithmic search
or binary chop, is a search algorithm that finds the target value
with in a sorted list/array.

2) How does binary search work?

Let's say you have a list of 10 elements, numbered 1-10.

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

and you're trying to find the position of the item 7.
You could always start from the first index of the array
and count up, but that will take some time and really
just be compute inefficient.

Another way to find item 7 would be to take the current list
and to split it down the middle starting at 5, and comparing
the values while asking is this position to high or too low.
Doing this we can cut out half of the elements right away
as 1-5 is too low. Now our second half of the list is
6-10 we can split that in half

Binary search works by taking a sorted list and
comparing the middle element in a list.
"""

#WIP 28

# Takes in two arguments, a list and the item you're looking for
def binary_search(list, item):
    low = 0;
    high = len(list) - 1

    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]

        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

print(binary_search(my_list, 7))
print(my_list[6])
