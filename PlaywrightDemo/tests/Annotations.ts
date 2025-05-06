/**
 * Test.describe : Grouping of test
 * test.beforeall
 * test.beforeeach
 * test.step
 * test.AfterEach
 * test.AfterAll
 * test.slow
 * test.only
 * 
 * 
 */
// am I audible . I am not able hear

// I am restarting my machine. GIve me few mins
// only
// 1. Smoke
// 2. p1,p2,p3


/*
BeforeAll---File Level
describe[
BeforeAll
BeforeEach
test1
test2
test3
test4
test5
]
test6
test7
*/

//BeforeAll---> BeforeEach-->Test1-->BeforeEach-->test2--->BeforeEach--Test3

//BeforeAll(File level)--->
//test6---Test7
// [BeforeAll(Describe Block scope)---> BeforeEach-->Test1-->BeforeEach-->test2--->BeforeEach--Test3]


/**
 * Taggings : grouping test with Priority.
 * smoke, Regression, sanity, storyNo, testCaseID
 * test(description,body);
 * test(description,details,body)
 */

