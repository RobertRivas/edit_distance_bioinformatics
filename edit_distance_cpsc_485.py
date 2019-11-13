
# gets user string input
str1 = input("Enter string 1: ")
str2 = input("Enter string 2: ")

# initializes 2d array of zeros
twodarray = []
back_track_record = []

for j in range(len(str1) + 1):
    column = []
    for i in range(len(str2) + 1):
        column.append(0)
    twodarray.append(column)

for j in range(len(str1) + 1):
    column = []
    for i in range(len(str2) + 1):
        column.append(0)
    back_track_record.append(column)


# creates first row and first column
for i in range(len(str2) + 1):

    twodarray[0][i] = i

for k in range(len(str1) + 1):
    twodarray[k][0] = k




# fills out rest of table



for i in range(1, len(str1) + 1):
    for j in range(1, len(str2) + 1):
        if str1[i-1] != str2[j-1]:
            diagelt = 1
        else:
            diagelt = 0
        twodarray[i][j] = min(twodarray[i - 1][j - 1] + diagelt, twodarray[i - 1][j] + 1, twodarray[i][j - 1] + 1)



for k in range(len(str1) + 1):
    print(twodarray[k])




print()

# prints edit distance
print(f"The edit distance is: {twodarray[len(str1)][len(str2)]} ")

# prints alignment

align1 = ""
align2 = ""
i, j = len(str1), len(str2)
back_track_record[i][j] = twodarray[i][j]

# backtrace algorithm

while (i, j) != (0, 0):

    if str1[i - 1] == str2[j - 1]:
        back_track_record[i - 1][j - 1] = twodarray[i - 1][j - 1]
        align1 = str1[i - 1] + align1
        align2 = str2[j - 1] + align2
        i -= 1
        j -= 1
    elif str1[i - 1] != str2[j - 1]:
        smallest = min(twodarray[i - 1][j - 1], twodarray[i - 1][j], twodarray[i][j - 1] )
        if smallest == twodarray[i - 1][j - 1]:
            back_track_record[i - 1][j - 1] = twodarray[i - 1][j - 1]
            align1 = str1[i - 1] + align1
            align2 = str2[j - 1] + align2

            i -= 1
            j -= 1
        elif smallest == twodarray[i - 1][j]:
            back_track_record[i - 1][j] = twodarray[i - 1][j]

            align1 = str1[i - 1] + align1
            align2 = "_" + align2

            i -= 1
        elif smallest == twodarray[i][j - 1]:
            back_track_record[i][j -1] = twodarray[i][j - 1]

            align1 = "_" + align1
            align2 = str2[j-1] + align2
            j -= 1




print()
print("Alignment is: ")
print(align1)
print(align2)
