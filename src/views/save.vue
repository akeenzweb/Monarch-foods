<!--DOCUMENTATION

So the general idea of the order is that when you click the Place order
buttton on the cart, it saves the order in an object known as the partialOrder inside
the store. Then in the add location page, it then brings that object at the created lifecycle hook
and assigns it to an empty object also called partial order and when the location is added, it
stores both inside a new object called fullOrder and then mutates it into the orderList in the store -->