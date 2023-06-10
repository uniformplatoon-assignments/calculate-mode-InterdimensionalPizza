def calculate_mode(array):
    track_dict = dict()
    answer = []
    for elem in array:
        if elem not in track_dict.keys():
            track_dict[elem] = 1
        else:
            track_dict[elem] += 1
    tracker = list(track_dict.values())[0]
    for key in track_dict.keys():
        if track_dict[key] > tracker:
            tracker = track_dict[key]
    for key in track_dict.keys():
        if track_dict[key] == tracker:
            answer.append(key)
    return answer



print(calculate_mode([1,2,3,3]))         # => [3]
print(calculate_mode([4.5, 0, 0]))       # => [0]
print(calculate_mode([1.5, -1, 1, 1.5])) # => [1.5]
print(calculate_mode([1,1,2,2]))         # => [1,2]
print(calculate_mode([1,2,3]))           # => [1,2,3], because all occur with equal frequency
print(calculate_mode(["who", "what", "where", "who"])) # => ["who"]