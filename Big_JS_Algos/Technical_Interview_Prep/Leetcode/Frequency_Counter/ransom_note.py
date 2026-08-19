
def can_construct(ransom_note, magazine):
    if len(magazine) == 0:
        return False

    lookup = {}

    for char in magazine:
        if char in lookup:
            lookup[char] += 1
        else:
            lookup[char] = 1

    for char in ransom_note:
        if char not in lookup or lookup[char] == 0:
            return False
        else:
            lookup[char] -= 1

    return True