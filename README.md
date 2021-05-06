# Stuff learned

- FlatLists
  - horizontal
  - showsHorizontalScrollIndicator={false}
- Buttons (prestyled with props: onPress and title) and TouchableOpacity
- Stack navigator, props and navigation.
- Parent child relationship
- Assets directory for static content
- State - tracking data over time, if data changes app will 'rerender'
  - useState - type of hook

const colours = ['red', 'green']
colours[0] ---> 'red'
const [colourOne, colourTwo] = colours; (destructuring an array)

- Reducers: function that manages changes to object states
  - Type of hook
  - arg1: object which contains all of the states
  - arg2: object that describes the update
  - Use arg2 to decide how to change a state in arg1

-Convention for reducers
  - use type and payload for action objects

-Input text

Layout
- box object model: used to position a single element
  - 3 layers: Padding, then border, then margin
  - can change the 3 with all sides or left, right, top and bottom.

- flex box: used to position multiple elements (define in parent element)
  - E.g. text elements within a view.
  - Define the following in the view 
  - alignItems
  - justifyContent
  - flexDirection: changes the default direction of alignItems and justify content

- particular positioning (done within the child element)
- overides the some of the parent's layout
  - flex: child takes up as much space as it can (dir depends on flex direction)
    - Amount of space taken up is proportional to all of the flex values (4, 4, 2  ---> 40%, 40%, 20%)
  - alignSelf: aligns a particular child, flex-start, center or flex-end.
  - position: relative or absolute
    -...StyleSheet.absoluteFillObject - child fills parent

  
