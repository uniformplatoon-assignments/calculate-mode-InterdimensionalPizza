def calculate_mode(lst):
    answer=[]
    frequency=0
    my_dict={}
    for i in lst:
        instances=lst.count(i)
        my_dict[i]=instances
        if instances > frequency:
            frequency= instances
    for i in my_dict:
        if my_dict[i]== frequency:
            answer.append(i)
    return answer
