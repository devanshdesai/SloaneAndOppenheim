import itertools

def main():
    nums = ["4", "8", "15", "16", "23", "42"]
    totalsum = 0
    for k in range(1, 7):
        perms = list(itertools.permutations(nums, k))
        for i in range(0, len(perms)):
            s = ""
            for j in range(0, len(perms[i])):
                s = s + perms[i][j]

            i = int(s)
            totalsum += i
            i = 0
        perms = []

    print "Total Sum:  %d" % totalsum





if __name__ == "__main__":
    main()
