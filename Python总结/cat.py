#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
from dog import dog
class cat(dog):
    def __init__(self):
        super().__init__()
        self.name = 'cat'

    def run(self):
        print('cat cat cat')

if __name__ == '__main__':
    mycat = cat()
    print(dir(mycat))
    print(mycat.name)
    mycat.run()
    mycat.run2()
