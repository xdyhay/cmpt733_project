from collections import Counter

# re-join the token words after all words_preprocessing processes
def join_tokens(tokens):
    return ' '.join(tokens)

# count unique words
def counter_word(col):
    count = Counter()
    for text in col.values:
        for word in text.split():
            count[word] += 1
    return count

# use this method to decode the sequence back to text
def decode_seq(seq, reverse_unique_word_index):
    return ' '.join([reverse_unique_word_index.get(i) for i in seq])