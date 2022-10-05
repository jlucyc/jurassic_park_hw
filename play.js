const assert = require('assert');

const firstArray = [1,2,3];
const secondArray = firstArray;

assert.deepStrictEqual([1,2,3], ['1','2','3']);  //strictEqual operator tests strict equality int is not = to a string)
                                                    //deepEqual ignores that they are different object and just compares the data
                                                        //deepStrictEqual is like === it wont pass because they are not the same
