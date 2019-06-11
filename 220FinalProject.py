class Node:
    def __init__(self, data):
        self.data = data
        self.left = None  
        self.right = None 


class BSTree:
    def __init__(self):
        self.root = None

    #BST insert
    def insert(self, data):
        if not self.root:
            self.root = Node(data)
        else:
            self.insertNode(data, self.root)

    def insertNode(self, data, node):
        if data < node.data:
            if node.left:
                self.insertNode(data, node.left)
            else:
                node.left = Node(data) 
        else:
            if node.right:
                self.insertNode(data, node.right)
            else:
                node.right = Node(data) 

    #BST find
    def find(self,data):
        if not self.root:
            return False
        else:
            return self.findNode(data,self.root)

    def findNode(self,data,node):
        if not node:
            return False
        if data == node.data:
            return True
        if data < node.data:
            return self.findNode(data,node.left)
        if data > node.data:
            return self.findNode(data,node.right)

    #BST traverse
    def traverse(self):
        if self.root:
            self.traverseInOrder(self.root)

    def traverseInOrder(self, node):
        if node.left:
            self.traverseInOrder(node.left)
        print(node.data)
        if node.right:
            self.traverseInOrder(node.right)

    #BST remove
    def remove(self,data):
        if self.root:
            self.removeNode(data,self.root)

    def removeNode(self,data,node):
        if not node:
            return node

        if data < node.data:
            node.left = self.removeNode(data,node.left)
        elif data > node.data:
            node.right = self.removeNode(data,node.right)
        else:
            #check no children case
            if not node.left and not node.right:
                print("removing a leaf node ...")
                del node
                return None
            

            #remove node with single child
            if not node.left:  #remove node with single right child
                print("removing a node with a single right child ...")
                tempnode = node.right
                del node
                return tempnode
            elif not node.right: #remove node with single ledt child
                print("removing a node with a single left child ...")
                tempnode = node.left
                del node
                return tempnode

            #remove node with two children
            print("removing a node with two children...")
            tempnode = self.getPredecessor(node.left)
            node.data = tempnode.data
            node.left = self.removeNode(tempnode.data, node.left)
        
        return node

    def getPredecessor(self, node):
        if node.right:
            return self.getPredecessor(node.right)
        return node

    #BST get min val
    def getMinVal(self):
        if self.root:
            return self.getMin(self.root)

    def getMin(self, node):
        if node.left:
            return self.getMin(node.left)

        return node.data
    # 2

    def getMaxVal(self):
        if self.root:
            return self.getMax(self.root)

    def getMax(self, node):
        if node.right:
            return self.getMax(node.right)

        return node.data
#A
example = BSTree()
example2 = BSTree()

lst1 = [7, 4, 10, 19, 20, 41, 29, 30, 35, 40, 1, 3, 45, 57]
lst2 = [ 11, 19, 15, 23, 58, 32, 42, 67, 90, 29, 1, 45, 0, 78]

#B
for i in lst1:
    example.insert(i)
#print(example.insert(i))

for i in lst2:
    example2.insert(i)
#print(example.insert(i))

example.traverse()
example2.traverse()

# 2
print(example.getMaxVal())
print(example2.getMaxVal())


        

#==============================================================
"""
Exercise: to be Handed in by 3pm Wednesday 12/5/2018
1. Follow directions carefully:
   a. Instantiate a BST
   b. Insert 14 values into the tree using the 'insert' method
   c. Perform part b for two different orderings of the 14 values you chose
   d. Traverse the tree to make sure the values are contained in the tree
   c. Draw a picture of your tree for both orderings

2. Write a method (along with a helper method) to find the maximumm value on a BST


"""



